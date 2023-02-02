import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import CheckOutProduct from "../components/CheckOutProduct"
import Header from "../components/Header"
import { selectItems, selectTotal } from "../redux/basketSlice"


const Cart = () => {

    const router = useRouter()
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const session = useSession()
    console.log(session)

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
                            {items.length === 0 ? "Your Shopping Basket is Empty" : "Your Shopping Basket"}
                        </h1>

                        {items.map((item, i) => (

                            <CheckOutProduct key={i}
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
                    {/* total section */}
                    {items.length > 0 && (
                        <div className="mt-3 flex justify-center  bg-white">

                            <div className="flex flex-col p-5">
                                <div className="flex">
                                    <h2 className="text-lg font-semibold self-center ">Subtotal ({items.length} items):</h2>
                                    <span className="ml-4 text-lg font-bold underline text-amber-800">
                                        Rs-{total}
                                    </span>
                                </div>

                                {session &&
                                    <button
                                        onClick={() => router.push("/")}
                                         className="button text-sm animate-bounce mt-4 px-9">Sign in to Checkout</button>

                                }

                                {!session &&
                                    <button
                                        onClick={() => router.push("success")}
                                             className="button text-sm animate-bounce mt-4 px-9">Proceed to Checkout
                                    </button>
                                }

                            </div>

                        </div>)}
                </div>


            </main>
        </div>
    )
}

export default Cart