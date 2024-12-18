import styles from '../album.module.css'

const AlbumDot = ({currentIndex, picIndex, goto}) => {
    return <div className={`${styles.dot} ${currentIndex === picIndex ? styles.active : null}`} onClick={() => goto(picIndex)}>
        {picIndex} {}
    </div>
}

const AlbumDots = ({pictures, goto, currentIndex}) => {

    return (

        <div className={styles.dots}>

            {pictures?.map( (picture, index) => {

                return <AlbumDot key={picture._id} goto={goto} currentIndex={currentIndex} picIndex={index}></AlbumDot>
                
            })}

        </div>

    )

};

export default AlbumDots