import styles from "./Header.module.scss";

import logoCookChef from "../assets/images/cookchef.png";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i className="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img src={logoCookChef} alt="Logo du site" scale="1%" />
      </div>
      <ul>
        <button className="mr-5 btn btn-primary">
          <i className="fa-solid fa-basket-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-reverse-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Header;
