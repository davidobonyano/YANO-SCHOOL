import { useEffect, useState } from 'react';
import axios from 'axios';
import { format, isAfter, isBefore } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function EventsHome() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/events')
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  const today = new Date();
  const upcoming = events.filter(e => isAfter(new Date(e.date), today)).slice(0, 2);
  const past = events.filter(e => isBefore(new Date(e.date), today)).slice(0, 3);

  const cardStyle =
    "bg-white dark:bg-[#2D2D30] text-gray-700 dark:text-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300";

  return (
    <section className="py-12 bg-gray-100 dark:bg-[#1F222A] px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white">Upcoming Events</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Exciting activities and moments ahead for our students.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {upcoming.map(ev => (
          <div key={ev.id} className={cardStyle}>
            <h3 className="text-xl font-semibold mb-2">{ev.title}</h3>
            <p className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-red-400" />
                {format(new Date(ev.date), 'PPP')}
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400" />
                {ev.location}
              </span>
            </p>
            {ev.description && <p className="text-gray-600 dark:text-gray-300 text-sm">{ev.description}</p>}
          </div>
        ))}
      </div>

      <div className="text-center mt-16 mb-10">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white">Recent Past Events</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Highlights from our most recent school activities.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {past.map(ev => (
          <div key={ev.id} className={cardStyle}>
            <h3 className="text-xl font-semibold mb-2">{ev.title}</h3>
            <p className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-red-400" />
                {format(new Date(ev.date), 'PPP')}
              </span>
              <span className="flex items-center gap-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400" />
                {ev.location}
              </span>
            </p>
            {ev.description && <p className="text-gray-600 dark:text-gray-300 text-sm">{ev.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
