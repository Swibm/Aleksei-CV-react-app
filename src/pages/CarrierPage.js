import React from 'react'
import '../styles/carrierPage.css'
import { Accordion } from '../components/Accordion'
import { CarrierAccBlockList } from "../constants";

const CarrierPage = () => {

    return (
      <>
          {CarrierAccBlockList.map((carrier, index) => (
              <div className='carrier-card'
                   key = {index}
              >
                  <Accordion props = { carrier } />
              </div>
              ) 
            )
          }
      </>
    )
}

export default CarrierPage