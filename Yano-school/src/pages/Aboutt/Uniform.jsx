import React from "react";

export default function Uniform() {
  return (
    <section id="uniform" className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-700  mb-4">Uniform Guidelines</h2>
         <div className="ml-[10px] mb-4">
     <div className="w-16 h-[2px] mt-2 bg-red-400 rounded-full"></div>
       </div>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Our students are expected to maintain a smart and modest appearance at all times.
          Below are the official uniforms for various school activities.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Regular Boys */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}uniforms/boys-regular.jpg`}
              alt="Boys Regular Uniform"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">Boys Regular</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Pink top with striped pink and light purple trousers.
              </p>
            </div>
          </div>

          {/* Regular Girls */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}uniforms/girls-regular.jpg`}
              alt="Girls Regular Uniform"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-400">Girls Regular</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Striped gown featuring pink and light purple tones.
              </p>
            </div>
          </div>

          {/* Sportswear */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}uniforms/sports.jpg`}
              alt="Sportswear"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-400">Sportswear</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Pink top and matching striped trousers. Worn during sports.
              </p>
            </div>
          </div>

          {/* Friday Polo */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}uniforms/friday.jpg`}
              alt="Friday Wear"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-yellow-700 dark:text-yellow-400">Friday Polo</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                Branded pink polo with striped trousers for all students.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-10 text-gray-700 dark:text-gray-300 text-sm italic">
          All students must wear white socks and black sandals. Grooming must be neat and appropriate.
        </p>
      </div>
    </section>
  );
}
