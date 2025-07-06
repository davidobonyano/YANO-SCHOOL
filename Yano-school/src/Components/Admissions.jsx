function Admissions(){
    return(
        <main className="px-4 sm:px-6 lg:px-8 py-12 space-y-16">

  {/* 1. Page Title */}
  <section>
    <h1 className="text-3xl font-bold text-blue-700 mb-4">Admissions</h1>
    <p className="text-gray-700">
      Join the Yano School community and give your child the foundation for a bright future.
    </p>
  </section>

  {/* 2. Admission Process Overview */}
  <section>
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">How to Apply</h2>
    <ol className="list-decimal pl-6 text-gray-700 space-y-2">
      <li>Purchase and complete the application form.</li>
      <li>Submit required documents at the school office.</li>
      <li>Sit for the entrance examination.</li>
      <li>Attend an interview with the school administrator.</li>
      <li>Receive admission letter if successful.</li>
    </ol>
  </section>

  {/* 3. Admission Requirements */}
  <section>
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Requirements</h2>
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      <li>Completed application form</li>
      <li>2 recent passport photographs</li>
      <li>Copy of birth certificate</li>
      <li>Last term's report card (for transfers)</li>
      <li>Medical report (if available)</li>
    </ul>
  </section>

  {/* 4. Important Dates */}
  <section>
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Important Dates</h2>
    <ul className="text-gray-700 list-disc pl-6">
      <li>Admissions Open: March 1</li>
      <li>Entrance Exam: April 10</li>
      <li>Interview Day: April 20</li>
      <li>Offer Letters Sent: April 25</li>
    </ul>
  </section>

  {/* 5. Downloadable Forms */}
  <section>
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">Application Forms</h2>
    <a
      href="/docs/admission-form.pdf"
      className="text-blue-600 underline"
      download
    >
      📄 Download Admission Form (PDF)
    </a>
  </section>

  {/* 6. Parent/Student Testimonials */}
  <section>
    <h2 className="text-2xl font-semibold text-blue-600 mb-4">What Parents Say</h2>
    <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
      “The admission process was clear and welcoming. Yano School truly cares about each child.” – Mrs. Okoro
    </blockquote>
  </section>

  {/* 7. Book a Tour CTA */}
  <section className="text-center">
    <p className="text-gray-800 mb-4">Want to see our school in person?</p>
    <a
      href="/contact"
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
    >
      Book a School Tour
    </a>
  </section>

  {/* 8. Contact Admissions Office */}
  <section className="bg-blue-50 p-6 rounded shadow text-gray-800">
    <h3 className="text-xl font-bold text-blue-700 mb-2">Contact Admissions</h3>
    <p>Email: admissions@yanoschool.com</p>
    <p>Phone: +234 812 345 6789</p>
    <p>Office Hours: Mon–Fri, 8am – 4pm</p>
  </section>

</main>

    );
}
export default Admissions;