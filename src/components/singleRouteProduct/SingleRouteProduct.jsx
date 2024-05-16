import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

// ICONS
import { FaChevronDown, FaChevronUp, FaRegHeart, FaStar } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { IoStar } from 'react-icons/io5'
import { RiShoppingCart2Line, RiShuffleFill } from 'react-icons/ri'

const SingleRouteProduct = () => {
    const [count, setCount] = useState(1)

    const { id } = useParams()
    // const { data: el, loading } = useFetch(`products/${id}`, id)
    // console.log(el);

    // let product = (
    //     <div key={el?.data?.id} className="single-product__content">
    //         <div className="product__left">
    //             <div className="product__left-img">
    //                 <img src={el?.data?.image} alt="product img" />
    //                 <FiSearch />
    //             </div>
    //             <div className="product__left-secondaryImgs">
    //                 <div>
    //                     <img src={el?.data?.image} alt="product img" />
    //                 </div>
    //                 <div>
    //                     <img src={el?.data?.image} alt="product img" />
    //                 </div>
    //                 <div>
    //                     <img src={el?.data?.image} alt="product img" />
    //                 </div>
    //                 <div>
    //                     <img src={el?.data?.image} alt="product img" />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="product__right">
    //             <div className="product__right-sale">Sale Off</div>
    //             <h3>{el?.data?.title}</h3>
    //             <div className="product__right-rating">
    //                 <span>
    //                     {el ? new Array(Math.round(el?.data?.rating?.rate)).fill(<IoStar className='rate' />) : <></>} {el ? new Array(Math.round(5 - el?.data?.rating?.rate)).fill(<IoStar className='unrate' />) : <></>}
    //                 </span>
    //                 <p>({el?.data?.rating.rate})</p>
    //             </div>
    //             <div className="product__right-price">
    //                 <h4>${el?.data?.price}</h4>
    //                 <article>
    //                     <p>{Math.round((el?.data?.price * 1.5) - el?.data?.price)}% Off</p>
    //                     <h5><del>${Math.round(el?.data?.price * 1.5)}</del></h5>
    //                 </article>
    //             </div>
    //             <p className="product__right-desc">{el?.data?.description}</p>
    //             <div className="product__right-sizes">
    //                 <span>Size / Weight:</span>
    //                 <div>
    //                     <button>50g</button>
    //                     <button>60g</button>
    //                     <button>80g</button>
    //                     <button>100g</button>
    //                     <button>150g</button>
    //                 </div>
    //             </div>
    //             <div className="product__right-btns">
    //                 <div className="product__right-btns--number">
    //                     <p>{count}</p>
    //                     <article>
    //                         <button disabled={count >= 10 ? true : false} onClick={() => setCount(count + 1)}>
    //                             <FaChevronUp />
    //                         </button>
    //                         <button disabled={count <= 0 ? true : false} onClick={() => setCount(count - 1)}>
    //                             <FaChevronDown />
    //                         </button>
    //                     </article>
    //                 </div>
    //                 <button className="product__right-btns--cart">
    //                     <RiShoppingCart2Line />
    //                     <p>Add to cart</p>
    //                 </button>
    //                 <div className="product__right-btns--heartGroup">
    //                     <button className='product__right-btns--heart'>
    //                         <FaRegHeart />
    //                     </button>
    //                     <button className='product__right-btns--heart'>
    //                         <RiShuffleFill />
    //                     </button>
    //                 </div>
    //             </div>
    //             <div className="product__right-compositions">
    //                 <ul>
    //                     <li>Type: <span>{el?.data?.category[0].toUpperCase() + el?.data?.category.slice(1)}</span></li>
    //                     <li>MFG: <span>Jun 4.2022</span></li>
    //                     <li>LIFE: <span>70 days</span></li>
    //                 </ul>
    //                 <ul>
    //                     <li>SKU: <span>FWM15VKT</span></li>
    //                     <li>Tags: <span>Snack, Organic, Brown</span></li>
    //                     <li>Stock: <span>{el?.data?.stock} Items In Stock</span></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // )

    let skeleton = (
        <div className="skeleton">
            <div className="product__left">
                <div className="product__left-img"></div>
                <div className="product__left-secondaryImgs">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="product__right">
                <div className="product__right-sale"></div>
                <h3></h3>
                <div className="product__right-rating"></div>
                <div className="product__right-price"></div>
                <p className="product__right-desc"></p>
                <div className="product__right-sizes"></div>
                <div className="product__right-btns"></div>
                <div className="product__right-compositions">
                    <ul></ul>
                    <ul></ul>
                </div>
            </div>
        </div>
    )

    return (
        <div className='single-product'>
            <div className="container">
                <div className="wrapper">
                    {/* {loading ? skeleton : <>{product}</>} */}
                </div>
            </div>
        </div>
    )
}

export default SingleRouteProduct