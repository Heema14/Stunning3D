import { BiDiamond } from "react-icons/bi";
import { CgExternal } from "react-icons/cg";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <section className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)] px-2 sm:px-0">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[55%] md:mt-[45%] lg:mt-0 pb-8 lg:pb-0"
      >
        <div className="relative w-[95%] md:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <BiDiamond /> INTROUCING
          </div>
        </div>

        <h1 className="text-center sm:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          EMAIL FOR
          <br />
          DEVELOPERS
        </h1>

        <p className="text-center sm:text-left text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          The best way to reach uumans insted of spam folders, dlever
          tracnsactional and marketing emails at scale.
        </p>

        <div className="flex gap-4 mt-12">
          <a
            href="https://www.linkedin.com/in/ibrahim-yaseen-a13515256/"
            className="border border-[#2a2a2a] flex gap-1 items-center py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
          >
            Documentation
            <CgExternal className="text-xl" />
          </a>

          <a
            href="https://github.com/Heema14"
            className="border border-[#2a2a2a] flex gap-1 items-center py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
          >
            Get Started
            <CgExternal className="text-xl" />
          </a>
        </div>
      </div>

      {/* 3d Robot */}
      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-15%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/xuMD-sIpNQ5SdNKT/scene.splinecode"
      />
    </section>
  );
};

export default Hero;
