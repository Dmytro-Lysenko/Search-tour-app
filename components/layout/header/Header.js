import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import HeaderCartButton from "../HeaderCartButton";

import classes from "./Header.module.css";
import FavoriteContext from "../../store/favorites-context";
import CartContext from "../../store/cart-context";
import LoadingIndicator from "../../ui/LoadingIndicator";

function Header() {
  const [sideBar, setSideBar] = useState(true);
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const shoSideBarHandler = () => setSideBar(!sideBar);
  const navClass = `${classes["main-nav"]} ${sideBar ? " " : classes.active} `;

  const toogleThemeHandler = (theme) => {
    setTheme(theme);
  };

  const loadingHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  };

  return (
    <div>
      {isLoading && <LoadingIndicator />}
      <div className={classes.github}>
        Currently in development
        <a
          href="https://github.com/Dmytro-Lysenko/Search-tour-app"
          rel="noreferrer"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <nav className={classes.container}>
        <ul className={navClass} onClick={shoSideBarHandler}>
          <li>
            <AiIcons.AiOutlineCloseCircle className={classes.icons} />
          </li>
          <li onClick={loadingHandler}>
            <FaIcons.FaHome className={classes.icons} />
            <Link href="/">All Tours</Link>
          </li>
          <li>
            <MdIcons.MdFavorite className={classes.icons} />
            <Link href="/favorites">Favorites</Link>
          </li>
          <li className={classes.icons}>
            <FaIcons.FaShoppingCart className={classes.icons} />
            <Link href="/cart">Cart</Link>
          </li>
          <HeaderCartButton />
          <li>
            <IoIcons.IoIosAddCircleOutline className={classes.icons} />
            <Link href="/new-tour">Add tour</Link>
          </li>
          <li onClick={loadingHandler}>
            <FaIcons.FaListAlt className={classes.icons} />
            <Link href="/booked-tours">Booked tours</Link>
          </li>
        </ul>
        <div className={classes["logo-section"]}>
          <h1>React Tours App</h1>

          <div className={classes.theme}>
            <div
              className={classes["theme-icon"]}
              onClick={() => toogleThemeHandler("dark")}
            >
              <FaIcons.FaMoon />
            </div>
            <div
              className={classes["theme-icon"]}
              onClick={() => toogleThemeHandler("light")}
            >
              <FaIcons.FaSun />
            </div>
          </div>

          <li>
            <FaIcons.FaBars
              className={classes.icons}
              onClick={shoSideBarHandler}
            />
          </li>
        </div>
      </nav>
    </div>
  );
}

export default Header;
