
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { format, isBefore, isAfter } from 'date-fns';

export default function EventsCalendar() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios.get('http://localhost:5000/events')
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  const today = new Date();
  const upcoming = events.filter(e => isAfter(new Date(e.date), today));
  const past = events.filter(e => isBefore(new Date(e.date), today));

  const tileClassName = ({ date }) => {
    const dStr = format(date, 'yyyy-MM-dd');
    const match = events.find(e => e.date === dStr);
    if (match) {
      return isAfter(new Date(dStr), today) ? 'bg-green-200' : 'bg-red-200';
    }
    return null;
  };

  return (
    <div className="mt-10">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">Event Calendar</h2>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={tileClassName}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
          {upcoming.length === 0 ? <p>No upcoming events.</p> : (
            <ul className="space-y-4">
              {upcoming.map(ev => (
                <li key={ev.id} className="border p-3 rounded-md shadow-sm bg-green-50">
                  <h3 className="font-bold">{ev.title}</h3>
                  <p>{ev.description}</p>
                  <p><strong>Date:</strong> {format(new Date(ev.date), 'PPP')}</p>
                  <p><strong>Location:</strong> {ev.location}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Past Events Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Past Events</h2>
        {past.length === 0 ? <p>No past events.</p> : (
          <ul className="space-y-4">
            {past.map(ev => (
              <li key={ev.id} className="border p-3 rounded-md shadow-sm bg-gray-100">
                <h3 className="font-bold">{ev.title}</h3>
                <p>{ev.description}</p>
                <p><strong>Date:</strong> {format(new Date(ev.date), 'PPP')}</p>
                <p><strong>Location:</strong> {ev.location}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
