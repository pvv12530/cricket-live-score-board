import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MatchTypecard from '../MatchTypecard';
import data from "../../Data/Score.json";

export default function Test() {

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
console.log(data.data);
var liveMatch;

const getFilteredItem = (item) => {
  return (item.filter((val) => {
    if (val.matchType === "test" ) {
      return true;
    }
  }));
};

if (Match) {
  //   filter to get live matches from all matches
  console.log("hi")
  liveMatch = getFilteredItem(Match).reverse();
} else {
  console.log("hi*/*9846")
  liveMatch = getFilteredItem(data.data).reverse();
}

console.log(liveMatch);


  return (
    <div className=' mx-auto grid grid-cols-2 overflow-scroll p-1 h-[250px]'>
       {liveMatch.map((value, key) => {
          return (
            <div>
              <MatchTypecard data={value} />
            </div>
          );
        })}
    
  </div>
  )
}
