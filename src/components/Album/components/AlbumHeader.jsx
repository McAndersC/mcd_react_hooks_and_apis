import styles from '../album.module.css'
const AlbumHeader = ({title}) => {

    return (
        <h1 className={styles.header}>
            Album {title}
        </h1>
    )
}

export default AlbumHeader