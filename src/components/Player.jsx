"use client"

import Lottie from "react-lottie";
import animationData from "@/animations/building.json"

const Player = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <Lottie options={defaultOptions} height={400} width={400} style={{maxHeight:"90vw",maxWidth:"90vw"}} />
  )
}

export default Player