import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null)

    const getAlbum = async () => {

        const response = await fetch(url)
        const result = await response.json();
        console.log(result);

        setData(result.data)
    } 

    useEffect( () => {

        const get = async () => {

            await getAlbum();
        }

        get();

    }, [])
 
    return {
        data
    }
};
export default useFetch;