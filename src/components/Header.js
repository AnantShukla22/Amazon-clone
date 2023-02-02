import Image from "next/image"
import Logo from "../../public/images/logo.png"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "../../node_modules/@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectItems } from "../redux/basketSlice"



const Header = () => {

    const { data: session } = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)

    return (
        <header>
            {/* top nav */}
            <div className="flex items-center bg-amazon_blue p-1.5 ">

                <div className="flex items-center flex-grow sm:flex-grow-0 ">
                    <Image
                        onClick={() => router.push("/")}
                        src={Logo}
                        width={100}
                        className="cursor-pointer max-w-md"
                    />
                </div>

                {/* search box */}
                <div className=" hidden sm:flex h-8 items-center mx-3 flex-grow">
                    <input type="text" className="h-full p-2 flex-grow flex-shrink focus:outline-none rounded-l-sm " />
                    <SearchIcon className="h-8 p-1.5 rounded-r-sm  bg-yellow-400 hover:bg-yellow-500 cursor-pointer" />
                </div>

                {/* utility div */}
                <div className="text-white flex items-center space-x-6 text-xs mx-6 whitespace-nowrap over">
                    <div onClick={!session ? signIn : signOut} className="link overflow-x-hidden w-28" >
                        <p >{session ? `Welcome, ${session.user.name}` : "Sign In"}</p>
                        <p className="font-extrabold md:text-sm ">Account & Lists</p>

                    </div>
                    <div onClick={() => router.push("orders")}
                        className=" link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div onClick={() => router.push("cart")}
                        className="relative flex items-center link">
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-8" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-1.5">Basket</p>
                    </div>
                </div>
            </div>

            {/* bottom nav */}
            <div className="flex items-center bg-amazon_blue-light p-2 pl-4 text-white space-x-4 text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-5 mr-2" />
                    All
                </p>
                <p className="link">Prime Videos</p>
                <p className="link">Amazon Buisness</p>
                <p className="link">Today's Deals</p>
                <p className="link ">Electronics</p>
                <p className="link hidden lg:inline-flex">Food & Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Health & Personal Care</p>
            </div>
        </header>

    )
}

export default Header