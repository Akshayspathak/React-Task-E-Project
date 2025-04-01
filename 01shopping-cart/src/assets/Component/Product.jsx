import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function Product() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      carCompany: "toyota",
      carName: "Fortuner",
      carPrice: "1cr",
      count: 1,
      moreInfo:
        "The See Toyota Fortuner car on-road price, engine specifications, features, mileage, images, colours, models and variants, competitors, reviews, user ratings and latest news updates at DriveSpark. Toyota Fortuner price statrs at Rs. 32.99 Lakh in India",

      carImage:
        "https://wallpapers.com/images/hd/toyota-fortuner-black-trd-variant-model-72r9iq6f8avojga4.jpg",
    },
    {
      id: 2,
      carCompany: "Tata",
      carName: "Harrier",
      carPrice: "2cr",
      count: 1,
      moreInfo:
        "The Tata Harrier is a five-seater, diesel-engined compact crossover SUV produced by the Indian automaker Tata Motors Limited. [2] It was launched in Indian market on 23 January 2019 [3][4] and is positioned between the subcompact Tata Nexon.",

      carImage:
        "https://images.news18.com/ibnlive/uploads/2021/07/1626093308_tata-harrier-dark-edition.png?impolicy=website&width=0&height=0",
    },
    {
      id: 3,
      carCompany: "Range-Rover",
      carName: "Range Rover",
      carPrice: "3cr",
      count: 1,
      moreInfo:
        "The Land Rover Range Rover, generally shortened to Range Rover, is a 4x4 luxury SUV produced by Land Rover, a marque and sub-brand of Jaguar Land Rover. The Range Rover line was launched in 1970 by British Leyland and is now in its fifth generation.",

      carImage: "https://wallpaperaccess.com/full/2103829.jpg",
    },
  ];

  // const addToCart = (product) => {
  //   setCart([...cart, { ...product }]);
  // };
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

  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.carPrice * item.count),
    0
  );

  const [moreInfo, setMoreInfo] = useState(false);
  const handleClick = () => {
    setMoreInfo(!moreInfo);
    console.log(moreInfo);
  };

  const [cat, setCat] = useState("all");

  return (
    <>
      <div className="container mx-auto p-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 w-full"
          // className="text-3xl font-bold text-center"
          onClick={() => {
            setCat("all");
          }}
        >
          {/* Shopping Cart */}
          All Products
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 w-full"
          // className="text-3xl font-bold text-center"
          onClick={() => {
            setCat("cart");
          }}
        >
          Cart
        </button>
        {/* {cat == "cart" && <h1>totl price ={totalPrice}</h1>} */}

        {/* <div className="grid grid-cols-3 gap-4 mt-6">
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
        </div> */}

        <div className="flex">
          {(cat == "all" ? products : cart).map((product) => (
            <div
              key={product.id}
              className="w-1/3  m-1  h-auto border-1px border-solid border-black"
            >
              <img
                src={product.carImage}
                alt={product.carName}
                width={"100%"}
                className="w-full h-80 object-cover rounded-xl"
              />
              <h2 className="text-xl font-bold mt-2">{product.carName}</h2>
              <p className="text-gray-400"> {product.carCompany}</p>
              <p className="text-gray-400"> {product.carPrice}</p>
              <p className="text-gray-400"> {product.count}</p>
              <h1>{moreInfo}</h1>

              <button onClick={handleClick}>More-Info</button>
              {moreInfo && (
                <div className="text-gray-400">{product.moreInfo}</div>
              )}

              {cat == "all" && (
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 horver:bg-blue-700 w-full"
                >
                  Add To Cart
                </button>
              )}
              {cat == "cart" && (
                <>
                  <p> count :- {product?.count}</p>
                  <p>price:- {product.count * product.carPrice} Cr</p>
                  <div className="flex justify-between items-center mt-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 mt-2 w-full"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* <div className="mt-8">
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
          <IoMdClose />
        </div> */}
      </div>
    </>
  );
}
export default Product;
