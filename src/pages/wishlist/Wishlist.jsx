import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'

const Wishlist = () => {
    let wishlist = useSelector(state => state.heart.value)
  return (
    <div style={{marginBottom: "-40px", marginTop: "60px"}} className='wishlsit-page'>
        <Products data={wishlist}/>
    </div>
  )
}

export default Wishlist