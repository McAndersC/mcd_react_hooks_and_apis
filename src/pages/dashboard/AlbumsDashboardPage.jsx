import { Outlet } from "react-router-dom";
import AlbumsNavigation from "../../components/AlbumNavigation/AlbumsNavigation";
import DashBoardNavigation from "../../components/DashBoardNavigation/DashBoardNavigation";
import styles from './dashboard.module.css';
const AlbumsDashboardPage = () => {

    const myName = "Anders Christensen"

    return (
        <>
         <h1>Album Dashboard Page</h1> 

         <div className={styles.dashboard}>
           
           <div className={styles.nav}>
               <h1>Navigation</h1>
               <DashBoardNavigation></DashBoardNavigation>
           </div>
           <div className={styles.outlet}>
               <h1>Outlet</h1>
                <Outlet context={{myName}}></Outlet>
           </div>
       </div>
        </>

    );
};
export default AlbumsDashboardPage;