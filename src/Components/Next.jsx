import React from 'react'
import c2 from "../assets/c2.png";

const Next = () => {
  return (
   <section className="w-full border-t border-gray-300 py-12">

      {/* Top Buttons */}
      <div className="flex justify-center gap-16 mb-10">

        <button className="text-2xl font-medium">
          Description
        </button>

        <button className="text-2xl text-gray-400">
          Additional Information
        </button>

        <button className="text-2xl text-gray-400">
          Reviews [5]
        </button>

      </div>

      {/* Description Text */}
      <div className="max-w-4xl mx-auto text-gray-400 space-y-8">

        <p>
          Embodying the raw, wayward spirit of rock 'n' roll, the
          Kilburn portable active stereo speaker takes the
          unmistakable look and sound of Marshall, unplugs the
          chords, and takes the show on the road.
        </p>

        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight
          piece of vintage styled engineering. Setting the bar as
          one of the loudest speakers in its class, the Kilburn is
          a compact, stout-hearted hero with a well-balanced audio.
        </p>

      </div>

      {/* Image Section */}
      <div className="flex justify-center gap-8 mt-12">

        <div className="w-[605px] h-[348px] bg-[#F9F1E7] rounded-lg flex items-center justify-center">
  <img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
 />       </div>

        <div className="w-[605px] h-[348px] bg-[#F9F1E7] rounded-lg flex items-center justify-center">
  <img
  src={c2}
  alt=""
  className="w-full h-full object-cover"
 />        </div>

      </div>

    </section>
  )
}

export default Next