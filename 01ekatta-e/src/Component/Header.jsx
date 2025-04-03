import React from "react";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-3  bg-black text-white">
        <div className="text-2xl font-bold">
          <h1>Ekatta Innovators</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-lg hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-lg hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="text-lg hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/products" className="text-lg hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="/career" className="text-lg hover:text-gray-400">
                Career
              </a>
            </li>
            <li>
              <a href="/contact" className="text-lg hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
