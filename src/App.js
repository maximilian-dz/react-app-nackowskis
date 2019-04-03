import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import AuctionDetails from './components/auction/AuctionDetails'
import Search from './components/dashboard/Search'
import { getAllAuctions, createAuction } from './components/API/WebAPI'
import CreateAuction from './components/auction/CreateAuction'
import Footer from './components/layout/Footer'

class App extends Component {
  state = {
    auctions: [],
    filtered: []
  }
  componentWillMount() {
    getAllAuctions('2020').then((res) => {
      const filteredAuctions = this.getFilteredAuctions(res)
      this.setState({
        auctions: res,
        filtered: filteredAuctions
      })
    })
  }

  getFilteredAuctions = (auctions) => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const currentDate =
      year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second

    const filteredList = auctions.filter(
      (auction) => auction.SlutDatum > currentDate
    )

    return filteredList
  }
  handleSearch = (val) => {
    const newList = this.state.auctions.filter((auction) =>
      auction.Titel.toLowerCase().includes(val)
    )

    this.setState({
      filtered: newList
    })
  }

  addAuction = (newAuction) => {
    console.log(newAuction)
    newAuction.Gruppkod = '2020'
    createAuction('2020', newAuction).then(() =>
      getAllAuctions('2020').then((res) => {
        const filteredAuctions = this.getFilteredAuctions(res)
        this.setState({
          auctions: res,
          filtered: filteredAuctions
        })
      })
    )
  }

  updateAuctions = (updatedAuction) => {
    let index = this.state.auctions.findIndex((auction) => {
      return auction.AuktionID === updatedAuction.AuktionID
    })
    let auctions = this.state.auctions
    auctions[index] = updatedAuction
    this.setState({ filtered: auctions })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Search onSubmit={this.handleSearch} />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Dashboard
                {...props}
                isAuthed={true}
                auctions={this.state.filtered}
              />
            )}
          />
          <Route
            path="/auction/:AuktionID"
            render={(props) => (
              <AuctionDetails
                {...props}
                isAuthed={true}
                auctions={this.state.auctions}
                onChange={this.updateAuctions}
              />
            )}
          />
          <Route
            path="/create"
            render={(props) => (
              <CreateAuction
                {...props}
                isAuthed={true}
                onSubmit={this.addAuction}
              />
            )}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
