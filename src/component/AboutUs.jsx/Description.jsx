import React from "react";
import {BsFillFileEarmarkTextFill} from "react-icons/bs"
 
const Description = () => {
  return (
    <div className="px-4">
      <div className="flex bg-white px-[42px] py-[32px] space-x-3 border border-border rounded-md">
        <div className="bg-green-500 h-8 w-8 rounded-full">
          <p className="text-white px-3 pt-2 text-[13px]">1</p>
        </div>
        <div className="self-center">
          <p>
            <span className="text-[14px] text-color5">Company Description</span>{" "}
            <span className="text-color6">*</span>
          </p>
          <p className="text-[14px] text-color5 py-1">
            Provide a short introduction of the company for the stakeholders.
            You can drop establishment date, main activities, the sector(s) in
            which it is active, main values and etc.
          </p>
          <p className="text-[14px] text-color5 pb-6">
            {" "}
            Note: Sectors can be identified according to categories, such as the
            public or private sector; or industry-specific categories.
          </p>
          <textarea
            className="w-full border border-border rounded-md p-4 text-[14px]"
            placeholder="Write Here"
          ></textarea>

          <div className="flex justify-between text-[12px] text-color7">
            <p className="flex space-x-1"> <BsFillFileEarmarkTextFill/> <span>Click here to see the sample answer</span></p>
            <p>Maximum 1000 character </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
