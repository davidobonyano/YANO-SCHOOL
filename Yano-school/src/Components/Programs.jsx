// src/pages/Programs.jsx
import React from "react";

const Programs = () => {
  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-center">Explore Our Comprehensive Educational Programs</h1>
      <p className="text-gray-700 mb-10 text-center">
        Our school offers well-rounded programs designed to nurture every child's potential—from foundational skills to career preparation.
      </p>

      {/* Primary School Programs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Primary School Programs</h2>
        <ul className="space-y-4">
          <li>👶 <strong>Early Childhood Education</strong> – Ages 3–5: Pre-nursery and Nursery classes focused on cognitive, social, and emotional development.</li>
          <li>📚 <strong>Literacy & Numeracy</strong> – Building reading, writing, and basic arithmetic through engaging lessons.</li>
          <li>🧠 <strong>Critical Thinking & Creativity</strong> – Activities and puzzles designed to spark curiosity and innovation.</li>
        </ul>
      </section>

      {/* Secondary School Programs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Secondary School Programs</h2>
        
        <h3 className="text-xl font-medium mt-6 mb-2">Junior Secondary</h3>
        <p className="mb-4">Core subjects including Math, English, Basic Science, Civic Education, and Intro to ICT.</p>

        <h3 className="text-xl font-medium mt-6 mb-2">Senior Secondary</h3>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Science Stream:</strong> Physics, Chemistry, Biology, Further Math, etc.</li>
          <li><strong>Arts Stream:</strong> Literature, CRS/IRS, Government, History, etc.</li>
          <li><strong>Commercial Stream:</strong> Accounting, Commerce, Economics, Business Studies.</li>
        </ul>
      </section>

      {/* Curriculum Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Curriculum Highlights</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>WAEC/NECO-focused learning structure</li>
          <li>Computer-based testing (CBT) integration</li>
          <li>Emphasis on language development and communication</li>
        </ul>
      </section>

      {/* Special Programs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Special Programs</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>👨‍💻 Coding Club</li>
          <li>🏫 Leadership Academy</li>
          <li>☀️ Summer School</li>
        </ul>
      </section>

      {/* Co-Curricular Activities */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Co-Curricular Activities</h2>
        <p>Students also enjoy a variety of enriching activities:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Drama & Performing Arts</li>
          <li>Debate & Public Speaking</li>
          <li>Sports (Football, Athletics, etc.)</li>
          <li>Music & Dance</li>
          <li>School Press Club</li>
        </ul>
      </section>

      {/* Testimonials or Achievements */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Student Achievements</h2>
        <p>Our students have won national spelling bees, represented the school in science fairs, and consistently outperform on standardized exams.</p>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-10">
        <p className="mb-4 text-lg">Interested in Enrolling?</p>
        <a
          href="/admissions"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Visit Admissions Page
        </a>
      </div>
    </div>
  );
};

export default Programs;
