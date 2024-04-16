"use client"
import React from "react";
import { useRouter } from "next/navigation";

const BackNav: React.FC<any> = () => {
  const route = useRouter();

  const handleBack = () => {
    route.push('/' );
  };
  return (
    <div>
      <button
        name="Back"
        onClick={() => handleBack()}
        className="pbg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default BackNav;
