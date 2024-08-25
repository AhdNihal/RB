import { React, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Lenis from "lenis";
import { Link } from "react-router-dom";
import AboutCompany from "../components/about";
import AboutProducts from "../components/product";
import Globe from "../components/GlobeRotating";

function HomePage() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const textBoxRef = useRef();
  //   const { scrollYProgress } = useScroll();
  const { scrollYProgress } = useScroll({
    target: textBoxRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [500, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const left = "-10%";
  const right = "-10%";

  console.log(scrollYProgress);

  return (
    //section for the home page

    <>
      <div className="bg-black text-white">
        <div
          ref={textBoxRef}
          className="container min-h-[100vh] relative mx-auto justify-center overflow-hidden items-center px-4 lg:px-0"
        >
          {/* <GlobeRotating /> */}

          <div className="relative position-relative text-4xl whitespace-nowrap md:text-9xl font-extrabold stroke-[#efd700]">
            <motion.div
              initial={{ left: -200 }} // Starting state
              animate={{
                left: [-200, 10],
              }}
              transition={{
                duration: 2, // Duration of the animation
                times: [0, 1], // Keyframe timings
                ease: "easeInOut", // Easing function
              }}
              style={{ left, translateX: y }}
              className="absolute mt-[15vh]"
            >
              <img
                src="rey_yellow.png"
                className="h-[6vh] md:h-[17vh] opacity-100 w-auto"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ right: -200 }} // Starting state
              animate={{
                right: [-200, -20],
              }}
              transition={{
                duration: 2, // Duration of the animation
                times: [0, 1], // Keyframe timings
                ease: "easeInOut", // Easing function
              }}
              style={{ right, translateX: y2 }}
              className="absolute mt-[35vh]"
            >
              <img
                src="bntly_yellow.png"
                className="h-[6vh] md:h-[17vh] opacity-100 w-auto"
                alt=""
              />
            </motion.div>
          </div>

          <div className="overflow-hidden items-center h-[60vh] w-[90vw]">
            {/* <GlobeWrapper /> */}
            <Globe />
            {/* <GlobeComponent /> */}
          </div>

          <div className="md:my-[22vh]">
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center">
              Raylers Bentley
            </h1>
            <p className="text-base lg:text-lg mb-12 text-center">
              A leading automotive spare parts supplier in India &<br /> Middle
              East - our presence in UAE, Oman, Qatar, Kuwait, Bahrain, and
              Saudi Arabia.
            </p>
            <div className="text-center">
              <Link
                to="mailto:enquiry@raylersbently.com"
                className="bg-[#FED700] hover:text-[#fed700] border-[#fed700] hover:border-2 text-black px-6 py-3 rounded-xl hover:bg-[#000000]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <AboutCompany /> */}
      {/* <AboutProducts /> */}
    </>
  );
}

export default HomePage;
