import React from "react";

const Key = () => {
  return (
    <div className="px-4">
      <div className="flex bg-white px-[42px] py-[32px] space-x-3 border border-border rounded-md">
        <div className="bg-green-500 h-8 w-8 rounded-full">
          <p className="text-white px-3 pt-2 text-[13px]">3</p>
        </div>
        <div className="self-center w-full">
          <p>
            <span className="text-[14px] text-color5">
              Six KEY company events
            </span>{" "}
            <span className="text-color6">*</span>
          </p>
          <p className="text-[14px] text-color5 py-1">
            Please specify a month and provide short description of a key event
            during your reporting period
          </p>
          <div className="space-y-2">
            <div className="flex space-x-4">
              
              <select
                id="month"
                className="w-56 px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md"
              >
                <option selected>January 2022</option>
                <option value="US">January 2022</option>
                <option value="CA">January 2022</option>
                <option value="FR">January 2022</option>
                <option value="DE">January 2022</option>
              </select>
              <div className="w-full px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md">Description</div>
            </div>
            <div className="flex space-x-4">
              
              <select
                id="month"
                className="w-56 px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md"
              >
                <option selected>January 2022</option>
                <option value="US">January 2022</option>
                <option value="CA">January 2022</option>
                <option value="FR">January 2022</option>
                <option value="DE">January 2022</option>
              </select>
              <div className="w-full px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md">Description</div>
            </div>
            <div className="flex space-x-4">
              
              <select
                id="month"
                className="w-56 px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md"
              >
                <option selected>January 2022</option>
                <option value="US">January 2022</option>
                <option value="CA">January 2022</option>
                <option value="FR">January 2022</option>
                <option value="DE">January 2022</option>
              </select>
              <div className="w-full px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md">Description</div>
            </div>
            <div className="flex space-x-4">
              
              <select
                id="month"
                className="w-56 px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md"
              >
                <option selected>January 2022</option>
                <option value="US">January 2022</option>
                <option value="CA">January 2022</option>
                <option value="FR">January 2022</option>
                <option value="DE">January 2022</option>
              </select>
              <div className="w-full px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md">Description</div>
            </div>
            <div className="flex space-x-4">
              
              <select
                id="month"
                className="w-56 px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md"
              >
                <option selected>January 2022</option>
                <option value="US">January 2022</option>
                <option value="CA">January 2022</option>
                <option value="FR">January 2022</option>
                <option value="DE">January 2022</option>
              </select>
              <div className="w-full px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md">Description</div>
            </div>
            <div className="flex space-x-4">
              
              <select
                id="month"
                className="w-56 px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md"
              >
                <option selected>January 2022</option>
                <option value="US">January 2022</option>
                <option value="CA">January 2022</option>
                <option value="FR">January 2022</option>
                <option value="DE">January 2022</option>
              </select>
              <div className="w-full px-2.5 py-2 text-[14px] border border-border2 bg-gray-200 rounded-md">Description</div>
            </div>
          </div>
          <p className="text-[14px] text-color8 pt-6 pb-4">Comments</p>
          <textarea
            className="w-full border border-border rounded-md p-4 text-[14px]"
            placeholder="Write your comment here"
          ></textarea>

          <div className="flex justify-between text-[12px] text-color7">
            <p>
              
            </p>
            <p>Maximum 1000 character </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Key;
