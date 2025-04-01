import React, { useState } from "react";

function Product() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      carCompany: "toyota",
      carName: "Fortuner",
      carPrice: "1",
      count: 1,
      carImage:
        "https://wallpapers.com/images/hd/toyota-fortuner-black-trd-variant-model-72r9iq6f8avojga4.jpg",
    },
    {
      id: 2,

      carCompany: "Tata",

      count: 1,
      carName: "Harrier",
      carPrice: "2",
      carImage:
        "https://images.news18.com/ibnlive/uploads/2021/07/1626093308_tata-harrier-dark-edition.png?impolicy=website&width=0&height=0",
    },
    {
      id: 3,

      count: 1,
      carCompany: "Range-Rover",
      carName: "Range Rover",
      carPrice: "3",
      carImage: "https://wallpaperaccess.com/full/2103829.jpg",
    },
  ];
  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.carPrice * item.count),
    0
  );
  const addToCart = (product) => {
    let index = cart.findIndex((ele, index) => ele?.id == product?.id);
    if (index == -1) {
      let arrT = [...cart];
      arrT.push(product);
      setCart(arrT);
    } else {
      let arrT = [...cart];
      arrT[index].count++;
      // arrT.push(product)
      setCart(arrT);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // const totalPrice = cart.reduce((total, item) => total + item.carPrice, 0);

  const [cat, setCat] = useState("all");

  return (
    <>
      <div className="container mx-auto p-6">
        <h1
          className="text-3xl font-bold text-center"
          onClick={() => {
            setCat("all");
          }}
        >
          Shopping Cart
        </h1>
        <h1
          className="text-3xl font-bold text-center"
          onClick={() => {
            setCat("cart");
          }}
        >
          Cart{" "}
        </h1>

        {cat == "cart" && <h1>totl price ={totalPrice}</h1>}

        <div
          className=""
          style={{
            display: "flex",
          }}
        >
          {(cat == "all" ? products : cart).map((product) => (
            <div
              key={product.id}
              style={{
                width: "33.33%",
                marin: "10px",
                height: "auto",
                border: "1px solid black",
              }}
            >
              <img
                src={product.carImage}
                alt={product.carName}
                width={"100%"}
                className="w-full h-80 object-cover rounded-xl"
              />
              <h2 className="text-xl font-bold mt-2">{product.carName}</h2>
              <p className="text-gray-400">{product.carCompany}</p>
              <p className="text-gray-400"> {product.carPrice} </p>
              {cat == "all" && (
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              )}
              {cat == "cart" && (
                <>
                  <p> count :- {product?.count} </p>
                  <p> price :- {product.count * product.carPrice} Cr</p>
                </>
              )}
              z
            </div>
          ))}
        </div>

        <div className="mt-8"></div>
      </div>
    </>
  );
}
export default Product;
