import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { IconContext } from "react-icons";
import HeaderCartButton from "../HeaderCartButton";
import CartIcon from "../../ui/CartIcon";
import classes from "./Header.module.css";
import AddModal from "../AddModal";
import FavoriteContext from "../../store/favorites-context";
import CartContext from "../../store/cart-context";

function Header() {
  const [sideBar, setSideBar] = useState(true);
  const favCtx = useContext(FavoriteContext);
  const cartCtx = useContext(CartContext);
  const [showCart, setShowCart] = useState();
  const [showFavorites, setShowFavorites] = useState();
  console.log(cartCtx.message);
  console.log(cartCtx.message);

  useEffect(() => {
    if (
      favCtx.message === "You have deleted tour from favorites!" &&
      cartCtx.message === "You have added tour to cart!"
    ) {
      setShowFavorites(false);
      setShowCart(true);
    }

    if (
      favCtx.message === "You have added tour to favorites!" &&
      cartCtx.message === "You have deleted tour from cart!"
    ) {
      setShowFavorites(true);
      setShowCart(false);
    }
  }, [cartCtx.message, favCtx.message]);

  const shoSideBarHandler = () => setSideBar(!sideBar);
  const navClass = `${classes["main-nav"]} ${sideBar ? " " : classes.active} `;

  return (
    <div>
      <nav className={classes.container}>
        <ul className={navClass} onClick={shoSideBarHandler}>
          <li>
            <AiIcons.AiOutlineCloseCircle className={classes.icons} />
          </li>
          <li>
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
          {/* <li className={classes.cart}>
            <HeaderCartButton />
          </li> */}
          <HeaderCartButton />
          <li>
            <IoIcons.IoIosAddCircleOutline className={classes.icons} />
            <Link href="/new-tour">Add tour</Link>
          </li>
          <li>
            <FaIcons.FaListAlt className={classes.icons} />
            <Link href="/booked-tours">Booked tours</Link>
          </li>
        </ul>
        <div className={classes["logo-section"]}>
          <h1>React Tours App</h1>
          <li>
            <FaIcons.FaBars
              className={classes.icons}
              onClick={shoSideBarHandler}
            />
          </li>
        </div>
      </nav>
      {showFavorites === true && <AddModal message={favCtx.message} />}
      {showCart === true && <AddModal message={cartCtx.message} />}
    </div>
  );
}

export default Header;
