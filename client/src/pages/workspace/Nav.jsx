import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div className="mt-3 ml-3 mb-3 text-left font-semibold text-[13px] mx-auto w-[90%]">
        <div>
          <ul className="flex justify-between ">
            <div className="flex justify-between ">
              <li>
                <NavLink className="m-1" to="/">
                  T20
                </NavLink>
              </li>
              <li>
                <NavLink className="m-1 ml-3" to="/Odi">
                  Odi
                </NavLink>
              </li>
              <li>
                <NavLink className="m-1 ml-3" to="/Test">
                  Test
                </NavLink>
              </li>
            </div>
            <div className="flex justify-between ">
              <li>
                <NavLink className="m-1" to="/favourite">
                  Favourite
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
