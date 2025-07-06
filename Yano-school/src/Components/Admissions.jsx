import { useEffect, useState } from 'react';
import { format, isAfter } from 'date-fns';
import { NavLink } from 'react-router-dom';
import eventData from '../data/db.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import bgImage from '../assets/images/admissions-bg.jpeg'; 

export default function Admissions() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const rawEvents = eventData.events || [];
    const filtered = rawEvents
      .filter(e => isAfter(new Date(e.date), today))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    setUpcomingEvents(filtered.slice(0, 3));
  }, []);

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 space-y-20 text-gray-700">

      {/* Hero Banner */}
      <section
        className="relative rounded-2xl overflow-hidden shadow-md"
        style={{
            backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="p-12 backdrop-blur text-white">
          <h1 className="text-4xl font-bold mb-4">Admissions</h1>
          <p className="max-w-2xl text-lg text-white/90">
            Give your child the best start in life. Yano School offers a nurturing environment,
            academic excellence, and personal growth opportunities.
          </p>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">📌 How to Apply</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Purchase and complete the application form.</li>
          <li>Submit required documents at the school office.</li>
          <li>Sit for the entrance examination.</li>
          <li>Attend an interview with the school administrator.</li>
          <li>Receive your admission letter if successful.</li>
        </ol>
      </section>

      {/* Requirements */}
      <section className="bg-gray-100 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">📝 Admission Requirements</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Completed application form</li>
          <li>Two recent passport photographs</li>
          <li>Copy of birth certificate</li>
          <li>Last term’s report card (for transfers)</li>
          <li>Medical report (if available)</li>
        </ul>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">📅 Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600 flex items-center gap-2 mb-1">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-red-400" />
                  {format(new Date(event.date), 'PPP')}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400" />
                  {event.location}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No upcoming events at the moment.</p>
        )}
      </section>

      {/* CTA - Contact Admissions */}
      <section className="bg-white p-10 rounded-2xl text-center shadow">
        <p className="text-lg text-gray-800 mb-4">Have questions or need help with enrollment?</p>
        <NavLink
          to="/contact"
          className="inline-block bg-red-400 text-white font-medium px-6 py-3 rounded-full hover:bg-red-500 transition"
        >
          Contact the Admissions Office
        </NavLink>
      </section>
    </main>
  );
}
