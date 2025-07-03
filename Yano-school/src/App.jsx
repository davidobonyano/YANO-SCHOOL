import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route,} from "react-router-dom";

//Components
import Home from "./Components/Home";
import About from "./Components/About";



//Pages
import Notfound from "./pages/Notfound";

//layout
import Rootlayout from "./Layout/Rootlayout";




const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path="/" element={<Rootlayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="about" element={<About/>}></Route>
    
    <Route path="*" element={<Notfound/>}></Route>
      </Route>
   ),
    {
    basename: "/YANO-SCHOOL",
  }
)
function App() {
   return ( 
    <RouterProvider router={router}></RouterProvider>
   
   );
}

export default App;
