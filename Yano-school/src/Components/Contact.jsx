
function Contact(){
    return(

   <section>

  {/* 1. Page Title */}
  <section>
    <h1 className="text-3xl font-bold text-gray-700 mb-4">Contact Us</h1>
    <p className="text-gray-700">We’re here to help. Reach out to us with any questions or concerns.</p>
  </section>

  {/* 2. Contact Form */}
  <section>
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send a Message</h2>
    <form className="grid gap-4 max-w-xl">
      <input type="text" placeholder="Your Name" className="border p-3 rounded" />
      <input type="email" placeholder="Your Email" className="border p-3 rounded" />
      <select className="border p-3 rounded">
        <option>Subject</option>
        <option>General Inquiry</option>
        <option>Admissions</option>
        <option>Partnership</option>
        <option>Feedback</option>
      </select>
      <textarea rows="5" placeholder="Your Message" className="border p-3 rounded" />
      <button className="bg-red-400 text-white px-6 py-2 rounded hover:bg-yellow-700">
        Submit
      </button>
    </form>
  </section>

  {/* 3. School Contact Info */}
  <section className="bg-gray-100 p-6 rounded shadow">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">School Contact Information</h2>
    <ul className="text-gray-600 space-y-2">
      <li>📍 123 Yano School Street, Ikorodu, Lagos</li>
      <li>📞 +234 801 234 5678</li>
      <li>✉️ info@yanoschool.com</li>
    </ul>
  </section>

  {/* 4. Office Hours */}
  <section>
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Office Hours</h2>
    <p className="text-gray-600">
      Monday – Friday: 8:00 AM – 4:00 PM <br />
      Saturday: 9:00 AM – 12:00 PM
    </p>
  </section>

  {/* 5. Department Contact Cards */}
  <section className="bg-gray-100 p-6">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Departments</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold text-gray-700">Principal’s Office</h4>
        <p>Email: principal@yanoschool.com</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="font-bold text-gray-700">Accounts & Fees</h4>
        <p>Email: accounts@yanoschool.com</p>
      </div>
    </div>
  </section>

  {/* 6. Embedded Map (Optional) */}
  <section>
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Find Us on the Map</h2>
    <div className="w-full h-64">
      {/* Replace with real map embed */}
      <iframe
        src="https://maps.google.com/maps?q=ikorodu%20lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        className="rounded"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>

</section>

    )
}
export default Contact;