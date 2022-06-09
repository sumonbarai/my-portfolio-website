import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home/Home";
import Footer from "./shared/Footer/Footer";
import NavBar from "./shared/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
