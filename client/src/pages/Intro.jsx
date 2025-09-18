import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MatchCard from "./MatchCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function Intro() {
  const url =
    "https://api.cricapi.com/v1/cricScore?apikey=049fa66d-c03b-4270-84c5-9169bdfda9c5";

  const [Match, setMatch] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        AccessControlAllowMethods: "GET, DELETE, HEAD, OPTIONS",
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
        AccessControlAllowOrigin: "*",

        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        setMatch(response.data.data);
      });
  }, []);

  console.log(Match);

  //filter to get live matches from all matches
//   const getFilteredItem = (item) => {
//     return item.filter((val) => {
//       if (val.ms === "live") {
//         return true;
//       }
//     });
//   };

  const liveMatch = [1,2,3,4,5,6,7,8,9];
//   const liveMatch = getFilteredItem(Match);
  console.log(liveMatch);

  //filter to get live matches from all matches

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 150;
}
const scrollRight = () => {
    document.getElementById("content").scrollLeft += 150;
}

  return (
    <div className="relative">
      <div className="absolute top-[-25px] right-[10px]">
        <button onClick={scrollLeft} className="p-1 m-1 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-1 m-1 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div id="content" className="flex overflow-scroll h-[150px] overflow-x-auto scroll-smooth  scrollbar-hide ">
        {liveMatch.map((value, key) => {
          return (
            <div>
              <MatchCard data={value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
