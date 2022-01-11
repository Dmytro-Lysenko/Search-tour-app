import classes from "./MainNavigation.module.css";

import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Tours App</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Tours</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/new-tour">Add New Tour</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
