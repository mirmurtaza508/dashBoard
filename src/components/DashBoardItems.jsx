import React, { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

const DashBoardItems = ({
  amount,
  profit,
  work,
  title,
  lastMonthProfit,
  color,
  icon,
}) => {
  const [isDark] = useContext(themeContext);
  console.log(isDark);
  return (
    <div className="bg-white-800 flex flex-grow  shadow-lg">
      <div
        className={`bg-white-800 flex-grow ${
          isDark ? "bg-gray text-white " : ""
        } max-w-6xl p-4 py-8`}
      >
        <h1>{title}</h1>
        <div className="flex flex-grow justify-between">
          <div className="flex">
            {" "}
            <h1 className="text-2xl font-bold"> ${amount}</h1>{" "}
            <p className="text-green-400 font-bold text-xl">+{profit}%</p>
          </div>
          <div>
            {work && (
              <span className="text-xl bg-green-900 text-green-400 p-2 py-1 rounded-lg">
                <i className="fa-solid fa-arrow-trend-up"></i>
              </span>
            )}
          </div>
        </div>
        <div>
          {work ? (
            <h6 className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              {work}
            </h6>
          ) : (
            <h6>{lastMonthProfit}% Since last month</h6>
          )}
        </div>
      </div>
      {icon && (
        <div
          className={`flex justify-center p-4 py-8 ${
            isDark ? "bg-gray " : " "
          }  items-center text-4xl`}
          style={{ color: color }}
        >
          <span
            className={` flex justify-center items-center p-3 ${
              color === "black" ? "bg-blue-500 rounded-full" : ""
            }`}
          >
            {icon}
          </span>
        </div>
      )}
    </div>
  );
};

export default DashBoardItems;
