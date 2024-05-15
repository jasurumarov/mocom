import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { MdOutlineWorkspacePremium } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Benefits = () => {
  return (
    <div className='benefits-section'>
        <div className="container">
            <div className="benefits-section__content">
                <div className="benefits__title">
                    <div></div>
                    <p>Why Choose US</p>
                </div>
                <div className="benefits__cards">
                    <div className="benefits__card">
                        <TbTruckDelivery />
                        <h3>Fast Delivery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>  
                    <div className="benefits__card">
                        <GiReceiveMoney />
                        <h3>Cheap Price</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>  
                    <div className="benefits__card">
                        <MdOutlineWorkspacePremium />
                        <h3>Premium Quality</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits