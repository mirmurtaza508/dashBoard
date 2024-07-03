import React, { useContext, useState } from "react";
import "../App.css";
import DashBoardItems from "./DashBoardItems";
import GlassMorphicCard from "./Charts/LineChart";
import OrderStatus from "./OrderStatus";
import Message from "./Message";
import Portfolio from "./Portfolio";
import TodoList from "./TodoList";
import Visitors from "./Visitors";
import { themeContext } from "../contexts/themeContext";

const Dashboard = () => {
  const [isDark] = useContext(themeContext);
  const items = [
    {
      amount: 12.34,
      profit: 3.5,
      work: "Potential growth",
      id: crypto.randomUUID(),
    },
    {
      amount: 17.34,
      profit: 11,
      work: "Revenue current",
      id: crypto.randomUUID(),
    },
    {
      amount: 12.34,
      profit: -2.4,
      work: "Daily Income",
      id: crypto.randomUUID(),
    },
    {
      amount: 31.53,
      profit: 3.5,
      work: "Expense current",
      id: crypto.randomUUID(),
    },
  ];
  const projects = [
    {
      id: crypto.randomUUID(),
      icon: "fa-file-lines",
      title: "Admin Dashboard design",
      time: "15 minutes ago",
      improvement: "Broadcast web app mockup",
      tasks: 30,
      issues: 5,
    },
    {
      id: crypto.randomUUID(),
      icon: " fa-cloud-arrow-down",
      title: "Wordpress Development",
      time: "1 hour ago",
      improvement: "Upload new design",
      tasks: 23,
      issues: 5,
    },
    {
      id: crypto.randomUUID(),
      icon: " fa-clock",
      title: "Project meeting",
      time: "35 minutes ago",
      improvement: "New project discussion",
      tasks: 15,
      issues: 2,
    },
    {
      id: crypto.randomUUID(),
      icon: "fa-envelope-open",
      title: "Broadcast Mail",
      time: "55 minutes ago",
      improvement: "sent relese details to team",
      tasks: 27,
      issues: 4,
    },
  ];

  const profits = [
    {
      id: crypto.randomUUID(),
      title: "Revenue",
      amount: 32123,
      profit: 3.5,
      lastMonthProfit: 11.38,
      icon: <i className="fa-brands fa-codepen"></i>,
      color: "black",
    },
    {
      id: crypto.randomUUID(),
      title: "Sales",
      amount: 45850,
      profit: 8.3,
      lastMonthProfit: 9.61,
      icon: <i className="fa-solid fa-briefcase"></i>,
      color: "red",
    },
    {
      id: crypto.randomUUID(),
      title: "Purchase",
      amount: 2039,
      profit: 0,
      lost: 2.1,
      lastMonthProfit: 2.27,
      icon: <i className="fa-solid fa-display"></i>,
      color: "green",
    },
  ];
  const data = {
    labels: ["Transfer to Paypal", "Transfer to Stripe", "Other Expenses"],
    values: [236, 593, 371],
    colors: ["#FF6384", "#36A2EB", "#FFCE56"],
    hoverColors: ["#FF6384", "#36A2EB", "#FFCE56"],
  };

  const totalTransactions = data.values.reduce((acc, val) => acc + val, 1200);
  return (
    <div className="p-2  h-auto relative -z-10 flex gap-4 flex-col">
      <div className=" flex flex-wrap gap-4 justify-start ">
        {items.map((item) => {
          return (
            <DashBoardItems
              amount={item.amount}
              profit={item.profit}
              work={item.work}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="flex flex-start flex-wrap gap-8 ">
        <GlassMorphicCard data={data} totalTransactions={totalTransactions} />
        <div
          className={`p-4 flex-1  sm:w-full ${
            isDark ? "bg-gray" : "bg-white"
          }  rounded-lg border border-gray-500`}
        >
          <div className="flex justify-between items-center px-6 ">
            <h2
              className={`text-xl font-bold ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Open Projects
            </h2>
            <span className={`${isDark ? "text-gray-400" : "text-gray-700"}`}>
              Your data status
            </span>
          </div>
          {projects.map((project) => (
            <div
              className="flex gap-4 items-center shadow-lg m-4 p-2 "
              key={project.id}
            >
              <span className="w-10 h-10 flex justify-center items-center px-4 py-3 bg-blue-500">
                <i className={`fa-solid ${project.icon}  text-black`}></i>
              </span>
              <div className="flex flex-1 flex-col justify-center ">
                <div className="flex  items-center flex-1 justify-between flex-wrap">
                  <h2
                    className={`text-sm font-bold ${
                      isDark ? "text-white" : "text-black"
                    } md:text-xl`}
                  >
                    {project.title}
                  </h2>
                  <span
                    className={`${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    {project.time}
                  </span>
                </div>
                <div className="flex  items-center flex-1 justify-between flex-wrap">
                  <div
                    className={`${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    {project.improvement}
                  </div>
                  <span
                    className={`${isDark ? "text-gray-400" : "text-gray-700"}`}
                  >
                    {project.tasks} Tasks, {project.issues} Issues
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-4  flex-grow">
        {profits.map((profit) => {
          return (
            <DashBoardItems
              title={profit.title}
              key={profit.id}
              amount={profit.amount}
              profit={profit.profit}
              lastMonthProfit={profit.lastMonthProfit}
              icon={profit.icon}
              color={profit.color}
            />
          );
        })}
      </div>
      <div
        className={`overflow-hidden p-4  ${
          isDark ? "text-white bg-gray" : "text-black bg-white"
        }`}
      >
        <OrderStatus />
      </div>
      <div
        className={`w-full flex-grow gap-4 flex flex-wrap lg:flex-nowrap ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <Message />
        <Portfolio />
        <TodoList />
      </div>
      <div>
        <Visitors />
      </div>
      <div
        className={`flex justify-around flex-wrap my-8 ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <h1>Copyright © 2024 . All rights reserved.</h1>
        <span>made with ❤️ mir murtaza bashir</span>
      </div>
    </div>
  );
};

export default Dashboard;
