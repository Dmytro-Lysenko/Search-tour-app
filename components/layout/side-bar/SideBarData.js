import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Add new tour",
    path: "/new-tour",
    icon: <AiIcons.AiFillCreditCard />,
    className: "nav-text",
  },
  {
    title: "Cart",
    path: "/cart",
    icon: <AiIcons.AiFillDatabase />,
    className: "nav-text",
  },
];
