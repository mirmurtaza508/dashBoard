import React, { useState } from "react";
import client1Img from "../assets/client1.png";
const OrderStatus = () => {
  const [isChecked, setIsChecked] = useState(false);
  const orders = [
    {
      isCheck: false,
      img: client1Img,
      clientName: "mir murtaza",
      orderNo: 2312,
      productCost: 14500,
      project: "Dashboard",
      paymentMode: "Creadit card",
      date: "01 july 2024",
      paymentStatus: "Approved",
    },
    {
      isCheck: false,
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/images/faces/face2.jpg",
      clientName: "Estella Bryan",
      orderNo: 2312,
      productCost: 2500,
      project: "Website",
      paymentMode: "Cash on delivered",
      date: "20 june 2024",
      paymentStatus: "Pending",
    },
    {
      isCheck: false,
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/images/faces/face5.jpg",
      clientName: "Lucy Abbott",
      orderNo: 2312,
      productCost: 1400,
      project: "App design",
      paymentMode: "Credit card",
      date: "23 june 2024",
      paymentStatus: "Rejected",
    },
    {
      isCheck: false,
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/images/faces/face3.jpg",
      clientName: "Peter Gill",
      orderNo: 2312,
      productCost: 1450,
      project: "Development",
      paymentMode: "Online Payment",
      date: "25 june 2024",
      paymentStatus: "Approved",
    },
    {
      isCheck: false,
      img: "https://demo.bootstrapdash.com/corona-new/themes/assets/images/faces/face4.jpg",
      clientName: "Sallie Reyes",
      orderNo: 2312,
      productCost: 4500,
      project: "Website",
      paymentMode: "Credit card",
      date: "29 june 2024",
      paymentStatus: "Approved",
    },
  ];
  return (
    <div className="h-full p-2 overflow-hidden">
      <h1 className="px-2 font-semibold">Order status</h1>
      <div className="overflow-x-scroll  w-full flex-grow">
        <table className="md:w-full w-128">
          <thead className="w-full ">
            <tr className="border-b border-b-gray-200 ">
              <th className="p-2 text-left font-semibold ">
                <input
                  type="checkbox"
                  name=""
                  onChange={() =>
                    setIsChecked((prevState) => (prevState ? false : true))
                  }
                />
              </th>
              <th className="p-2  text-left font-semibold  ">Client Name</th>
              <th className="p-2 text-left font-semibold w-13">Order No</th>
              <th className="p-2 text-left font-semibold w-13">Product Cost</th>
              <th className="p-2 text-left font-semibold w-13">Payment Mode</th>
              <th className="p-2 text-left font-semibold w-13">Start Date</th>
              <th className="p-2 text-left font-semibold w-13">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              return (
                <tr
                  className="border-b border-b-gray-200"
                  key={order.clientName}
                >
                  <td className="p-2 flex items-center">
                    <div>
                      <input type="checkbox" name="" id="checkBox" />
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="flex items-center">
                      <img
                        src={order.img}
                        alt=""
                        className="w-10 h-10 object-cover rounded-full mr-2"
                      />
                      <span className="font-semibold">{order.clientName}</span>
                    </div>
                  </td>
                  <td className="p-2 font-semibold">0{order.orderNo}</td>
                  <td className="p-2 font-semibold">
                    ${order.productCost.toLocaleString("en-In")}
                  </td>
                  <td className="p-2 font-semibold">{order.paymentMode}</td>
                  <td className="p-2 font-semibold">{order.date}</td>
                  <td className="p-2 font-semibold">
                    <span
                      className="py-2 px-4 rounded border w-10"
                      style={{
                        width: "4rem",
                        border:
                          order.paymentStatus === "Approved"
                            ? "2px solid green"
                            : "" || order.paymentStatus === "Pending"
                            ? "2px solid orange"
                            : "" || order.paymentStatus === "Rejected"
                            ? "2px solid red"
                            : "",
                        color:
                          order.paymentStatus === "Approved"
                            ? "green"
                            : "" || order.paymentStatus === "Pending"
                            ? "orange"
                            : "" || order.paymentStatus === "Rejected"
                            ? "red"
                            : "",
                      }}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderStatus;
