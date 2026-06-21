import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-16">

      {/* Main Footer */}
      <div className="max-w-[1240px] mx-auto flex justify-between">

        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold mb-12">
            Furniro.
          </h1>

          <p className="text-gray-400 leading-8">
            400 University Drive Suite 200 Coral
            <br />
            Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-gray-400 mb-12">
            Links
          </h3>

          <div className="flex flex-col gap-8">
            <button className="text-left">Home</button>
            <button className="text-left">Shop</button>
            <button className="text-left">About</button>
            <button className="text-left">Contact</button>
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-gray-400 mb-12">
            Help
          </h3>

          <div className="flex flex-col gap-8">
            <button className="text-left">
              Payment Options
            </button>

            <button className="text-left">
              Returns
            </button>

            <button className="text-left">
              Privacy Policies
            </button>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-400 mb-12">
            Newsletter
          </h3>

          <form className="flex gap-4">

            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
              className="border-b border-black outline-none pb-1"
            />

            <button
              type="submit"
              className="border-b border-black font-medium"
            >
              SUBSCRIBE
            </button>

          </form>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="max-w-[1240px] mx-auto mt-16 border-t border-gray-300 pt-8">

        <p>
          2023 furniro. All rights reserved
        </p>

      </div>

    </footer>
  )
}

export default Footer