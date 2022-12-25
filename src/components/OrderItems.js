import Image from "next/image"
import { useRouter } from "next/router"
import { AiFillStar } from "react-icons/ai"

const CheckOutProduct = ({ id, title, category, description, image, ratings, price }) => {

const router=useRouter()
    return (
        <div className="grid grid-cols-5 sm:m-4 md:m-6 lg:m-8 ">
            {/* left span 1 */}
            <div className="self-center">
                <Image
                    src={image} width={150} height={150} className="object-contain self-center"
                />
            </div>
            {/* middle span 3 */}
            <div className="col-span-3 mx-5 my-auto">
                <p className="my-1 font-semibold">{title}</p>
                <div className="flex">
                    {Array.apply(null, { length: ratings }).map((e, i) => (
                        <AiFillStar className="h-5 text-yellow-400" />
                    ))}
                </div>
                <p className="md:text-sm text-xs my-2 line-clamp-3 ">{description}</p>
                <p className="mb-5 font-semibold">Rs {price}</p>
            </div>
            <div className="flex flex-col space-y-2 my-auto justify-self-end  mx-auto">
                <button onClick={()=>router.push("/")} className="button">View Similar Products</button>
                <button onClick={()=>router.push("/")} className="button">Shop More</button>
            </div>
        </div>
    )
}

export default CheckOutProduct