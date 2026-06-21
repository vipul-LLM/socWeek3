import React from 'react'
import c2 from "../assets/c2.png";

const Products = () => {
  return (
    <section className="py-20">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-14">
        Related Products
      </h1>

      {/* Product Cards */}
      <div className="flex justify-center gap-8">

        {/* Card 1 */}
        <div className="w-[285px]">
          <div className="h-[301px] bg-gray-100">
<img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
 />         </div>

          <div className="bg-[#F4F5F7] p-4">
            <h2 className="text-2xl font-semibold">
              Syltherine
            </h2>

            <p className="text-gray-500">
              Stylish cafe chair
            </p>

            <div className="flex gap-3 mt-2">
              <span className="font-bold">
                Rp 2.500.000
              </span>

              <span className="text-gray-400 line-through">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[285px]">
          <div className="h-[301px] bg-gray-100">
  <img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
 />          </div>

          <div className="bg-[#F4F5F7] p-4">
            <h2 className="text-2xl font-semibold">
              Leviosa
            </h2>

            <p className="text-gray-500">
              Stylish cafe chair
            </p>

            <div className="mt-2">
              <span className="font-bold">
                Rp 2.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[285px]">
          <div className="h-[301px] bg-gray-100">
  <img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
 />          </div>

          <div className="bg-[#F4F5F7] p-4">
            <h2 className="text-2xl font-semibold">
              Lolito
            </h2>

            <p className="text-gray-500">
              Luxury big sofa
            </p>

            <div className="flex gap-3 mt-2">
              <span className="font-bold">
                Rp 7.000.000
              </span>

              <span className="text-gray-400 line-through">
                Rp 14.000.000
              </span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-[285px]">
          <div className="h-[301px] bg-gray-100">
  <img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
 />     </div>

          <div className="bg-[#F4F5F7] p-4">
            <h2 className="text-2xl font-semibold">
              Respira
            </h2>

            <p className="text-gray-500">
              Outdoor bar table and stool
            </p>

            <div className="mt-2">
              <span className="font-bold">
                Rp 500.000
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="border border-[#B88E2F] text-[#B88E2F] px-12 py-3 font-medium hover:scale-110 transition-transforme ease-in duration-200">
          Show More
        </button>
      </div>

    </section>
  )
}

export default Products