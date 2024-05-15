import React from 'react'

// IMAGES
import AboutUsImg from '../../images/about-us.png'
import PremiumImg from '../../images/premium-img.png'

const AboutUs = () => {
    return (
        <section className='about-section'>
            <div className="container">
                <div className="about-section__content">
                    <div className='about__shape'></div>
                    <p className="about__name">about</p>
                    <h2>If you’re looking for a Premium Quality Tempered Glass or Back-cover for <br /> your Device</h2>
                    <p className="about__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    <img src={AboutUsImg} alt="about us img" />
                </div>
                <div className="about-section__premium">
                    <div className="about__premium-bg"></div>
                    <div className="about__premium-card">
                        <div>
                            <h2>Shop Premium Tempered Glass in wholesale <br /> Price !</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p>LKR : 299</p>
                            <button>Shop Tempered Glass </button>
                        </div>
                        <img src={PremiumImg} alt="card img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs