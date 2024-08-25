import React from "react";

const AboutCompany = () => {
  return (
    <div className="bg-black text-white h-[100vh] py-10 px-4 lg:px-0 lg:py-20">
      <h1>About the Company</h1>
      <div className="container mx-auto">
        {/* yellow box */}
        <div className="m-5 flex flex-col lg:flex-row gap-4 text-zinc-200 rounded-md overflow-hidden h-[60vh] ">
          <div className=" border-2 bg-opacity-30 border-yellow-600 border-opacity-45 bg-yellow-200 p-4 rounded-xl lg:w-[50%]">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-left">
              <img
                className="max-w-[20vw] h-full"
                src="logo_bntly.png"
                alt="Raylers Bentley"
              />
            </h2>
            <p className="text-base lg:text-lg mb-8 text-left">
              Raylers Bentley has been a pioneer in the automotive industry,
              delivering high-quality radiators for over 10 years. We are
              dedicated to innovation, sustainability, and excellence in every
              product we supply.
            </p>
          </div>
          <div className=" overflow-clip align-middle flex lg:w-[50%]">
            <img className="object-cover rounded-md" src="car-b.webp" alt="" />
          </div>
        </div>
        <div className="flex space-x-24 py-10 justify-center">
          <ul className="flex flex-col gap-3">
            <img className="h-16 w-16" src="shield.png" alt="" />
            <p>Reliability</p>
          </ul>
          <ul className="flex flex-col gap-3">
            <img className="h-16 w-16" src="shield.png" alt="" />
            <p>Assurance</p>
          </ul>
          <ul className="flex flex-col gap-3">
            <img className="h-16 w-16" src="shield.png" alt="" />
            <p>Quality</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

{
  /* <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          About Raylers Bentley
        </h2>
        <p className="text-base lg:text-lg mb-8 text-center">
          Raylers Bentley has been a pioneer in the automotive industry,
          delivering high-quality radiators for over 20 years. We are dedicated
          to innovation, sustainability, and excellence in every product we
          manufacture.
        </p>
        <p className="text-base lg:text-lg text-center">
          Our state-of-the-art facilities in the UAE allow us to meet the
          demands of our clients with precision and speed. Whether it's for an
          SUV, a pickup truck, or a sedan, our radiators are built to perform in
          the harshest conditions.
        </p> */
}
