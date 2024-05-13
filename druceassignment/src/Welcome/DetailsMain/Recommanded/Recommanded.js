import React from 'react'
import './Recommanded.css'
import Card from './Card'
import apartment from '../../../assests/apartment.jpg'
import flat from '../../../assests/flat.jpg'
import villa from '../../../assests/villa.jpg'
import location from '../../../assests/location.svg'


const Recommanded=()=>{


    return(
        <div className='RecommandedLayout'>
           <p className='recommandtxt'>
            Recommanded Properties
           </p>
           <div className='cards'>
           <Card typeimg={apartment} locationicon={location} type='Apartment' title='221 Baker Street' address='71 Cherry Court Southampton, So53 5Pd Uk '
            bedroomcount='3' bathcount='2' size='3333sqft' rent='E850/month'/>
           <Card typeimg={flat} locationicon={location} type='Flat' title='The Ritz- Carlton Residences' address='71 Cherry Court Southampton, So53 5Pd Uk '
            bedroomcount='3' bathcount='2' size='3333sqft' rent='E850/month'/>
           <Card typeimg={villa} locationicon={location} type='Villa' title='221 Baker Street' address='71 Cherry Court Southampton, So53 5Pd Uk '
            bedroomcount='3' bathcount='2' size='3333sqft' rent='E850/month'/>
           </div>
        </div>
    )
}

export default Recommanded