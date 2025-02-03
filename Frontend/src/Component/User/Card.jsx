import React from "react";

const Card = ({ title, value, icon, bgColor, textColor }) => {
  return (
    <div className={`p-4 rounded-lg  shadow-md ${bgColor} ${textColor} flex flex-col items-center`}>
      {/* Icon at the top */}
      <div className="flex justify-center mb-2">
        {icon}
      </div>

      {/* Title in the center */}
      <h4 className="text-base font-semibold text-center mb-2">{title}</h4>

      {/* Value at the bottom */}
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
