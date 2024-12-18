import { ClipLoader } from 'react-spinners';
import styles from '../album.module.css'
const AlbumLoader = ({loading, color}) => {

    return (




        <div className={styles.loader}>
            
            <ClipLoader
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />

        </div>




    )
};

export default AlbumLoader;