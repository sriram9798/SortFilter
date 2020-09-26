import React, { Component } from 'react';
import '../filters/sortfilter.css';
const url = "http://localhost:8900/restaurantlist";


class SortFilter extends Component {


    SortLogic = (event) => {
        let mealtype = sessionStorage.getItem('type');
        let cost = event.target.value;

        const c_sort = `${url}/${mealtype}?hTol=${cost}`;

        console.log(c_sort);
        fetch(c_sort, { method: 'GET' })
            .then(res => res.json())
            .then(data => this.props.sortprice(data))
    }


    render() {
        return (
            <div className="container">
                <div className="sortHeading" style={{ marginLeft: '27px' }}>Cost Filter</div>
                <div id="sortOptions" onChange={this.SortLogic}>
                    <input type="radio" value="-1" name="cuisine" style={{ marginLeft: '27px', marginTop: '15px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>Price low to high</label>

                    <br />

                    <input type="radio" value="1" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>Price high to low</label>
                </div>
            </div>
        )
    }
}

export default SortFilter;
