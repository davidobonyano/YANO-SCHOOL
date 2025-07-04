// WhyUs.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faSchool,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import Programs from "../Components/Programs";

const features = [
  {
    title: "Our Programs",
    icon: faBookOpen,
    description:
      "We offer a rich blend of academic and extracurricular programs tailored to every child’s development.",
  },
  {
    title: "Modern Facilities",
    icon: faSchool,
    description:
      "Equipped with ICT labs, libraries, playgrounds, and secure learning spaces for every student.",
  },
  {
    title: "Conducive Learning",
    icon: faLeaf,
    description:
      "A calm and encouraging atmosphere that promotes focus, creativity, and growth.",
  },
];

function Programslayout() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-700">Why Choose Yano School?</h2>
        <p className="text-gray-600 mt-2">We provide everything your child needs to thrive.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-red-400 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programslayout;
