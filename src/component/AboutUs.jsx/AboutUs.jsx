import React from "react";
import Description from "./Description";
import Perfomence from "./Perfomence";
import Key from "./Key";
import Does from "./Does";

const AboutUs = () => {
  return (
    <div className="space-y-4">
      <div className=" text-color4  text-[26px] font-bold px-8 py-3 ">
        <p>General provisions</p>
      </div>
      <Description />
      <Perfomence/>
      <Key/>
      <Does/>
      <div className="flex justify-between">
        <div></div>
        <div className="text-[14px] pr-10 space-x-6">
        <button className='border border-black rounded-md pt-2 pb-2 pl-4 pr-4'>Cancel</button>
        <button className='bg-gray-300 rounded-md pt-2 pb-2 pl-4 pr-4'>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
