import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faFlask,
  faGavel,
  faCalculator,
  faCalendarAlt,
  faArrowRight,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { format, isAfter } from "date-fns";
import eventData from "../../data/db.json";

const Secondaryschool = () => {
  const [nextEvent, setNextEvent] = useState(null);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const today = new Date();
    const upcoming = (eventData.events || [])
      .filter((e) => isAfter(new Date(e.date), today))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcoming.length > 0) {
      setNextEvent(upcoming[0]);
    }
  }, []);

  return (
    <section className="mb-12 px-4 space-y-10">
      {/* Hero */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-full object-cover"
        >
          <source src="./videos/motivation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
          <h2 className="text-white text-2xl md:text-3xl font-semibold text-center px-4">
            “Prepare for greatness. Start here.”
          </h2>
        </div>
      </div>

      {/* Header */}
      <h3 className="text-2xl font-semibold text-gray-700 text-center">
        Secondary School Programs
      </h3>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 text-gray-700">
        {/* Junior Secondary */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h4 className="text-xl font-medium text-red-400 mb-2 flex items-center">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2 text-red-400" />
            Junior Secondary
          </h4>
          <p className="text-sm">
            A strong foundation in Math, English, Basic Science, Civic Education, and Intro to ICT
            prepares students for a smooth academic transition.
          </p>
        </div>

        {/* Senior Secondary */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h4 className="text-xl font-medium text-red-400 mb-4">Senior Secondary</h4>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faFlask} className="text-blue-500 text-lg mt-1" />
              <p>
                <strong>Science Stream:</strong> Physics, Chemistry, Biology, Further Math
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faGavel} className="text-purple-500 text-lg mt-1" />
              <p>
                <strong>Arts Stream:</strong> Literature, CRS/IRS, Government, History
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faCalculator} className="text-green-500 text-lg mt-1" />
              <p>
                <strong>Commercial Stream:</strong> Accounting, Commerce, Economics, Business Studies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Event */}
      <div className="bg-red-50 p-6 rounded-xl flex flex-col gap-4">
        {nextEvent ? (
          <>
            <div className="flex items-start space-x-3">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-red-400 text-xl mt-1" />
              <div>
                <h5 className="font-semibold">Upcoming Event:</h5>
                <p className="text-gray-600 text-sm">
                  {nextEvent.title} — {format(new Date(nextEvent.date), "PPP")}
                </p>
                <p className="text-sm text-gray-600 flex items-center mt-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400 mr-1" />
                  {nextEvent.location}
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowDescription(!showDescription)}
              className="self-start flex items-center bg-red-400 text-white px-5 py-2 rounded-full hover:bg-red-500 transition"
            >
              {showDescription ? "Hide Details" : "Event Details"}
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </button>

            {showDescription && (
              <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700 shadow">
                <strong>Description:</strong>
                <p className="mt-1">{nextEvent.description}</p>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-600 text-sm">No upcoming events at this time.</p>
        )}
      </div>
    </section>
  );
};

export default Secondaryschool;
