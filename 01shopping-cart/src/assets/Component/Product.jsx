import React, { useState } from "react";

function Product() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      carCompany: "toyota",
      carName: "Fortuner",
      carPrice: "1cr",
      carImage:
        "https://wallpapers.com/images/hd/toyota-fortuner-black-trd-variant-model-72r9iq6f8avojga4.jpg",
    },
    {
      id: 2,
      carCompany: "Tata",
      carName: "Harrier",
      carPrice: "2cr",
      carImage:
        "https://images.news18.com/ibnlive/uploads/2021/07/1626093308_tata-harrier-dark-edition.png?impolicy=website&width=0&height=0",
    },
    {
      id: 3,
      carCompany: "Range-Rover",
      carName: "Range Rover",
      carPrice: "3cr",
      carImage: "https://wallpaperaccess.com/full/2103829.jpg",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // const totalPrice = cart.reduce((total, item) => total + item.carPrice, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.carPrice),
    0
  );

  return (
    <>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center">Shopping Cart</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {products.map((product) => (
            <div key={product.id} className="border  p-4 rounded-lg shadow-lg">
              <img
                src={product.carImage}
                alt={product.carName}
                className="w-full h-80 object-cover rounded-xl"
              />
              <h2 className="text-xl font-bold mt-2">{product.carName}</h2>
              <p className="text-gray-400">{product.carCompany}</p>
              <p className="text-gray-400"> {product.carPrice} </p>

              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500 mt-4">The Cart is Empty</p>
          ) : (
            <div className="mt-6">
              <ul>
                {cart.map((item, index) => (
                  <li
                    key={{ index }}
                    className="flex justify-between items-center py-2"
                  >
                    <span>{item.carName}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="text-xl font-bold mt-4">
                <p>Totol Price(Cr) = {totalPrice}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Product;
