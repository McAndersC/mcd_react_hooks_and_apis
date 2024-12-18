import styles from './album.module.css'
import useAlbum from "../../hooks/useAlbum";
import AlbumHeader from './components/AlbumHeader';
import AlbumImage from './components/AlbumImage';
import AlbumDots from './components/AlbumDots';
import AlbumNavButton from './components/AlbumBavButton';
import AlbumNavigation from './components/AlbumNavigation';
import AlbumLoader from './components/AlbumLoader';
import { useState } from 'react';



const Album = () => {

    const [demo, setDemo] = useState(true);
    const {album, picture, next, previous, goto, currentIndex, loading} = useAlbum("675ee3953fe111c1af86386f");

    
    
    return (
        <div className={`${styles.album} ${demo ? styles.demo : null}`} onDoubleClick={() => setDemo(!demo)}>
            { loading ? 
                <AlbumLoader loading={loading} color={"#fff"}></AlbumLoader> 
            : <>
                <AlbumHeader title={album.title}></AlbumHeader>
                <AlbumImage picture={picture}></AlbumImage>
                <AlbumNavigation>
                    <AlbumNavButton to={previous} text={"PREVIOUS"} icon={"FaChevronLeft"}></AlbumNavButton>
                    <AlbumDots pictures={album.pictures} goto={goto} currentIndex={currentIndex}></AlbumDots>
                    <AlbumNavButton to={next} text={"NEXT"} icon={"FaChevronRight"}></AlbumNavButton>
                </AlbumNavigation>
            </>
            }
        </div>
    );

};

export default Album;