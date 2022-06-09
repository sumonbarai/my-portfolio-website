import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";

import Home from "./pages/Home/Home/Home";
import Footer from "./shared/Footer/Footer";
import NavBar from "./shared/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About></About>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
