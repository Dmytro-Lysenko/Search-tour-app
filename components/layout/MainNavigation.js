import classes from "./MainNavigation.module.css";

import Link from "next/link";
import HeaderCartButton from "./HeaderCartButton";
import { useRouter } from "next/router";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";

function MainNavigation(props) {
  // const router = useRouter();
  const [navBar, setNavBar] = useState(false);

  const showNavBar = () => setNavBar(!navBar);

  return (
    <IconContext.Provider value={{ color: "red" }}>
      <header className={classes.header}>
        <div className={classes.bars}>
          <Link href="#" passHref>
            <div>
              <FaIcons.FaBars onClick={showNavBar} />
            </div>
          </Link>
        </div>
        <nav>
          <ul className={classes.nav} onClick={showNavBar}>
            <div className={classes.logo}>React Tours App</div>
            <li>
              <Link href="#" passHref>
                <div className={classes.bars}>
                  <AiIcons.AiOutlineCloseCircle />
                </div>
              </Link>
            </li>
            <li>
              <div className={navBar ? classes.navActive : classes.bars}>
                <FaIcons.FaHome />
              </div>
              <Link href="/">All Tours</Link>
            </li>
            <li>
              <div className={classes.bars}>
                <MdIcons.MdFavorite />
              </div>
              <Link href="/favorites">Favorites</Link>
            </li>
            <HeaderCartButton />
            <li>
              <div className={classes.bars}>
                <IoIcons.IoIosAddCircleOutline />
              </div>
              <Link href="/new-tour">Add New Tour</Link>
            </li>
            <li>
              <div className={classes.bars}>
                <FaIcons.FaClipboardList />
              </div>

              <Link href="/booked-tours">Booked tours</Link>
            </li>
          </ul>
        </nav>
      </header>
    </IconContext.Provider>
  );
}

export default MainNavigation;
