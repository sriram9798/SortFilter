import React,{Component} from 'react';
import axios from 'axios';
import './costfilter.css'
const url ="http://localhost:8900/restaurantlist";

// cost filter
class CostFilter extends Component{
    CostLogic=(event)=>{
        let mealtype=sessionStorage.getItem('type');
        let cost=(event.target.value).split(',');
        let lcost=cost[0];
        let hcost=cost[1];
        let curl;

        if(event.target.value===" " || event.target.value===""){
            curl=`${url}/${mealtype}`
        }else{
            curl=`${url}/${mealtype}?lcost=${lcost}&hcost=${hcost}`
        }
        console.log(curl)
        // api call
        axios.get(curl)
        .then((response)=>{this.props.datapercost(response.data)})
    }

    render(){
        return(
            <div className="container">
                <div  className="costHeading" style={{marginLeft:'27px'}}>Cost Filter</div>
                <div id="costOptions" onChange={this.CostLogic}>
                    <input type="radio" value="" name="cuisine" style={{ marginLeft: '27px', marginTop: '15px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>All</label>

                    <br />

                    <input type="radio" value="100,200" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>&#8377;100 - &#8377;200</label>
                    <br />
                    <input type="radio" value="201,300" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>&#8377;201 - &#8377;300</label>
                    <br />

                    <input type="radio" value="301,400" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>&#8377;301 - &#8377;400</label>

                    <br />

                    <input type="radio" value="401,500" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>&#8377;401 - &#8377;500</label>

                    <br />

                    <input type="radio" value="501,1000" name="cuisine" style={{ marginLeft: '27px', marginRight: '11px' }} />
                    <label style={{ fontWeight: 'lighter', fontSize: '14px', lineHeight: '21px' }}>&#8377;501 - &#8377;1000</label>
                </div>
            </div>
        )
    }
}
export default CostFilter;