import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/products/Products'
import Empty from '../../components/empty/Empty'

const Wishlist = () => {
    let wishlist = useSelector(state => state.heart.value)
  return (
    <div style={{marginBottom: "-40px", marginTop: "60px"}} className='wishlsit-page'>
        {wishlist.length 
          ?
        <Products data={wishlist}/>
          :
        <Empty/>
        }
    </div>
  )
}

export default Wishlist