"use client";
import React, { useEffect } from "react";

const Rain = () => {
  useEffect(() => {
    const rainContainer = document.querySelector("#rain-container");
    function meteor() {
      let amount = 50;
      let count = 0;
      while (count < amount) {
        let drop = document.createElement("i");
        let size = 2;
        let posX = Math.floor(Math.random() * window.innerWidth *2);
        let delay = Math.random() * -10;
        let duration = Math.random() * 2;
        drop.style.width = `${0.1 + size}px`;
        drop.style.left = `${posX}px`;
        drop.style.animationDelay = `${delay}s`;
        drop.style.animationDuration = `${1 + duration}s`;
        rainContainer.appendChild(drop);
        count++;
      }
    }
    meteor();
  }, []);

  return (
    <div
      id="rain-container"
      className="z-40 absolute top-0 w-full scale-150 h-[150vh]"
    ></div>
  );
};

export default Rain;
