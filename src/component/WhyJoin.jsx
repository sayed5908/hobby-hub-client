import {
  FaUsers,
  FaHandshake,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";
import React from 'react';

const WhyJoin = () => {
  const benefits = [
    {
      icon: <FaUsers />,
      title: "Build Friendships",
      description:
        "Meet people who share your interests and create meaningful connections.",
    },
    {
      icon: <FaHandshake />,
      title: "Join Local Events",
      description:
        "Participate in hobby meetups, workshops, and community activities.",
    },
    {
      icon: <FaLightbulb />,
      title: "Learn New Skills",
      description:
        "Gain knowledge and improve your hobby skills from experienced members.",
    },
    {
      icon: <FaHeart />,
      title: "Enjoy Your Passion",
      description:
        "Spend time doing what you love with a supportive community.",
    },
  ];

  return (
    <section className="py-20">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Join HobbyHub?
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Connect, learn, and grow through shared passions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-base-100 shadow-lg rounded-2xl p-8 text-center"
            >
              <div className="text-5xl text-primary mb-4 flex justify-center">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;