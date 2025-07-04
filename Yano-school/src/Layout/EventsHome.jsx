import { useEffect, useState } from 'react';
import axios from 'axios';
import { format, isAfter, isBefore } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function EventsHome() {
  const [events, setEvents] = useState([]);
  const [nextEvent, setNextEvent] = useState(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    ended: false
  });

  useEffect(() => {
    axios.get('http://localhost:4000/events')
      .then(res => {
        const today = new Date();
        const upcoming = res.data
          .filter(e => isAfter(new Date(e.date), today))
          .sort((a, b) => new Date(a.date) - new Date(b.date));
        const past = res.data
          .filter(e => isBefore(new Date(e.date), today))
          .sort((a, b) => new Date(b.date) - new Date(a.date)); // recent first

        if (upcoming.length > 0) setNextEvent(upcoming[0]);
        setEvents(past.slice(0, 3)); // latest 3 past events
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (!nextEvent) return;

    const updateCountdown = () => {
      const now = new Date();
      const eventDate = new Date(nextEvent.date);
      const diff = eventDate - now;

      if (diff <= 0) {
        setCountdown(prev => ({ ...prev, ended: true }));
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds, ended: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [nextEvent]);

  return (
    <section className="py-12 bg-gray-100 dark:bg-[#1F222A] px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-white">Upcoming Events</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Mark your calendar and get ready!</p>
      </div>

      {/* Upcoming Event */}
      {nextEvent ? (
        <div className="max-w-2xl mx-auto bg-white dark:bg-[#2D2D30] text-gray-700 dark:text-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 mb-12">
          <h3 className="text-2xl font-semibold mb-3 text-gray-700 dark:text-white">{nextEvent.title}</h3>
          <p className="flex items-center gap-2 text-sm mb-4 text-gray-600 dark:text-gray-400">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-red-400" />
            {format(new Date(nextEvent.date), 'PPP')}
          </p>

          {countdown.ended ? (
            <p className="text-xl font-bold text-red-500 mt-4">Happening now!</p>
          ) : (
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white text-gray-700 border-2 border-blue-900"
                >
                  <span className="text-2xl font-bold">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">No upcoming events yet.</p>
      )}

      {/* Past Events (Recent Highlights) */}
      {events.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <h3 className="text-left italic text-sm text-gray-600 dark:text-gray-400 mb-4 ml-1">
            *recent events*
          </h3>
          <div className="bg-white dark:bg-[#2D2D30] p-6 rounded-2xl shadow-md">
            {events.map(ev => (
              <div
                key={ev.id}
                className="mb-4 border-b border-gray-200 dark:border-gray-600 pb-4 last:border-none last:pb-0"
              >
                <h4 className="text-base font-semibold text-gray-700 dark:text-gray-100">{ev.title}</h4>
                <p className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-400 mt-1">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-red-400" />
                  {format(new Date(ev.date), 'PPP')}
                  <span className="mx-2">•</span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-400" />
                  {ev.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* No Past Events */}
      {events.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">No past events to show.</p>
      )}
    </section>
  );
}
