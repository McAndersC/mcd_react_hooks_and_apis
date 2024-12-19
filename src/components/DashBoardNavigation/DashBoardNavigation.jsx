import { Link } from "react-router-dom";
import useAlbums from "../../hooks/useAlbums";
import styles from './dashboardNavigation.module.css'
const DashBoardNavigation = () => {

    const {albums} = useAlbums();

    return (
        <div className={styles.dashboardNavigation}>
           {
             albums.map( (album) => {
                return <Link key={album._id} to={`/dashboard/${album._id}`}>{album.title}</Link>
            } )
           }
        </div>
    );
};
export default DashBoardNavigation;