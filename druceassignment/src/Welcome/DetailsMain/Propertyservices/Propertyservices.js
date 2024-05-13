import React from 'react'
import './Propertyservices.css'
import Card from './Card'
import prop1 from '../../../assests/prop1.jpg'
import prop2 from '../../../assests/prop2.jpg'
import prop3 from '../../../assests/prop3.jpg'
const Propertyservices=()=>{


    return(
        <div className='PropertyLayout'>
          <p className='propertytxt'>
            Property services
           </p>
           <div className='cards'>
           <Card btntext={'Book a Market Appraisal'} propimg={prop1} proptitle={'Sell Your Property'} description={'Your Property, Our Expertise – Sell with Confidence'}/>
           <Card btntext={'Book a Market Appraisal'} propimg={prop2} proptitle={'Let your Property'} description={'Discover Renting Made Simple – Let Your Property.'}/>
           <Card btntext={'Get Started'} propimg={prop3} proptitle={'Rent a Property'} description={'Unlock Your Perfect Space: Rent a Property, Live Your Dream.'}/>
           </div>
        </div>
    )
}

export default Propertyservices