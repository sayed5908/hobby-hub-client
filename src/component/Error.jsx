import React from 'react';
import { Link, useRouteError } from 'react-router';

const Error = () => {
    const error = useRouteError();
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-error">
          {error?.status || 404}
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-3 mb-6">
          {error?.statusText ||
            error?.message ||
            "Something went wrong."}
        </p>

        <img
          className="w-80 mx-auto mb-6"
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Error"
        />

        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </div>
    );
};

export default Error;