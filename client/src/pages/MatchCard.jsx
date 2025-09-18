import React from "react";

export default function MatchCard({ data }) {
  console.log(data);
  const t1img = data.t1img;
  const t2img = data.t2img;
  var t1 = data.t1.slice(data.t1.indexOf("[") + 1, data.t1.indexOf("]"));
  var t2 = data.t2.slice(data.t2.indexOf("[") + 1, data.t2.indexOf("]"));

  return (
    <div className="w-[150px] p-2 h-[103px] m-1 mt-5 ml-3 bg-white rounded-md">
      <div>
        <div className="flex justify-between">
          <div className="text-[9.5px] text-left font-medium text-[#ff2222]">
            *live
          </div>
          <div className="text-[9.5px] text-right font-medium text-[#000000]">
            {data.matchType}
          </div>
        </div>

        <div className="flex justify-between m-1">
          <div className="flex justify-between">
            <div
              className="w-[25px] h-[17px] bg-cover bg-center mr-[2px]"
              style={{ backgroundImage: `url(${t1img})` }}
            ></div>
            <div className="text-[11px] font-medium">{t1}</div>
          </div>
          <div className="text-[11px] font-medium text-[#8c8c8c] ">
            {data.t1s}
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between m-1">
          <div className="flex justify-between">
            <div
              className="w-[25px] h-[17px] bg-cover bg-center mr-[2px]"
              style={{ backgroundImage: `url(${t2img})` }}
            ></div>
            <div className="text-[11px] font-medium">{t2}</div>
          </div>
          <div className="text-[11px] font-medium text-[#8c8c8c] ">
            {data.t2s}
          </div>
        </div>
      </div>
      <div className="text-[9.5px] font-medium mt-[10px] text-[#8c8c8c] ">
        {data.status}
      </div>
    </div>
  );
}
