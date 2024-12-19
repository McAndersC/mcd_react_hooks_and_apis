import { useEffect, useState } from "react";

const useAlbums = () => {

    const [loading, setLoading] = useState(false);
    const [albums, setAlbums] = useState([]);

    const getAlbums = async () => {

        setLoading(true)
        let response = await fetch(`https://photos.webmcdm.dk/albums?catalog=675ee37d3fe111c1af863864`);
        let result = await response.json();
        
        setTimeout( () => {

            setAlbums(result.data)
            setLoading(false)

        }, 500) 
        

    }

    useEffect( () => {
        getAlbums();
    }, [])

    return {
        albums
    }

}

export default useAlbums