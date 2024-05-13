import React from 'react'
import './OfferAccepted.css'
import offerimg from '../../../assests/offerimg.jpg'
import bath from '../../../assests/bath.svg'
import bedcount from '../../../assests/bedcount.svg'
import sizeimg from '../../../assests/size.svg'
import location from '../../../assests/location.svg'
const OfferAccepted=()=>{


    return(
        <div className='OfferLayout'>
         <div className='offertxt'>Offer Accepted!</div>
         <div className='offerdes'>Congratulations! Your rental offer has been accepted by the landlord. Get ready to move into your new home! For further details and next steps, click on <strong>“Complete Reservation”</strong></div>
         <div className='offerdetails'>
            <div className='offeredspace'>
             <img src={offerimg} height='60px'/>
             <div>
                <p className='offertitle'>21 Baker Street, NW1</p>
                <div className='offerloc'>
                 <img src={location} className='imgoffer'/>
                 <p className='address'>71 Cherry Court Southampton So53 5pd Uk</p>
                </div>

                <div className='offerdetail'>
                    <div className='offeramenites'>
                    <img src={bedcount} className='imgoffer'/>
                 <p>3</p>
                    </div>
                    <div className='offeramenites'>
                    <img src={bath} className='imgoffer'/>
                 <p>2</p>
                    </div>
                    <div className='offeramenites'>
                    <img src={sizeimg} className='imgoffer'/>
                 <p>3333Sqft</p>
                    </div>
                </div>
                
             </div>
            </div>
            <div>
                <button className='proceedbtn'>Proceed</button>
            </div>
         </div>
        </div>
    )
}

export default OfferAccepted