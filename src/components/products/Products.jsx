import React from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleHeart } from '../../context/heartSlice'
import { Link } from 'react-router-dom'

const Products = ({data}) => {
    let wishlist = useSelector(state => state.heart.value)
    const dispatch = useDispatch()

    let product = data?.map(el => (
        <div key={el.id} className="products__card">
            <div className="products__card-img">
                <Link to={`/product/${el.id}`}>
                    <img src={el.images[0]} alt="" />
                </Link>
                <button onClick={() => dispatch(toggleHeart(el))}>
                    {
                        wishlist?.some(item => item.id === el.id) ? 
                        <FaHeart style={{color:"red"}}/> 
                        :
                        <FaRegHeart/>
                    }
                </button>
            </div>
            <h3>{el.title}</h3>
            <p>${el.price}</p>
        </div>
    ))
  return (
    <div className='products-section'>
        <div className="container">
            <div className="products-section__content">
                {product}
            </div>
        </div>
    </div>
  )
}

export default Products