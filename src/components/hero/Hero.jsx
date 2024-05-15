import React from 'react'

// IMAGES
import HeroImg from '../../images/hero-img.png'

const Hero = () => {
  return (
    <section className='hero-section'>
        <div className="container">
            <div className="hero-section__content">
              <div className="hero__title">
                <h1>
                  <span>Mobile</span>
                  Backcover
                  Tempered Glass
                </h1>
                <button>Shop all !</button>
              </div>
              <img src={HeroImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero