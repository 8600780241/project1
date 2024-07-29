import "./App.css";
import Home from "./components/Home";
import RootLayout from "./RootLayout";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Career from "./components/Career";
import Experties from "./components/Experties";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<RootLayout />}>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<AboutUs />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/careers" element={<Career />}></Route>
            <Route exact path="/blogs" element={<Blogs />}></Route>
            <Route exact path="/experties" element={<Experties />}></Route>
          </Route>
          <Route exact path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
