//importing required files

import React from 'react'
import Chardata from './Chardata'
import Spinner from './Spinner'
const Charactergrid = ({items,isLoading}) => {
    return isLoading ? (<Spinner />):
    (<section className='cards'>
    {
        items.map(item =>(
            <Chardata key={item.Char_id} item={item}></Chardata>
        ))
    }
    </section>) 
}

export default Charactergrid
