import {
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";
import { useState } from "react";

function Navbar() {
    const [cart, setcart] = useState(false);
    function handleclick (){
      setcart(true);
      
       

    };
    function handleclose (){
      setcart(false);
    }
  return (
    <nav className="h-25 flex items-center justify-between px-20 border-b border-gray-200">

      {/* Logo */}
      <div className="flex items-center gap-2">
      
        <h1 className="text-3xl font-bold">Furniro</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-12">
        <button className="font-medium hover:text-yellow-600">
          Home
        </button>

        <button className="font-medium hover:text-yellow-600">
          Shop
        </button>

        <button className="font-medium hover:text-yellow-600">
          About
        </button>

        <button className="font-medium hover:text-yellow-600">
          Contact
        </button>
      </div>

      {/* Icons */}
      <div className="flex gap-6">
        <button>
          <User size={22} />
        </button>

        <button>
          <Search size={22} />
        </button>

        <button>
          <Heart size={22} />
        </button>

        <button className="cart" onClick={handleclick}>
          <ShoppingCart size={22} />
        </button>
      </div>
          <div id="Cart" className={`fixed top-0 right-0 w-[417px] h-screen bg-white shadow-xl p-8 z-50 ${cart ? "block" : "hidden"}`}>

     
      <div className=" flex justify-between items-center border-b pb-6">
        <h1 className="text-3xl font-semibold">
          Shopping Cart
        </h1>

        <button onClick={handleclose}>
          ✕
        </button>
      </div>

      {/* Product 1 */}
      <div className="flex items-center gap-5 mt-8">

        <div className="w-20 h-20 bg-[#F9F1E7] rounded-lg">
          
              
        </div>

        <div>
          <h3 className="text-lg">
            Asgaard sofa
          </h3>

          <p className="mt-2 text-sm">
            1 ×
            <span className="ml-2 text-[#B88E2F]">
              Rs. 250,000.00
            </span>
          </p>
        </div>

      </div>

      {/* Product 2 */}
      <div className="flex items-center gap-5 mt-8">

        <div className="w-20 h-20 bg-[#F9F1E7] rounded-lg">
         
        </div>

        <div>
          <h3 className="text-lg">
            Casaliving Wood
          </h3>

          <p className="mt-2 text-sm">
            1 ×
            <span className="ml-2 text-[#B88E2F]">
              Rs. 270,000.00
            </span>
          </p>
        </div>

      </div>

      {/* Subtotal */}
      <div className="absolute bottom-28 left-8 right-8">

        <div className="flex justify-between border-t pt-6">

          <span>
            Subtotal
          </span>

          <span className="font-semibold text-[#B88E2F]">
            Rs. 520,000.00
          </span>

        </div>

      </div>

      {/* Footer Buttons */}
      <div className="absolute bottom-8 left-8 right-8 flex justify-between">

        <button className=" cart border rounded-full px-5 py-2">
          Cart
        </button>

        <button className="border rounded-full px-5 py-2">
          Checkout
        </button>

        <button className="border rounded-full px-5 py-2">
          Comparison
        </button>

      </div>

    </div>

    </nav>
  );
}

export default Navbar;