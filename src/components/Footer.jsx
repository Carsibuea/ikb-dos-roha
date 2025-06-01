// import React from "react";

const footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-300 shadow p-4 mt-4">
      <div className="container mt-4">
        <p className="text-center font-bold text-lg md:text-xl max-w-3xl mx-auto mt-2 text-black">
          &copy; Copyright <span> {year}</span> <span> IKB DOSROHA. All rights reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default footer;
