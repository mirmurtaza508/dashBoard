import React, { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

const Message = () => {
  const arr = [1, 2, 3, 4, 5];
  const [isDark] = useContext(themeContext);
  return (
    <div
      className={` w-full p-4 flex-grow border flex flex-col  ${
        isDark ? "bg-gray" : "bg-white"
      }`}
    >
      <div className="flex h-10 items-center justify-between">
        <h1>Messages</h1>
        <span>Veiw all</span>
      </div>
      <div>
        {arr.map((ele) => (
          <div className="flex items-center border-b py-4 gap-4" key={ele}>
            <img
              src="https://demo.bootstrapdash.com/corona-new/themes/assets/images/faces/face6.jpg"
              alt=""
              className="w-11 h-11 rounded-full"
            />
            <div>
              <div className="flex justify-between">
                <h1>Leonard</h1>
                <span>5 minutes ago</span>
              </div>
              <p>Well, it seems to be working now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Message;
