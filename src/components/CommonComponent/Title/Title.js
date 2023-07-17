import React from "react";

function Title({ title, className }) {
  return (
    <div className={`flex justify-start ${className}`}>
      <span className={`flex flex-col justify-center items-center`}>
        <div className="font-gvonz font-light text-[#07D6D1] leading-normal text-[28px] md:text-[40px]">
          {title}
        </div>
        <div className="md:pt-2 basis-[6px] w-[92%] bg-[#0C9794] relative -top-1 md:top-0"></div>
      </span>
    </div>
  );
}

export default Title;
