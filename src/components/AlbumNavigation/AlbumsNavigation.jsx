import { Link } from "react-router-dom";
import useAlbums from "../../hooks/useAlbums";
import styles from "./albumsnavigation.module.css";

const AlbumLink = ({album}) => {

    return <div>

        <Link to={`/album/${album._id}`}>{album.title}</Link>

    </div>

}

const AlbumsNavigation = () => {

    const {albums} = useAlbums();

    return (
        <div className={styles.albumNavigation}>
           {
             albums.map( (album) => {
                return <AlbumLink key={album._id} album={album}></AlbumLink>
            } )
           }
        </div>
    );
};
export default AlbumsNavigation;