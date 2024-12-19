import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import AlbumPage from "./pages/album/AlbumPage";
import AlbumsPage from "./pages/albums/AlbumsPage";
import AlbumsDashboardPage from "./pages/dashboard/AlbumsDashboardPage";
import AlbumDashPage from "./pages/dashboard/AlbumDashPage";
import AlbumDetails from "./pages/dashboard/AlbumDetails";

// Application
const App = () => {

  // Setting Up Routes
  const routes = useRoutes(
            [

              {
                path: "/",
                element : <HomePage></HomePage>
              },
              {
                path: "/album",
                element : <AlbumPage></AlbumPage>,
              },
              {
                path: "/album/:albumId",
                element : <AlbumPage></AlbumPage>,
              },
              {
                path: "/albums",
                element : <AlbumsPage></AlbumsPage>
              },
              {
                path: "/dashboard",
                element : <AlbumsDashboardPage></AlbumsDashboardPage>,
                children : [
                  {
                    path: "/dashboard/:id",
                    element : <AlbumDashPage></AlbumDashPage>,
                    children : [
                      {
                        path: "/dashboard/:id/details",
                        element : <AlbumDetails></AlbumDetails>
                      }
                    ]
                  }
                  
                ]
              },
              {
                path: "*",
                element : <div>NOT FOUND</div>
              },

          ]

  );

  return <>
    <div>
        <Navigation></Navigation>
        <div>
            {routes}
        </div>
       {/* GLOBAL FOOTER */}
    </div>
  </>;

}

export default App;
