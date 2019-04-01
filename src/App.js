import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import AuctionDetails from './components/auction/AuctionDetails';
import Search from './components/dashboard/Search';
import { getAllAuctions } from './components/API/WebAPI';
// import CreateAuction from './components/auction/CreateAuction';

class App extends Component {
  state = {
    auctions: [],
    filtered: []
  };
  componentWillMount() {
    getAllAuctions('7').then((res) => {
      this.setState({
        auctions: res,
        filtered: res
      });
    });
  }
  handleSearch = (val) => {
    console.log(val);

    const newList = this.state.auctions.filter((auction) =>
      auction.Titel.toLowerCase().includes(val)
    );

    this.setState({
      filtered: newList
    });
  };

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
          {
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
          }
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
