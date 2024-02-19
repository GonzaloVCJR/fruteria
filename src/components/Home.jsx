import React from 'react';
import Fetching from './Fetching';

const style = {
    minHeight: '77%',
}


const Home = ()=>{

    return(
        <div style={style}>
            <Fetching></Fetching>
        </div>
    )
}

export default Home;