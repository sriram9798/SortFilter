import React, { Component } from 'react';
import axios from 'axios';
import './cuisinefilter.css'
const url = "http://localhost:8900/restaurantlist";

class CuisineFilter extends Component {

    cuisineLogic = (event) => {
        let mealtype = sessionStorage.getItem('type');
        let cuisineType = event.target.value;
        let curl;
        if (cuisineType === " ") {
            curl = `${url}/${mealtype}`
        } else {
            curl = `${url}/${mealtype}?cuisine=${event.target.value}`
        }

        axios.get(curl)
            .then((response) => { this.props.datapercuisine(response.data) })
    }

    render() {
        return (
            <div className="container">

                <div className="menuHeading">Cuisine</div>

                <div id="menuOptions" onChange={this.cuisineLogic} >

                    <input type="radio" value="" name="cuisine" style={{ marginLeft: '27px', marginTop: '15px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>All</label>

                    <br />

                    <input type="radio" value="1" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>North Indian</label>
                    <br />
                    <input type="radio" value="2" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>South Indian</label>
                    <br />

                    <input type="radio" value="3" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>Chinese</label>

                    <br />

                    <input type="radio" value="4" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>Fast Food</label>

                    <br />

                    <input type="radio" value="5" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>Street Food</label>

                </div>
            </div>

        )
    }
}

export default CuisineFilter;