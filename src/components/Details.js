import React, {Component} from 'react'
import DetailsContainer from './DetailsContainer'
import Footer from './Footer'


class Details extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-header">
                    <p>Shop</p>
                </div>
                <div>
                    <DetailsContainer />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Details