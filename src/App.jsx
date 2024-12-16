import { useRoutes } from "react-router-dom";
// Common Pages.
import HomePage from "./pages/home/HomePage";
import Navigation from "./components/Navigation/Navigation";
import AlbumPage from "./pages/album/AlbumPage";

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
