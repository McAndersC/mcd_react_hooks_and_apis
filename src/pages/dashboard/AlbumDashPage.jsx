
import { Link, Outlet, useOutletContext, useParams } from "react-router-dom";
import Album from "../../components/Album/Album";
import { useEffect, useState } from "react";

const AlbumDashPage = () => {

    const params = useParams();
    const {myName} = useOutletContext()
    const [albumId, setAlbumId] = useState(null)

    useEffect( () => {

        console.log(params)
        if(params.id)
        {
            setAlbumId(params.id)
        }
        

    }, [params])

    return (
        <div>
            <h1>Album Dash Page</h1> 
            <p>{myName}</p>
            <p>{albumId}ssss</p>

            <Album id={albumId}></Album>

            <Link to={"details"}>Details</Link>
          
            <Outlet context={{id : params.id}}></Outlet>
        </div>
    );
};
export default AlbumDashPage;