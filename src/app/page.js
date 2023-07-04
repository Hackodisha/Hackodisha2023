"use client";
import Player from "@/components/Player";
import { useState } from "react";
import Sponsor from "./Swasti/Sponsor";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const headingClicked = () => {
    setCounter(counter + 1);
  };
  if (counter == 3) {
    document.getElementById("rocket").classList.add("animate-spin");
  }
  
  const handleStop = () => {
    setCounter(0);
    document.getElementById("rocket").classList.remove(["animate-spin"]);
  };

  return (
    <Sponsor/>
    
  );
}
