

```
Følgende Udfordringer.
```

# Opgave Grubler.

Læs **ALLE TRIN** inden du får igang - så du har et lille overblik over opgaver og måske det former din tankegang i forhold til hvordan du griber det an.

## Trin 3.

Nu har vi lavet vores useAlbum hook og vi kan loade et album nu skal vi lave vores egen billede album.



```javascript
import { useEffect, useRef, useState } from "react";

const useAlbum = (id) => {

    const [album, setAlbum] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [picture, setPicture] = useState({});
    const [loading, setLoading] = useState(false);
   
    const getAlbum = async () => {

        let response = await fetch(`https://photos.webmcdm.dk/album?id=${id}`);
        let result = await response.json();
        let a = result.data;
  
        setAlbum(a);
        setPicture(result.data.pictures[currentIndex]);

        setTimeout(() => {
            setLoading(false);
        }, 4000);
        
    }

    const next = () => {
    
    }

    const previous = () => {
 
    }

    const goto = (index) => {
    
    }

    useEffect(() => {

        setLoading(true);
        getAlbum();

    }, []);    
    
    return {
      album,
      picture,
      next,
      previous,
      goto,
      currentIndex,
      loading
    }
};
export default useAlbum;
```

