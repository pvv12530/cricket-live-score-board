import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Navigate, useNavigate } from "react-router-dom";

export default function Title() {
  const history = useNavigate();

  const handleback = () => {
    history(-1);
  };
  return (
    <>
      <div>
        <div className="bg-[#ef233d] flex h-[30px] justify-around rounded-b-lg">
          <p className="text-white font-bold p-1 text-[15px]">
            CricScore Master
          </p>
        </div>
        <div
          className="absolute top-[1px] p-1 m-1 rounded-full text-white "
          onClick={handleback}
        >
          <FiChevronLeft />
        </div>
      </div>
    </>
  );
}
