import React from 'react'
import './Card.css'
import learnmore from '../../../assests/learnicon.svg'
const Card=({propimg,proptitle,description,btntext})=>{


    return(
        <div className='propertycard'>
         <img src={propimg} width='255px'/>
         <div className='propdetails'>
         <div className='proptitle'>
            <p className='proptitletxt'>{proptitle}</p>
            <div className='learn'>
                <div>
                <img src={learnmore} className='learnicon'/>
                </div>
                <p className='learnmoretxt'>Learn More</p>
            </div>
         </div>
         <div className='description'>
            {description}
         </div>
         <button className='btn'>{btntext}</button>
         </div>
        </div>
    )
}

export default Card