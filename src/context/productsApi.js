import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getProducts: build.query({
      query: (params) => ({ 
        url: '/products', 
        params 
      }),
      providesTags:["Product"]
    }),
    getDetailProduct: build.query({
      query: (id)=>({
        url: `/product/${id}`
      })
    })
  }),
})

export const {
  useGetProductsQuery,
  useGetDetailProductQuery
} = productApi