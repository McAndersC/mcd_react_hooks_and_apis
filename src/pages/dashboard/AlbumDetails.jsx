
import { useOutletContext } from "react-router-dom";
import useAlbum from "../../hooks/useAlbum";
import styles from './dashboard.module.css';
import { useEffect } from "react";

const AlbumDetails = () => {


    const {id} = useOutletContext()
    const {album, getAlbumById} = useAlbum(id);

    useEffect( () => {

        console.log(id)
        getAlbumById(id)
        
    }, [id])

    return (
        <div className={styles.details}>

            <h2>Details</h2>
            AlbumDetails {album?.title}
         
        </div>
    );
};
export default AlbumDetails;