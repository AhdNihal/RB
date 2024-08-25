import React from "react";
import Marquee from "./marquee";

const AboutProducts = () => {
  const testimonials = [
    "Raylers Bentley radiators are the best! They last long and perform excellently. - John D.",
    "I am extremely satisfied with the radiator I purchased. Great quality! - Sarah K.",
    "Reliable and efficient! I will definitely choose Raylers Bentley for my future needs. - Mike S.",
  ];

  return (
    <div className="bg-gray-900 text-white py-10 px-4 lg:px-0 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
          Our Product Philosophy
        </h2>
        <p className="text-base lg:text-lg mb-8 text-center">
          At Raylers Bentley, we believe in creating products that stand the
          test of time. Our radiators are engineered with the latest technology
          and highest quality materials to ensure optimal performance and
          longevity.
        </p>
        <p className="text-base lg:text-lg text-center">
          Each radiator undergoes rigorous testing to meet the highest standards
          of efficiency and durability. Our commitment to quality ensures that
          every product we deliver exceeds customer expectations.
        </p>
      </div>
      <Marquee className="flex bg-red-600 h-[50] mt-10">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center px-4">
            {testimonial}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AboutProducts;
