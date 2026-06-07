import React from 'react';
import { FaBook, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import { FaRegEdit } from "react-icons/fa";

const GroupDetails = () => {
  const group = useLoaderData();

  const {
    _id,
    user,
    userMail,
    name,
    category,
    description,
    location,
    members,
    date,
    url,
  } = group;

  const isExpired = new Date(date) < new Date();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-base-100 shadow-xl rounded-3xl overflow-hidden">

        {/* Hero Image */}
        <div className="relative">
          <img
            src={url}
            alt={name}
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute bottom-8 left-8 text-white">
            <span className="badge badge-primary mb-3">
              {category}
            </span>

            <h1 className="text-5xl font-bold">
              {name}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">

          {/* Description */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">
                About This Group
              </h2>

              {/* <Link
                to={`/updateGroup/${_id}`}
                className="btn btn-dash btn-info"
              >
                Update Group <FaRegEdit />
              </Link> */}
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Group Creator */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Group Creator
            </h2>

            <div className="bg-base-200 p-6 rounded-2xl">
              <p className="text-lg mb-2">
                <span className="font-bold">Name:</span> {user}
              </p>

              <p className="text-lg">
                <span className="font-bold">Email:</span> {userMail}
              </p>
            </div>
          </div>

          {/* Information */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

            <div className="bg-base-200 p-6 rounded-2xl text-center">
              <FaBook className="text-3xl mx-auto mb-3 text-primary" />
              <h3 className="font-bold">Category</h3>
              <p>{category}</p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl text-center">
              <FaMapMarkerAlt className="text-3xl mx-auto mb-3 text-error" />
              <h3 className="font-bold">Location</h3>
              <p>{location}</p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl text-center">
              <FaUsers className="text-3xl mx-auto mb-3 text-success" />
              <h3 className="font-bold">Members</h3>
              <p>{members} Members</p>
            </div>

            <div className="bg-base-200 p-6 rounded-2xl text-center">
              <FaCalendarAlt className="text-3xl mx-auto mb-3 text-warning" />
              <h3 className="font-bold">Start Date</h3>
              <p>{date}</p>
            </div>

          </div>

          {/* Join Button */}
          <div className="text-center">

            {isExpired ? (
              <div className="alert alert-error">
                ❌ This group is no longer active.
              </div>
            ) : (
              <button className="btn btn-primary w-full px-10">
                Join Group
              </button>
            )}

          </div>

        </div>
      </div>
    </div>
  );
};

export default GroupDetails;