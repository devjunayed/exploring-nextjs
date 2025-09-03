import React from "react";
import delay from "../../../../utils/delay";

const CardOne = async () => {
  // Suppose this is a server site component and needs some times to fetch
  await delay(5000);
  return  <div className="h-100 flex items-center justify-center w-100 border bg-blue-300 rounded-xl">CardOne</div>;
};

export default CardOne;
