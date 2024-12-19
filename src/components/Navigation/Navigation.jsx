import { Link, NavLink } from "react-router-dom";
import styles from './navigation.module.css'
import { useState } from "react";
import { icons } from "../../services/icons";

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(true)

    const toggleNavigation = () => {

        setIsOpen(!isOpen)
        
    }

    const nav = [
        {
            path : "/",
            title : "Home"
        },
        {
            path : "/album",
            title : "Album"
        },
        {
            path : "/albums",
            title : "Album"
        },
        {
            path : "/dashboard",
            title : "Dashboard"
        }
    ]
  
    return (
        <div className={styles.navigation}>
            {/* <a href="/">FORSIDE</a> */}

            <div>

                PHOTOS & ALBUMS & CATALOGS

            </div>
            <div className={styles.actions}>

                <div className={`${styles.nav} ${isOpen ? styles.open : ''}` }>

                    {nav.map( (item, index) => {
                        return <NavLink key={index} to={item.path} className={({ isActive }) => (isActive ? styles.active : "")}>{item.title}</NavLink>
                    })}
              
                </div>
                
                <div onClick={toggleNavigation}>
                    {icons["FaBurger"]}
                </div>

            </div>
         

        </div>
    );
};
export default Navigation;