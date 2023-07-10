import React from "react";
import Title from "../CommonComponent/Title/Title";

function About() {
  const title = "About us";
  return (
    <>
      <Title title={title} className={"bg-black bg-opacity-90 px-3 py-4"} />
      <h1 className="text-white bg-slate-800">
        If you need to use a one-off font-size value that doesn’t make sense to
        include in your theme, use square brackets to generate a property on the
        fly using any arbitrary value.
      </h1>
    </>
  );
}

export default About;
