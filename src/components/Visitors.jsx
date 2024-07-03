import React, { useContext } from "react";
import { themeContext } from "../contexts/themeContext";

const Visitors = () => {
  const [isDark] = useContext(themeContext);
  const visitorsData = [
    {
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/vendors/flag-icon-css/flags/4x3/us.svg",
      title: "USA",
      visitors: 1500,
      percent: 56.35,
    },
    {
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/vendors/flag-icon-css/flags/4x3/de.svg",
      title: "Germany",
      visitors: 800,
      percent: 33.25,
    },
    {
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/vendors/flag-icon-css/flags/4x3/au.svg",
      title: "Australia",
      visitors: 760,
      percent: 15.45,
    },
    {
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/vendors/flag-icon-css/flags/4x3/gb.svg",
      title: "United Kingdom",
      visitors: 450,
      percent: 25.0,
    },
    {
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/vendors/flag-icon-css/flags/4x3/ro.svg",
      title: "Romania",
      visitors: 620,
      percent: 10.35,
    },
    {
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/vendors/flag-icon-css/flags/4x3/br.svg",
      title: "Brazil",
      visitors: 230,
      percent: 75.0,
    },
  ];
  return (
    <div
      className={`p-5 shadow-lg flex flex-col justify-center gap-4 ${
        isDark ? "text-white bg-gray" : "text-black bg-white"
      }`}
    >
      {" "}
      <h1 className="text-xl font-bold">Visitors By Countries</h1>
      <div className=" w-full flex flex-wrap center gap-4">
        <div className=" lg:w-2/5 flex-grow overflow-x-scroll">
          <table className="w-101  md:w-full ">
            <tbody>
              {visitorsData.map((visitorData) => (
                <tr
                  className="border-b border-gray-200 h-11  "
                  key={visitorData.title}
                >
                  <td>
                    <img src={visitorData.img} alt="" className="h-8 w-8" />
                  </td>
                  <td>{visitorData.title}</td>
                  <td>{visitorData.visitors}</td>
                  <td>{visitorData.percent}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-grow overflow-hidden  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d56606485.35134511!2d68.05401209999945!3d30.008567619515105!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719917425207!5m2!1sen!2sin"
            width="500"
            height="299"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Visitors;
