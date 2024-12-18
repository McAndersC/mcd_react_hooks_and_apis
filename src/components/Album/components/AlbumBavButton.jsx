import { icons } from '../../../services/icons';
import styles from '../album.module.css'

const AlbumNavButton = ({to, text = "text", icon = "FaBullseye"}) => {

    return (
        <div className={styles.navButton} onClick={() => to()}>
            {icons[icon]}
            <div>{text}</div>
        </div>
    )

};

export default AlbumNavButton