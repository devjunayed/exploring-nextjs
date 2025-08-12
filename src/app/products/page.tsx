/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductsPage = async () => {
  // SSG (Static Site Generation)

  // const res = await fetch("http://localhost:5000/shoes", {
  //   cache: "force-cache",
  // });
  // const res = await fetch("http://localhost:5000/shoes");


  // Incremental Static Generation
  const res = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 5,
    }
  })
  const shoes = await res.json();

  return (
    <div className="w-full flex flex-col justify-center mx-10">
      <h1 className="text-4xl my-8 w-full text-center ">All Products aljsdflsd</h1>
      <div className="flex gap-4  flex-wrap justify-center items-stretch ">
        {shoes.map((shoe: typeof shoes) => (
          <div key={shoe.id} className="flex-grow basis-80">
            <div className="card  bg-base-100 flex-col h-full flex w-96 shadow-sm">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body flex-grow">
                <h2 className="card-title flex-grow">{shoe.title}</h2>
                <div className="badge badge-primary w-full ">{shoe.price}</div>
                <p className="flex-grow">{shoe.description}</p>

                <div className="card-actions justify-center mt-auto flex-grow  ">
                  <button className="btn btn-outline btn-primary">
                    Buy Now
                  </button>
                  <button className="btn btn-outline btn-primary">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
