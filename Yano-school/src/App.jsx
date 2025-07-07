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
import Admissions from "./Components/Admissions";
import Contact from "./Components/Contact";
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
      <Route path="admissions" element={<Admissions />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  ),
 
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
