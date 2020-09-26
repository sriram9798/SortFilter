import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './RestaurantDetails.css';

const url = "http://localhost:8900/restaurantDetails";

class RestaurantDetails extends Component {
    constructor() {
        super()

        this.state = {
            rest: {
                "Cuisine": [
                    {
                        "name": ""
                    },
                    {
                        "name": ""
                    }
                ]
            }
        }
    }

    // function for navigating to home page
    onBack = () => {
        let mealid = sessionStorage.getItem('type');
        this.props.history.push(`/list/${mealid}`)
    }

    render() {
        var { rest } = this.state;
        return (
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h2>{rest.name}</h2>
                    </div>

                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="myCarousel" class="carousel slide" data-ride="carousel">

                                    <ol class="carousel-indicators">
                                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                        <li data-target="#myCarousel" data-slide-to="1"></li>
                                        <li data-target="#myCarousel" data-slide-to="2"></li>
                                    </ol>

                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <img className="img-responsive" src={rest.thumb} alt="thumbnail images" style={{ width: '100%', height: '470px' }} />
                                        </div>

                                        <div class="item">
                                            <img className="img-responsive" src={rest.thumb} alt="thumbnail images" style={{ width: '100%', height: '470px' }} />
                                        </div>

                                        <div class="item">
                                            <img className="img-responsive" src={rest.thumb} alt="thumbnail images" style={{ width: '100%', height: '470px' }} />
                                        </div>
                                    </div>


                                    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                        <span class="glyphicon glyphicon-chevron-left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                        <span class="glyphicon glyphicon-chevron-right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                            <div className="col-md-12">
                                <h3 style={{ color: 'navy', fontWeight: 'bold' }}>{rest.name}</h3>
                                <h4 style={{ color: 'gray' }}>{rest.locality}</h4>
                                <h4 style={{ color: 'gray' }}>{rest.address}</h4>
                            </div>
                        </div>
                        <br />

                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab style={{ color: '#192f60', fontWeight: 'bold', fontSize: '15px' }}>Overview</Tab>
                                    <Tab style={{ color: '#192f60', fontWeight: 'bold', fontSize: '15px' }}>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <div>
                                        <div style={{ color: '#192f60', fontWeight: 'bold', fontSize: '22px', marginTop: '20px' }}>About this place</div>
                                        <br />

                                        <div style={{ color: '#192f60', fontSize: '20px', fontWeight: 'bold' }}>Cuisine</div>
                                        <div style={{ fontSize: '17px', color: '#192f60', fontWeight: '400', marginBottom: '15px' }}>{rest.Cuisine[0].name},{rest.Cuisine[1].name}</div>
                                        <div style={{ color: '#192f60', fontSize: '20px', fontWeight: 'bold' }}>Average Cost</div>
                                        <div style={{ fontSize: '17px', color: '#192f60', fontWeight: '400', marginBottom: '15px' }}> &#8377;{rest.cost} for two people (approx.)</div>

                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div>
                                        <div style={{ color: '#192f60', fontWeight: 'bold', fontSize: '22px', marginTop: '20px' }}>Contact</div>
                                        <br />
                                        <div style={{ color: '#192f60', fontSize: '20px', fontWeight: 'bold' }}>Phone</div>
                                        <div style={{ fontSize: '17px', color: 'hotpink', fontWeight: '400', marginBottom: '15px' }}>+91 1145004544</div>
                                        <div style={{ color: '#192f60', fontSize: '20px', fontWeight: 'bold' }}>Locality</div>
                                        <div style={{ fontSize: '17px', color: '#192f60', fontWeight: '400', marginBottom: '15px' }}>{rest.locality}</div>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <br /><br />

                        <div className="btn btn-danger btn-lg" onClick={this.onBack}>Back</div>
                        &nbsp;
                        <Link className="btn btn-success btn-lg" to={`/order/${this.props.match.params.id}`}>Place Order</Link>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let restid = this.props.match.params.id;
        axios.get(`${url}/${restid}`)
            .then((response) => { this.setState({ rest: response.data[0] }) })
    }
}

export default RestaurantDetails;