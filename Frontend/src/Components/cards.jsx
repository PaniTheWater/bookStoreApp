import React from "react";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3 flex flex-col h-full">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col h-full">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="flex-grow">{item.title}</p>
          <div className="card-actions justify-between mt-auto">
            <div className="badge badge-success ">$ {item.Price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
