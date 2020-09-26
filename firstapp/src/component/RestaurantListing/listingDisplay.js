import React from 'react';
import {Link} from 'react-router-dom';
import './listingDisplay.css';

const ListingDisplay=(props)=>{
    const renderRest=({restdata})=>{
        if(restdata){
            if(restdata.length>0){
            return restdata.map((item)=>{
                return(
                    <div className="foodDetails container-fluid col-xs-11 col-sm-6 col-md-6 " style={{marginLeft:'30px', marginTop:'60px',boxShadow:'0 2px 4px black'}} id={item.id}  >
                        
                        
                        <div className="imageOne" >
                                
                            <img className="img-responsive" src={item.thumb} alt="thumbnail images" style={{width:'90px',height:'90px',borderRadius:'15px',marginTop:'5px'}} />
                               
                            </div>
                        <div className="description1">
                        
                            <Link className="restaurant1Title" style={{ textDecoration: 'none' }}  to={`/rest/${item._id}`}>{item.name}</Link>
                                    <div className="city_name">{item.city_name}</div>
                            <div className="resAdd" style={{color:'navy'}}>{item.locality}</div>
                                    <div className="resAdd">{item.address}</div>
                               
                            
                        
                        <hr/>

                        <div className="boxOne">
                            Cuisine Type <br/><br/>
                            Cost For Two
                        </div>

                        <div className="boxTwo">
                            {item.Cuisine[0].name},{item.Cuisine[1].name}<br/><br/>
                            &#8377;  {item.cost}</div>
                                    </div>
                                    
                            
                    </div>
                )
            })
        }else{
            return(
                <div  >
                    <center>
                        <h2>NO RESTAURANTS FOUND AS PER THE FILTER</h2>
                        <img src="/images/notfound.gif " className="img-responsive" alt="not found"/>
                    </center>
                </div>
            )
        }
        } else {
            return(
                <div>
                    <img src="/images/loader.gif" className="img-responsive" alt="loading icon"/>
                </div>
            )
        }
    }

    return(
        <React.Fragment >
            <div >
                
                        {renderRest(props)}
                    </div>
                
            
        </React.Fragment>
    )
}
export default ListingDisplay;