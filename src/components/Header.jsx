import { BiMenu } from "react-icons/bi";

const Header = () => {
  const styleLink =
    "font-light hover:font-medium m-0 transition-all duration-500";

  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center p-4 lg:px-20">
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-2xl md:text-4xl font-semibold m-0"
      >
        I<sub className="text-[#e99b63]">●</sub>CODE
      </h1>

      {/* Desktop Nav */}
      <nav className="hidden relative z-50 lg:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className={`${styleLink} text-lg md:text-xl`}
          href="#"
        >
          COMPANY
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className={`${styleLink} text-lg md:text-xl`}
          href="#"
        >
          FEATURES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2200"
          className={`${styleLink} text-lg md:text-xl`}
          href="#"
        >
          RESOURCES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className={`${styleLink} text-lg md:text-xl`}
          href="#"
        >
          DOCS
        </a>
      </nav>

      <button
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="hidden lg:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50"
      >
        SIGNIN
      </button>

      {/* Mobile Menu Btn */}
      <div className="lg:hidden text-3xl p-2 z-50 cursor-pointer">
        <BiMenu onClick={toggleMobileMenu} className="text-3xl" />
      </div>

      {/* Mobile Menu - Hidden */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 lg:hidden z-40 bg-black/50 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-10 items-center mt-[20%]">
          <a className={`${styleLink} text-3xl`} href="#">
            COMPANY
          </a>
          <a className={`${styleLink} text-3xl`} href="#">
            FEATURES
          </a>
          <a className={`${styleLink} text-3xl`} href="#">
            RESOURCES
          </a>
          <a className={`${styleLink} text-3xl`} href="#">
            DOCS
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
