import React from 'react';

import Search from './search';
import QuickSearch from './quicksearchApi';

const Home = (props) => {

  
    const handleHotel = (data) => {
        props.history.push(`/rest/${data}`)
    }

    return (
        <div>

            <Search rid={(data) => { handleHotel(data)}} />
            <QuickSearch />
        </div>
    )
}

export default Home;