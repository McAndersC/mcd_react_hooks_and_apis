import styles from '../album.module.css'
const AlbumImageDetail = ({picture}) => {

    return (
     
            <div className={styles.description}>
                <p>{picture?.description}</p>
                <p>{picture?.format} - {picture?.width}x{picture?.height} pixels.</p>
            </div>
     
    )

};

export default AlbumImageDetail