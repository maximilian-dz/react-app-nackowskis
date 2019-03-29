import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AuctionDetails from './components/auction/AuctionDetails';
import Search from './components/dashboard/Search';

class App extends Component {
  state = {
    auctions: [],
    filtered: []
  };
  componentWillMount() {
    // const auctions = fetchAuctions();
    // this.setState({
    //   auctions,
    //   filtered: auctions
    // })
  }
  handleChange = (val) => {
    let currentList = this.state.auctions;
    let newList = [];

    if (val !== '' && val !== undefined) {
      newList = currentList.filter((auction) =>
        auction.Titel.toLowerCase().includes(val)
      );
    } else {
      newList = currentList;
    }

    this.setState({
      filteredAuctions: newList
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Search />
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
            path="/auction/:AuktionID/"
            render={(props) => (
              <AuctionDetails
                {...props}
                isAuthed={true}
                auctions={this.state.auctions}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
