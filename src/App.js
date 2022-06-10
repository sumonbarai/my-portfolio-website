import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Footer from "./shared/Footer/Footer";
import NavBar from "./shared/NavBar/NavBar";
import NotFound from "./shared/NotFound/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProjectDetails from "./pages/Home/Project/ProjectDetails";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projectDetails/:id"
          element={<ProjectDetails></ProjectDetails>}
        />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
