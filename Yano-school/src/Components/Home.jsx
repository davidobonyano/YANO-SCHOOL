import { NavLink } from "react-router-dom";
import heroImage from '../assets/hero.jpg';
import Mission from "../pages/Mission";
import Aboutlayout from "../Layout/Aboutlayout";
import Programsslider from "../Layout/Programsslider";
import Programslayout from "../Layout/Programslayout";
import Testimonialslider from "../pages/Testimonialslider";
import EventsHome from "../Layout/EventsHome";


function Home() {
  return (
    <div className="Home">
      <section
        className="relative w-full h-[700px]   md:h-[500px]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-blue-800 via-blue-900/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

        <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 max-w-2xl">
          <p className="text-red-400 uppercase tracking-widest font-bold text-sm">
            Choose The Best
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-2">
            Education For Your Future
          </h1>
          <p className="mt-4 text-gray-200 font-light text-lg md:text-xl">
            At Yano School, we help every student discover their path in both academics and life.
          </p>
          <div className="mt-6">
            <NavLink
              to="/contact"
              className="bg-blue-900 hover:bg-blue-800 rounded-3xl px-6 py-3 text-white inline-block"
            >
              Enroll today <span className="inline-block ml-2">→</span>
            </NavLink>
          </div>
        </div>
      </section>

      <section>
        <Mission />
      </section>
      <section>
        <Aboutlayout />
      </section>
      <section>
        <EventsHome />
      </section>
      <section>
        <Programsslider />
        <Programslayout />
      </section>
      <section>
        <Testimonialslider />
      </section>
    </div>
  );
}

export default Home;
