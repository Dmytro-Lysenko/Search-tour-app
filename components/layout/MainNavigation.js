import classes from "./MainNavigation.module.css";

import Link from "next/link";
import HeaderCartButton from "./HeaderCartButton";
import { useRouter } from "next/router";

function MainNavigation(props) {
  const router = useRouter();

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <div className={classes.logo}>React Tours App</div>
          <li>
            <Link href="/">All Tours</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <HeaderCartButton />
          <li>
            <Link href="/new-tour">Add New Tour</Link>
          </li>
          <li>
            <Link href="/booked-tours">Booked tours</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
