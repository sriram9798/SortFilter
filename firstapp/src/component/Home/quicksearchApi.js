import React,{Component} from 'react';
import QuickSearchDisplay from './quicksearchDisplay';

const Murl="http://localhost:8900/mealtype";

// for api call use class component
class QuickSearch extends Component{
    constructor(){
        super()

        // defining state
        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <QuickSearchDisplay mealData={this.state.mealType}/>
        )
    }

    componentDidMount(){
        fetch(Murl,{method: 'GET'})
        .then((res)=> res.json())
        .then((data)=>{
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;