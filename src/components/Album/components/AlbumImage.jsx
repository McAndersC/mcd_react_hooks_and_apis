import styles from '../album.module.css'
import AlbumImageDetail from './AlbumImageDetail';
const AlbumImage = ({picture}) => {

    return (
        <div className={styles.image}>
            <AlbumImageDetail picture={picture}></AlbumImageDetail>
            <img src={picture?.path} alt="Album Picture" />
        </div>
    )

};

export default AlbumImage;