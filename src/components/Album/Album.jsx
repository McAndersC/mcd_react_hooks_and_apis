import styles from './album.module.css'
import useAlbum from "../../hooks/useAlbum";
import AlbumHeader from './components/AlbumHeader';
import AlbumImage from './components/AlbumImage';
import AlbumDots from './components/AlbumDots';
import AlbumNavButton from './components/AlbumBavButton';
import AlbumNavigation from './components/AlbumNavigation';
import AlbumLoader from './components/AlbumLoader';
import { useEffect, useState } from 'react';



const Album = ({id}) => {

    const [demo, setDemo] = useState(true);
    const [albumId, setAlbumId] = useState(null)
    const {album, picture, next, previous, goto, currentIndex, loading, getAlbumById} = useAlbum(albumId);

    useEffect( () => {

        getAlbumById(id);
        
    }, [id])
    

    useEffect( () => {

        console.log('Album', album)

    }, [album]) 
    
    return (
        <div className={`${styles.album} ${demo ? styles.demo : null}`} onDoubleClick={() => setDemo(!demo)}>
                {albumId}
                <AlbumHeader title={album.title}></AlbumHeader>
                <AlbumImage picture={picture}></AlbumImage>
                <AlbumNavigation>
                    <AlbumNavButton to={previous} text={"PREVIOUS"} icon={"FaBullseye"}></AlbumNavButton>
                    <AlbumDots pictures={album.pictures} goto={goto} currentIndex={currentIndex}></AlbumDots>
                    <AlbumNavButton to={next} text={"NEXT"} icon={"FaBullseye"}></AlbumNavButton>
                </AlbumNavigation>
            
            
        </div>
    );

};

export default Album;