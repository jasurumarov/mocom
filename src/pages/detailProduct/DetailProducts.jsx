import React from 'react'
import SingleRouteProduct from '../../components/singleRouteProduct/SingleRouteProduct'
import { useGetDetailProductQuery } from '../../context/productsApi'
import { useParams } from 'react-router-dom'

const DetailProducts = () => {
    const { id } = useParams()
    let {data, isLoading, error} = useGetDetailProductQuery(id)
  return (
    <div className='detail-page'>
        <SingleRouteProduct data={data} loading={isLoading}/>
    </div>
  )
}

export default DetailProducts