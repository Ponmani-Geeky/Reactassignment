import React from 'react'
import './Recommanded.css'
import Card from './Card'

const Recommanded=()=>{


    return(
        <div className='RecommandedLayout'>
           <p>
            Recommanded Properties
           </p>
           <div className='cards'>
           <Card/>
           <Card/>
           <Card/>
           </div>
        </div>
    )
}

export default Recommanded