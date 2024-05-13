import React from 'react'
import './Propertyservices.css'
import Card from './Card'
const Propertyservices=()=>{


    return(
        <div className='PropertyLayout'>
          <p>
            Property services
           </p>
           <div className='cards'>
           <Card/>
           <Card/>
           <Card/>
           </div>
        </div>
    )
}

export default Propertyservices