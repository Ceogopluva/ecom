import React from "react";
import banner from "./img/banner.jpg";

function Banner() {
  return (
    <div className="grid sm:grid-cols-12">
      <div className="col-span-6 p-6 text-4xl">
        Enjoy Amazing Offers <br /> Here With Us
      </div>
      <div className="col-span-6">
        <img src={banner} alt="banner" className="h-{50px}" />
      </div>
    </div>
  );
}

export default Banner;
