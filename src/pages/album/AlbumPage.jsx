import { ClipLoader } from 'react-spinners';
import useAlbum from '../../hooks/useAlbum';

import page from '../../styles/modules/page/page.module.css';
import Album from '../../components/Album/Album';
import { Outlet, useParams } from 'react-router-dom';
import AlbumsNavigation from '../../components/AlbumNavigation/AlbumsNavigation';
import { useEffect, useState } from 'react';

const AlbumPage = () => {

    let pageStyles = `${page.wrapper}`;

    const params = useParams();
    const [albumId, setAlbumId] = useState(null)

    useEffect( () => {

        console.log('ID', params.albumId)
        if(params.albumId)
        {
            setAlbumId(params.albumId)
        }
        

    }, [params])

    return (
        <div className={pageStyles}>
            <div>
                <AlbumsNavigation></AlbumsNavigation>
                {params.albumId ? <Album id={albumId}></Album> : null}
            </div>
        </div>
    );
};
export default AlbumPage;