import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  return (
    <main>
      {/* image gradient */}
      <img
        className="absolute top-0 right-0 opacity-60 -z-10 gradientAnimate"
        src="/gradient.png"
        alt="light image"
      />

      {/* blure effect */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_35px_#e99b63] -rotate-[30deg] -z-10"></div>

      {/* Content Page */}
      <Header />
      <Hero />
    </main>
  );
};

export default App;
