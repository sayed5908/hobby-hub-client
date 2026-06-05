import React from 'react';
import {
  FaBook,
  FaCamera,
  FaGamepad,
  FaPaintBrush,
  FaRunning,
  FaUtensils,
} from "react-icons/fa";


const HobbyCategories = () => {

     const categories = [
    { icon: <FaBook />, name: "Reading" },
    { icon: <FaCamera />, name: "Photography" },
    { icon: <FaGamepad />, name: "Gaming" },
    { icon: <FaPaintBrush />, name: "Painting" },
    { icon: <FaRunning />, name: "Running" },
    { icon: <FaUtensils />, name: "Cooking" },
  ];
    return (
        <section className="py-20 bg-base-200">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Popular Hobby Categories
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Discover communities built around your favorite hobbies.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-xl transition"
            >
              <div className="text-4xl text-primary mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default HobbyCategories;