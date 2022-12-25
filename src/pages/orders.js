import Image from 'next/image'
import React from 'react'
import OrderItems from '../components/OrderItems'
import Header from '../components/Header'
import { selectItems } from "../redux/basketSlice"
import { useSelector } from "react-redux"

const Orders = () => {
    
    const items = useSelector(selectItems)
    let rating = 0
    try {
        rating = Math.floor(items[0].ratings)
    }
    catch (error) {
        console.log(error)
    }


  return (
    <div className="bg-gray-100 h-screen">
    <Header />
    <main className="lg:flex max-w-screen-lg mx-auto ">

        {/* left side */}
        <div className="flex-grow  shadow-md">
            <Image
                src="https://links.papareact.com/ikj"
                width={1030}
                height={0}
                className="object-contain"
                alt=""
            />

            <div className="flex flex-col p-5 space-y-10 bg-white">
                <h1 className="text-2xl font-semibold border-b mb-6 pb-2 md:ml-8 sm:ml-4 ">
                    {items.length === 0 ? "You Haven't Ordered Anything" : "Your Orders"}
                </h1>

                {items.map((item, i) => (

                    <OrderItems key={i}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        ratings={rating}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    </main>
</div>  )
}

export default Orders