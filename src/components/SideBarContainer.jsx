import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { themeContext } from "../contexts/themeContext";
// import useLocalStorage from "../../hook/useLocalStorage";

const SidebarContext = createContext();
export default function SideBarContainer({ children }) {
  const [expanded, setExpanded] = useState(false);
  const [isDark, setIsDark] = useContext(themeContext);

  return (
    <aside className="h-screen" style={{ background: "green" }}>
      <nav
        className={`h-full flex flex-col  border-r shadow-sm ${
          isDark ? "bg-gray text-white" : "bg-white text-black"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://media.licdn.com/dms/image/D4E16AQFxq5R_f49TOQ/profile-displaybackgroundimage-shrink_200_800/0/1716308061700?e=2147483647&v=beta&t=gw-ZPCMLS3U_FFVfkSxfHTPkBVAxFjAqUu6vJYl9gaQ"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQt-hh6f0E3xCIM4nObBXIepPRcA5bWajMg&s"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">mir Murtaza</h4>
              <span className="text-xs text-gray-600">rrahi2473@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SideBarItem({ icon, text, alert, path, active }) {
  const { expanded, setExpanded } = useContext(SidebarContext);
  return (
    <NavLink
      onClick={() => {
        setExpanded(false);
      }}
      className={({ isActive }) => `
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }
      `}
      to={path}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </NavLink>
  );
}
