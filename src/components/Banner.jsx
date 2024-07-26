import React from "react";
import banner from "./img/banner.jpg";

function Banner() {
  return (
    <div className="grid items-center sm:grid-cols-12">
      <div className="col-span-6 mb-4">
        <h1 className="text-4xl font-extrabold mb-2">
          Enjoy Amazing Offers <br /> Here With Us
        </h1>
        <p className="text-lg max-w-md text-neutral-700 tracking-tight">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
          harum?
        </p>
      </div>
      <div className="col-span-6">
        <img src={banner} alt="banner" className="rounded-lg" />
      </div>
    </div>
  );
}

export default Banner;
