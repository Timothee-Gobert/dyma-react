import styles from "./Header.module.scss";

import logoCookChef from "../assets/images/cookchef.png";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={logoCookChef} alt="Logo du site" scale="1%" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-primary">
          <i className="fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-reverse-primary">connexion</button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`${styles.headerXs} fa-solid fa-bars`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className={`calc`}></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;
