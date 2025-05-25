
import React from "react";
import Logo from "/assets/logo.png"; // ✅ Make sure this path is correct

const Headline = () => {
  return (
    <div className="flex flex-col items-center text-center py-6 px-4">
      <img src={Logo} alt="Gadis USA Logo" className="w-24 h-24 rounded-full mb-2" />

      <h1 className="text-3xl font-bold">❀ Gadis USA ❀</h1>

      <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
        <span>⭐ 5.0</span>
        <span>·</span>
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
          </svg>
          Open · 09:00 AM–10:00 PM
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-700 font-medium">
        #Pre-Order Untuk 22–23 Mei#
      </p>

      <p className="mt-1 text-sm text-gray-600 max-w-md">
        From sweet and salty bites to dreamy sips, everything we serve is a love letter from Sunda.
      </p>
    </div>
  );
};

export default Headline;
