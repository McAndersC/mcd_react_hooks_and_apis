import useFetch from '../../hooks/useFetch';
import page from '../../styles/modules/page/page.module.css';

const HomePage = () => {

    let pageStyles = `${page.wrapper}`;




    return (
        <div className={pageStyles}>
            <div>
                Home Page {name}
            </div>
        </div>
    );
};
export default HomePage;