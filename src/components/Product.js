import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { addToBasket } from "../redux/basketSlice"

const Product = ({ id, title, description, category, image, ratings, price }) => {

  let rating = Math.floor(ratings)
  const dispatch = useDispatch()
  const addItemToBasket = () => {
    const product = {
      id, title, description, category, image, ratings, price
    }
    dispatch(addToBasket(product))
  }

  return (
    <div className="relative flex flex-col bg-white m-5 p-10 z-30 object-fill justify-evenly">
      <p className="absolute top-2 right-2 text-sm text-gray-400 underline italic font-semibold">{category}</p>
      <Image src={image} width={1000} height={1000} className="self-center h-40 w-36 object-contain mt-5" />
      <h4 className="my-3 font-bold">{title}</h4>
      <div className="flex">
        {Array.apply(null, { length: rating }).map((e, i) => (
          <AiFillStar className="h-5 text-yellow-400" />
        ))}
      </div>
      <p className="text-xs my-2 line-clamp-3 ">{description}</p>

      <p className="mb-5 font-semibold">Rs {price}</p>
      <button onClick={addItemToBasket} className="mt-2 button">Add To Cart</button>
    </div>
  )
}

export default Product