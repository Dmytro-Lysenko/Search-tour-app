import Link from "next/link";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import classes from "./SideBar.module.css";
import { IconContext } from "react-icons";

function SideBar() {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  const isActive = classes["nav-menu-active"];
  const nonActive = classes["nav-menu"];

  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <div className={classes.navbar}>
          <Link href="#" passHref className={classes.test}>
            <div className={classes.test}>
              <FaIcons.FaBars onClick={showSideBar} />
            </div>
          </Link>
        </div>
        <nav
        // className={isActive}
          className={sideBar ? classes["nav-menu-active"] : classes["nav-menu"]}
        >
          <ul className="nav-menu-items" onClick={showSideBar}>
            <li className={classes["navbar-toggle"]}>
              <Link href="#" passHref className="menu-bars">
                <AiIcons.AiOutlineCloseCircle />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={classes[item.className]}>
                  <Link href={item.path} passHref>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideBar;
