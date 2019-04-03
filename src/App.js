import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import AuctionDetails from './components/auction/AuctionDetails'
import Search from './components/dashboard/Search'
import { getAllAuctions } from './components/API/WebAPI'
import CreateAuction from './components/auction/CreateAuction'
import BidList from './components/bid/BidList'
import { createAuction } from './components/API/WebAPI'
import Footer from './components/layout/Footer'

class App extends Component {
  state = {
    auctions: [],
    filtered: []
  }
  componentWillMount() {
    getAllAuctions('2020').then((res) => {

      var date = new Date()
        var day = date.getDate() + 1
        var month = date.getMonth() + 1
        var year = date.getFullYear()
        var currentDate = year + '-' + month + '-' + day

        const filteredList = [...res].filter((auction) =>
      auction.SlutDatum > currentDate)

      console.log(filteredList)

      this.setState({
        auctions: res,
        filtered: filteredList
      })
    })
  }
  handleSearch = (val) => {
    console.log(val)

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
    createAuction('2020', newAuction)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  updateAuctions = (updatedAuction) => {
    let index = this.state.auctions.findIndex((auction) => {
      return auction.AuktionID === updatedAuction.AuktionID
    })
    let auctions = this.state.auctions
    auctions[index] = updatedAuction
    this.setState({ auctions: auctions })
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
