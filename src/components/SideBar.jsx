import React, { useCallback, useContext } from "react";
import SideBarContainer, { SideBarItem } from "./SideBarContainer";
import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  LifeBuoyIcon,
  PackageCheck,
  Receipt,
  SettingsIcon,
  UserCircle2,
} from "lucide-react";
import { themeContext } from "../contexts/themeContext";
const SideBar = ({ setIsDarkApp }) => {
  const [isDark, setIsDark] = useContext(themeContext);
  const handleClick = () => {
    return (
      setIsDark((prevState) => (prevState ? false : true)),
      setIsDarkApp((prevState) => (prevState ? false : true))
    );
  };

  return (
    <aside className="fixed h-screen  z-20" style={{ background: "black" }}>
      <SideBarContainer>
        <SideBarItem
          icon={<LayoutDashboard size={20} />}
          text="DashBoard"
          path={"/"}
          alert
          isActive={(isAcitve) => console.log(isAcitve)}
        />
        <SideBarItem
          icon={<BarChart3 size={20} />}
          text="Statistics"
          path={"/Statistics"}
        />
        <SideBarItem
          icon={<UserCircle2 size={20} />}
          text="Users"
          path={"/Users"}
        />
        <SideBarItem
          icon={<Boxes size={20} />}
          text="Inventory"
          path={"/Inventory"}
        />
        <SideBarItem
          icon={<PackageCheck size={20} />}
          text="Orders"
          alert
          path={"Orders"}
        />{" "}
        <SideBarItem
          icon={<Receipt size={20} />}
          text="Billings"
          path={"Billings"}
        />
        <hr className="my-3" />
        <SideBarItem
          icon={<SettingsIcon size={20} />}
          text="Settings"
          path={"Settings"}
          // active
        />{" "}
        <SideBarItem
          icon={<LifeBuoyIcon size={20} />}
          text="Help"
          path={"Help"}
          // active
        />
        <div className="pl-3">
          <button onClick={handleClick}>
            {isDark ? (
              <i class="fa-solid fa-sun text-xl"></i>
            ) : (
              <i class="fa-solid fa-moon text-xl"></i>
            )}
          </button>
        </div>
      </SideBarContainer>
    </aside>
  );
};

export default SideBar;
