import React, { Component } from 'react'
import { getAuction } from '../API/WebAPI'
import BidList from '../bid/BidList'
import AuctionInnerDetails from '../auction/AuctionInnerDetails'

export default class AuctionDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.AuktionID,
            // group: this.props.match.params.GroupID,
            auction: null,
            isEditing: false
        }
    }

    componentWillMount() {
        getAuction(2020, this.state.id).then((json) => {
            this.setState({ auction: json })
        })
    }

    save = (update) => {
        this.props.onChange(update)
    }

    render() {
        if (this.state.auction != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col s12 16">
                            <div className="card">
                                <div className="card-image">
                                    <img
                                        src="https://khsbicycles.com/wp-content/plugins/vslider/timthumb.php?src=http%3A%2F%2Fkhsbicycles.com%2Fwp-content%2Fuploads%2F2016%2F07%2Fkhs-bicycles-masthead-1000x300-fat-bike-tree.jpg&w=1000&h=300&zc=1&q=80"
                                        alt="auction"
                                    />
                                    <a
                                        href="https://www.google.com"
                                        className="halfway-fab btn-floating red pulse"
                                    >
                                        <i className="material-icons">favorite</i>
                                    </a>
                                </div>
                                <AuctionInnerDetails
                                    id={this.state.id}
                                    auction={this.state.auction}
                                    isEditing={this.state.isEditing}
                                    save={this.save}
                                />
                            </div>
                        </div>
                    </div>
                    <BidList auctionId={this.state.id} />
                </div>
            )
        }
        return null
    }
}
