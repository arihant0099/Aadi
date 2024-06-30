import React from "react";

const HomeCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 border">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">Add to Cart</button>
      </div>
    </div>
  );
};

export default HomeCard;
