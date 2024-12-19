import page from '../../styles/modules/page/page.module.css';
import AlbumsNavigation from '../../components/AlbumNavigation/AlbumsNavigation';


const AlbumsPage = () => {

    let pageStyles = `${page.wrapper}`;

    return (
        <div className={pageStyles}>
            <div>
                <h1>AlbumsPage</h1>
                <AlbumsNavigation></AlbumsNavigation>
            </div>
        </div>
    );
};

export default AlbumsPage;