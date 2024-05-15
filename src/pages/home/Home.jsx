import React from 'react'
import { useGetProductsQuery } from '../../context/productsApi'

// Components
import Hero from '../../components/hero/Hero'
import Products from '../../components/products/Products'
import AboutUs from '../../components/about-us/AboutUs'
import Benefits from '../../components/benefits/Benefits'

const Home = () => {
  let { data, isLoading, isError } = useGetProductsQuery()
  return (
    <div className='home-page'>
        <Hero/>
        <Products data={ data?.products }/>
        <AboutUs/>
        <Benefits/>
    </div>
  )
}

export default Home