import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MatchCard from "./MatchCard";

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
  const getFilteredItem = (item) => {
    return item.filter((val) => {
      if (val.ms == "live") {
        return true;
      }
    });
  };

  const liveMatch = getFilteredItem(Match);
  console.log(liveMatch);

  //filter to get live matches from all matches

  return <div className="flex overflow-scroll h-[150px] ">
    
    
    
    {liveMatch.map((value, key) => {
      return <div ><MatchCard data={value}/></div>;
    })}
  </div>;
}
