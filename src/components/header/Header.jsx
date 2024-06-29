import React, { useState } from 'react';
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa";
import {FaTimes} from "react-icons/fa"
import { IoMenu } from "react-icons/io5";


const logo = (
       <div className={styles.logo}>
              <Link to="/">
              <h2>
                Aadi<span>Fsn</span>
              </h2>
              </Link>
            </div>
)

const activeLink = ({isActive}) =>(isActive ? `${styles.active}` : "")

 

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    };

    const hideMenu = ()=>{
        setShowMenu(false)
    };

    const cart = (
        <span className={styles.cart}>
            <Link to="/cart">
            Cart
            <FaShoppingCart size={20} />
            <p>0</p>
            </Link>
        </span>
    );
  return (
    <header>
        <div className={styles.header}>
            {logo}
            <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
                <div className={showMenu ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`} onClick={hideMenu}>

                </div>
                <ul>
                    <li className={styles["logo-mobile"]}>
                        {logo}
                        <FaTimes size={22} color="#fff" onClick={hideMenu}/>
                    </li>
                    <li>
                        <NavLink to="/shop" className={activeLink}>
                         Shops
                        </NavLink>
                    </li>
                </ul>
            <div className={styles["header-right"]}>
                <span className={styles.links}>
                    <NavLink to={"login"} className={activeLink}>
                        Login
                    </NavLink>
                </span>
                <span className={styles.links}>
                    <NavLink to={"register"} className={activeLink}>
                        Register
                    </NavLink>
                </span>
                <span className={styles.links}>
                    <NavLink to={"order-history"} className={activeLink}>
                        My Order
                    </NavLink>
                </span>
                {cart}
            </div>
            </nav>
            <div className={styles["menu-icon"]}>
                {cart}
                <IoMenu size={28} onClick={toggleMenu}/>
            </div>
        </div>
    </header>
  );
}

export default Header;
