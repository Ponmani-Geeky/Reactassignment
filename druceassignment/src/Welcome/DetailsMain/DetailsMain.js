import React from 'react'
import OfferAccepted from './OfferAccepted/OfferAccepted'
import Recommanded from './Recommanded/Recommanded'
import Propertyservices from './Propertyservices/Propertyservices'


const DetailsMain=()=>{

    return(
        <div className='detailsmain'>
         <OfferAccepted/>
         <Recommanded/>
         <Propertyservices/>
        </div>
    )
}

export default DetailsMain