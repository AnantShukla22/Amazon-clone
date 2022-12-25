import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-20  bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="object-fill"
      >
         <div>
          <Image loading="lazy" src="https://links.papareact.com/7ma" alt="" width={10000} height={1000} />
        </div>
        <div>
          <Image loading="lazy" src="https://links.papareact.com/gi1" alt=""  width={10000} height={100}/>
        </div>
        <div>
          <Image loading="lazy" src="https://links.papareact.com/6ff" alt="" width={10000} height={1000}/>
        </div>
       
      </Carousel>
    </div>
  )
}

export default Banner