import React from 'react'
import '../styles/carrierPage.css'
import { Accordion } from '../components/Accordion'
import { CarrierAccBlockList } from "../constants";

const CarrierPage = () => {

    return (
      <>  
        <div className = 'carrier-block'>
        <h4>Carrier history</h4>
            {CarrierAccBlockList.map((carrier, index) => (
              <div className='carrier-card'
              key = { index }
              >
                    <Accordion props = { carrier } />
                </div>
                ) 
                )
              }
        </div>
      </>
    )
}

export default CarrierPage