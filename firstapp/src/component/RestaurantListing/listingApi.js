import React, { Component } from 'react';
import axios from 'axios';
import './listing.css'
import CusineFilter from '../filters/cuisinefilter';
import SortFilter from '../filters/sortfilter';
import CostFilter from '../filters/costfilter';
import ListingDisplay from './listingDisplay';
const lurl = "http://localhost:8900/restaurant?mealtype=";

class Listing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restListing: ''
        }
    }

    setDataPerFilter(sortedData) {
        this.setState({ restListing: sortedData })
    }


    handleSortPrice=(data)=>{
        this.setState({restaurantList:data})
    }


    render() {
        console.log(this.props.match.params.id)
        return (
            <div>
                <div>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#fbar" style={{
                    backgroundColor:'var(--white)',marginTop:'1px',float:'left',width:'380px',height:'40px',marginBottom:'5px',marginLeft:'5%',boxShadow:'0 3px 6px black',color:'gray',borderRadius:'0px'}}>
                        Filters/Sort
                    <span class="caret"></span>
                    </button>
                </div>
                        
                        
                <div className="verticalContainer" id="fbar">
                    <CusineFilter mealIdNumber={this.props.match.params.id} datapercuisine={(data) => { this.setDataPerFilter(data) }} />
                    <CostFilter datapercost={(data) => { this.setDataPerFilter(data) }} mealIdNumber={this.props.match.params.id} />

                    <SortFilter sortprice={(data)=>{this.handleSortPrice(data)}}/>
                </div>
                        
                
                
                <div> 
                    <ListingDisplay restdata={this.state.restListing} />
                    
                </div>
                  
            </div>
        )
    }

    componentDidMount() {
        var mealid = this.props.match.params.id;
        sessionStorage.setItem('type', mealid)
        axios.get(`${lurl}${mealid}`)
            .then((response) => { this.setState({ restListing: response.data }) })
    }
}
export default Listing;