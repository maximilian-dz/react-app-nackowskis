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
    const today = Date.now()

    const filteredList = auctions.filter(
      (auction) => Date.parse(auction.SlutDatum) > today
    )

    return filteredList
  }

  handleSearch = (val) => {
    const newList = this.state.auctions.filter((auction) =>
      auction.Titel.toLowerCase().includes(val)
    )
    console.log(newList)
    this.setState({
      filtered: newList
    })
  }

  addAuction = (newAuction) => {
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
    let index = this.state.filtered.findIndex((auction) => {
      return auction.AuktionID === updatedAuction.AuktionID
    })
    let auctions = this.state.filtered
    auctions[index] = updatedAuction
    this.setState({ filtered: auctions })
  }

  deleteAuction = (updatedAuction) => {
    let auctions = this.state.filtered.filter((auction) => {
      return auction.AuktionID !== updatedAuction.AuktionID
    })
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
                deleteAuction={this.deleteAuction}
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
