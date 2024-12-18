import { useEffect, useState } from "react";

const useAlbum = (id) => {

    const [album, setAlbum] = useState([]);
    const [loading, setLoading] = useState(false);
    const [picture, setPicture] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0)
    
    const getAlbum = async () => {

        setLoading(true)
        let response = await fetch(`https://photos.webmcdm.dk/album?id=${id}`);
        let result = await response.json();
        
        setTimeout( () => {

            setAlbum(result.data)
            setPicture(result.data.pictures[currentIndex])
            setLoading(false)

        }, 500) 
        

    }

    const next = () => {

        let index = currentIndex;

        setCurrentIndex(index + 1)
    }

    const previous = () => {

        let index = currentIndex;

        setCurrentIndex(index - 1)
    }

    const goto = (index) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
   
        getAlbum();

    }, []);  


    useEffect(() => {
   
        if(album.pictures)
        {
            setPicture(album.pictures[currentIndex])
        }

    }, [currentIndex]); 


    return {
      album,
      loading,
      picture,
      next,
      previous,
      goto,
      currentIndex
    }
    
};
export default useAlbum;