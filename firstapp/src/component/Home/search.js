import React, { Component } from 'react';
import '../Home/search.css';

const lurl = "http://localhost:8900/location";
const Rurl = "http://localhost:8900/restaurant?city=";

class Search extends Component {
    constructor() {
        super()

        // defining states
        this.state = {
            title: 'Find the Best Restaurants,Cafes,Bars',
            location: '',
            restaurant: ''
        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.city_name}-{item.name}
                    </option>
                )
            })
        }
    }


    renderRestaurants = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item._id}>
                        {item.name}|{item.locality}
                    </option>
                )
            })
        }
    }


    handleCity = (event) => {
        console.log(event.target.value)
        fetch(`${Rurl}${event.target.value}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurant: data })
            })
    }

    handleRestaurant = (event) => {
       
        this.props.rid(event.target.value)
    }

    render() {
        console.log("<<<<Location>>>>>", this.state.location)
        return (
            <div className="container">
                <img
                    src="/images/homepageimg.png"
                    class="img-responsive"
                    alt="homepage"
                    style={{ width: "1466px", height: "450px", margin: "auto" }} />


                <div className="container">
                    <div className="logo">
                        <b>e!</b>
                    </div>

                    <div className="row">
                        <div className="heading col-lg-12 col-md-12 col-sm-12">
                            {this.state.title}
                        </div>
                    </div>

                    <div className="locationSelector">
                        <select className="locationDropdown" onChange={this.handleCity}>
                            <option>Please type a city</option>
                            {this.renderCity(this.state.location)}
                        </select>

                        <select className="locationDropdown" onChange={this.handleRestaurant}>
                            <option>Select Restaurant</option>
                            {this.renderRestaurants(this.state.restaurant)}
                        </select>

                    </div>
                </div>

            </div>
        )
    }

    componentDidMount() {
        fetch(lurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ location: data })
            })
    }
}





export default Search;