import React from "react";

const Card = ({ title, value, icon, bgColor, textColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md ${bgColor} ${textColor}`}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-base items-center font-semibold">{title}</h4>
          <p className="text-xl font-bold">{value}</p>
        </div>
        <div className="text-3xl">{icon}</div>
      </div>
    </div>
  );
};

export default Card;
