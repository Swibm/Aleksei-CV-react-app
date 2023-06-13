import React from 'react'
import '../styles/carrierPage.css'
import { Accordion } from '../components/Accordion'
import { CarrierAccBlockList } from "../constants";

const CarrierPage = () => {

    return (
      <>
        <div className='carrier-card'>
            <Accordion props = { CarrierAccBlockList[0] } />
        </div>

        <div className='carrier-card'>
            <Accordion props = { CarrierAccBlockList[1] }/>
        </div>

        {/* <div>
            {CarrierAccBlockList[0].obligations}
        </div> */}
      </>
    )
}

export default CarrierPage