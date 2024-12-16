import { ClipLoader } from 'react-spinners';
import useAlbum from '../../hooks/useAlbum';

import page from '../../styles/modules/page/page.module.css';
import Album from '../../components/Album/Album';

const AlbumPage = () => {

    let pageStyles = `${page.wrapper}`;

    return (
        <div className={pageStyles}>
            <div>
                <Album></Album>
            </div>
        </div>
    );
};
export default AlbumPage;