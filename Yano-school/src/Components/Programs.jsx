import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBaby,
  faChild,
  faBook,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";
import programsHero from "../assets/programsHero.webp";
import Secondaryschool from "../pages/programms/Secondaryschool";
import Clubs from "../pages/programms/Clubs";
import SchoolCalendar from "../pages/programms/SchoolCalendar";

function Programs() {
  return (
    <div className="Programs">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[80vh] md:h-[85vh] overflow-hidden"
        style={{
          backgroundImage: `url(${programsHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-10"></div>

        <div className="relative z-20 flex flex-col justify-center h-full px-6 text-white max-w-4xl mx-auto">
          <p className="text-red-400 uppercase tracking-widest font-bold text-sm">
            Yano Academic Tracks
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
            Explore Our Comprehensive Educational Programs
          </h1>
          <div className="flex justify-start my-4">
            <div className="w-16 h-[2px] bg-red-400 rounded-full"></div>
          </div>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-3xl">
            Our school offers well-rounded programs designed to nurture every
            child's potential—from foundational skills to career preparation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="duration-300">
        {/* Primary School - Swipeable Cards */}
        <section className="mb-16 bg-gray-100 px-3 py-6 ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Primary School Programs
          </h2>
          <div className="flex space-x-4 overflow-x-auto pb-4 px-1 -mx-1 scrollbar-thin scrollbar-thumb-red-300">
            {[
              {
                title: "Daycare – Ages 1–3",
                icon: faBaby,
                desc: "Safe, nurturing environment for toddlers, promoting early emotional and social development.",
              },
              {
                title: "Early Childhood Education – Ages 3–5",
                icon: faChild,
                desc: "Pre-nursery and Nursery classes focused on cognitive, social, and emotional development.",
              },
              {
                title: "Literacy & Numeracy",
                icon: faBook,
                desc: "Building reading, writing, and basic arithmetic through engaging lessons.",
              },
              {
                title: "Critical Thinking & Creativity",
                icon: faBrain,
                desc: "Activities and puzzles designed to spark curiosity and innovation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] md:min-w-[300px] bg-white border border-gray-200 dark:border-gray-600 rounded-2xl p-5 shadow-md flex-shrink-0"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-3xl text-red-400 mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-700  mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary School */}
        <section>
          <Secondaryschool />
        </section>
      
      

        {/* Special Programs */}
       <section>
        <Clubs />
       </section>

        {/* Lagos State Academic Calendar */}
        <section id="school-calendar">
          <SchoolCalendar />
        </section>

        {/* CTA */}
        <div className="text-center flex flex-col items-center justify-center py-12">
          <p className="text-lg text-gray-700">Interested in Enrolling?</p>
          <NavLink
            to="/admissions"
            className="inline-block mt-4 border border-red-400 px-6 py-3 rounded-3xl text-black hover:bg-red-400 hover:text-white transition duration-300"
          >
            Visit Admissions Page →
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Programs;
