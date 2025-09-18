import React from "react";
import { Link } from "react-router-dom";

export default function MatchTypecard({ data }) {
  console.log(data);
  const t1img = data.t1img;
  const t2img = data.t2img;
  var t1 = data.t1.slice(data.t1.indexOf("[") + 1, data.t1.indexOf("]"));
  var t2 = data.t2.slice(data.t2.indexOf("[") + 1, data.t2.indexOf("]"));

  return (
    <div className="w-[133px] p-2 h-[90px] m-1 mt-5  bg-white rounded-md ">
      <Link
        to={{
          pathname: "/matchscore",
         
        }}
        state={`${data.id}`}
      >
        <div>
          <div className="flex justify-between m-1">
            <div className="flex justify-between">
              <div
                className="w-[20px] h-[12px] mt-[2px] bg-cover bg-center mr-[2px]"
                style={{ backgroundImage: `url(${t1img})` }}
              ></div>
              <div className="text-[11px] font-medium">{t1}</div>
            </div>
            <div className="text-[10px] mt-[2px] font-medium text-[#8c8c8c] ">
              {data.t1s}
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between m-1">
            <div className="flex justify-between">
              <div
                className="w-[20px] h-[12px] mt-[2px] bg-cover bg-center mr-[2px]"
                style={{ backgroundImage: `url(${t2img})` }}
              ></div>
              <div className="text-[11px] font-medium">{t2}</div>
            </div>
            <div className="text-[10px] mt-[2px] font-medium text-[#8c8c8c] ">
              {data.t2s}
            </div>
          </div>
        </div>
        <div className="text-[9.5px] font-medium mt-[10px] text-[#8c8c8c] ">
          {data.status}
        </div>
      </Link>
    </div>
  );
}
