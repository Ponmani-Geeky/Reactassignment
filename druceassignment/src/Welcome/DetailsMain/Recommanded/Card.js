import React from 'react'
import './Card.css'
import bath from '../../../assests/bath.svg'
import bedcount from '../../../assests/bedcount.svg'
import sizeimg from '../../../assests/size.svg'
const Card=({typeimg,locationicon,type,title,address,bedroomcount,bathcount,size,rent})=>{


    return(
        <div className='recommandedcard'>
          <img src={typeimg} width='100%'/>
          <div className='typeofspace'>
            <p >{type}</p>
            </div>
          <div className='title'>{title}</div>

          <div className='locationrecommanded'>
          <img src={locationicon} className='locimg'/>
          <p className='address'>{address}</p>
          </div>

          <div className='amenitiesrecomanded'>
            <div className='amenitiesdetails'>
            <img src={bedcount} className='amenitieimg'/>
            <p>{bedroomcount}</p>
            </div>
            <div className='amenitiesdetails'>
            <img src={bath} className='amenitieimg'/>
            <p>{bathcount}</p>
            </div>
            <div className='amenitiesdetails'>
            <img src={sizeimg} className='amenitieimg'/>
            <p>{size}</p>
            </div>
          </div>

          <div className='rent'>
            {rent}
          </div>
          
        </div>
    )
}

export default Card