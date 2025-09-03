import React from "react";

const CardLoading = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center items-center w-100 h-100 border bg-gray-400 rounded-xl">
      {text}
    </div>
  );
};

export default CardLoading;
