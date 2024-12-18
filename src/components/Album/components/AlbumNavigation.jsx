import styles from '../album.module.css'
const AlbumNavigation = ({children}) => {

    return (
        <div className={styles.navigation}>
            {children}
        </div>
    )

};

export default AlbumNavigation;