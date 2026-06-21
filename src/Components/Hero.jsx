import React from 'react'
import { useState } from 'react'
import c2 from "../assets/c2.png";


const Hero = () => {
  const [count, setcount] = useState(1);
  function increment (){
    setcount(count +1);
  }
 function decrement (){
  if(count === 0) return count
    setcount(count -1);
  }
  return (
  <section className="h-[820px] flex justify-center items-center">

      <div className="w-[1440px] flex justify-center gap-16 pt-10">

        {/* Left Side Images */}
        <div className="flex gap-8">

          {/* Thumbnails */}
          <div className="flex flex-col gap-8">

            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg">
<img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
/>            </div>

            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg">
<img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
/>            </div>

            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg">
<img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
/>            </div>

            <div className="w-[76px] h-[80px] bg-[#F9F1E7] rounded-lg">
<img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
/>            </div>

          </div>

          {/* Main Image */}
          <div className="w-[423px] h-[500px] bg-[#F9F1E7] rounded-lg flex justify-center items-center">
<img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
/>          </div>

        </div>

        {/* Right Side Content */}
        <div className="w-[606px]">

          <h1 className="text-5xl font-medium">
            Asgaard sofa
          </h1>

          <p className="text-2xl text-gray-500 mt-3">
            Rs. 250,000.00
          </p>

          <div className="mt-5">
            ⭐⭐⭐⭐⭐
          </div>

          <p className="mt-5 text-gray-600 leading-7">
            Setting the bar as one of the loudest speakers
            in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio.
          </p>

          <div className="mt-8">
            <p className="text-gray-500 mb-3">
              Size
            </p>

            <div className="flex gap-4">
              <button className="w-8 h-8 bg-[#F9F1E7] hover:bg-yellow-600 hover:scale-105  rounded  hover:text-white hover:scale-105
transition-transform
duration-200
ease-in">
                L
              </button>

              <button className="w-8 h-8 bg-[#F9F1E7] hover:bg-yellow-600 hover:scale-105 rounded  hover:text-white hover:scale-105
transition-transform
duration-200
ease-in">
                XL
              </button>

              <button className="w-8 h-8 bg-[#F9F1E7] hover:bg-yellow-600  rounded hover:scale-105  hover:text-white hover:scale-105
transition-transform
duration-200
ease-in">
                XS
              </button>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-500 mb-3">
              Color
            </p>

            <div className="flex gap-4">
              <div className=" w-8 h-8 rounded-full bg-purple-500 "></div>
              <div className="w-8 h-8 rounded-full bg-black"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-700"></div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">

          <div className="flex items-center justify-center gap-1 mt-0.5">
             <button className="border text-2xl px-6 py-4 rounded-xl " onClick={increment}>
              +
            </button>
            <p className="text-3xl">{count}</p>
             <button className="border text-2xl px-6 py-4 rounded-xl " onClick={decrement}>
              -
            </button>
          </div>


            <button className="border px-10 py-4 rounded-xl hover:bg-black  hover:text-white hover:scale-105
transition-transform
duration-200
ease-in">
              Add To Cart
            </button>

            <button className="border px-10 py-4 rounded-xl  hover:bg-black  hover:text-white hover:scale-105
transition-transform
duration-200
ease-in">
              + Compare
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero