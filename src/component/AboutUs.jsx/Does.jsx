import React from 'react'


const Does = () => {
  return (
    <div className="px-4">
    <div className="flex bg-white px-[42px] py-[32px] space-x-3 border border-border rounded-md">
      <div className="bg-green-500 h-8 w-8 rounded-full">
        <p className="text-white px-3 pt-2 text-[13px]">4</p>
      </div>
      <div className="self-center">
        <p>
          <span className="text-[14px] text-color5">Does the reporting period for organization's financial reporting align with the period for its sustainability reporting. Please select one option: </span>{" "}
          <span className="text-color6">*</span>
        </p>
        <div>
        <div className="flex items-center mt-4 space-x-1">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                id="default-radio-1"
                disabled
                type="text"
                value="Yes"
                className="text-[14px] "
              />
              
            </div>
        <div className="flex items-center mb-4 space-x-1">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                id="default-radio-1"
                disabled
                type="text"
                value="No"
                className="text-[14px] "
              />
              
            </div>
        </div>
        <p className="text-[14px] text-color8 pt-6 pb-4 font-bold">Please explain the reason</p>

        <textarea
          className="w-full border border-border rounded-md p-4 text-[14px]"
          placeholder="Write your comment  here"
        ></textarea>

        <div className="flex justify-between text-[12px] text-color7">
            <p></p>
          <p>Maximum 1000 character </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Does