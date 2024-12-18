import { ClipLoader } from 'react-spinners';
import useAlbum from '../../hooks/useAlbum';

import page from '../../styles/modules/page/page.module.css';
import Album from '../../components/Album/Album';

const AlbumPage = () => {

    let pageStyles = `${page.wrapper}`;

    return (
        <div className={pageStyles}>
            <div>
                <Album id={"675ee3953fe111c1af86386f"}></Album>
                <Album id={"675ee3fa3fe111c1af8638d2"}></Album>
            </div>
        </div>
    );
};
export default AlbumPage;