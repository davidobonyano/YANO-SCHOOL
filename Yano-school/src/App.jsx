import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Components
import Home from "./Components/Home";
import About from "./Components/About";
import Programs from "./Components/Programs";
// Pages
import Notfound from "./pages/Notfound";

// Layout
import Rootlayout from "./Layout/Rootlayout";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="programs" element={<Programs />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  ),
  {
    basename: "/YANO-SCHOOL",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
