import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
  return (
    <div className='grid grid-flow-row-dense sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:-mt-40'>


        {products.slice(0,4 ).map((product)=>(
          <Product
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          category={product.category}
          image={product.image}
          ratings={product.rating.rate}
          price={product.price}
          />
        ))}
        <img className='md:col-span-full my-4 mx-auto' src="https://links.papareact.com/dyz" alt="" />

        {products.slice(5,13).map((product)=>(
          <Product
          key={product.id}
          title={product.title}
          description={product.description}
          category={product.category}
          image={product.image}
          ratings={product.rating.rate}
          price={product.price}
          />
        ))}
                <img className='md:col-span-full my-4 mx-auto' src="https://links.papareact.com/dyz" alt="" />

        {products.slice(12,).map((product)=>(
          <Product
          key={product.id}
          title={product.title}
          description={product.description}
          category={product.category}
          image={product.image}
          ratings={product.rating.rate}
          price={product.price}
          />
        ))}
    </div>
  )
}

export default ProductFeed