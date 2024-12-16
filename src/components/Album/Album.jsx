import { ClipLoader } from "react-spinners";
import useAlbum from "../../hooks/useAlbum";
import styles from './album.module.css';

const AlbumLoader = ({loading}) => {

    return <div>
         <ClipLoader
            color={"red"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        /> 
    </div>

}

const AlbumHeader = ({title}) => {

    return <div className={styles.header}>
            <h1>{title}</h1>
        </div>

}

const AlbumImageDetail = ({picture}) => {

    return <div className={styles.detail}>
           <p>{picture?.format}</p>
           <p>{picture?.width} * {picture?.height}</p>
        </div>

}

const AlbumImage = ({picture}) => {

    return <div className={styles.image}>
        {picture?.path}

        <div>
            <AlbumImageDetail picture={picture}></AlbumImageDetail>
        </div>
    </div>

}
const AlbumDots = () => {

    return <div className={styles.dots}>
        DOT - DOT - DOT
    </div>

}

const AlbumNavButton = ({text}) => {

    return <div className={styles.navButton}>
        {text}
    </div>

}

const AlbumNavigation = () => {

    return <div className={styles.navigation}>
        <AlbumNavButton text={"NEXT"}></AlbumNavButton>
        <AlbumDots></AlbumDots>
        <AlbumNavButton text={"PREVIOUS"}></AlbumNavButton>
    </div>

}

const Album = () => {

    const {album, loading, picture, next} = useAlbum("675ee3953fe111c1af86386f")

    return (
        <div className={styles.album}>


            {loading ? <AlbumLoader loading={loading} /> : <div>
                <AlbumHeader title={album.title}></AlbumHeader>
                <AlbumImage picture={picture}></AlbumImage>
                <AlbumNavigation>

                </AlbumNavigation>
            </div>}

                   
              
        </div>
    );
};

export default Album;