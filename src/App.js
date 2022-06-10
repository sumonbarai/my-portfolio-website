import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home/Home";
import Footer from "./shared/Footer/Footer";
import NavBar from "./shared/NavBar/NavBar";
import NotFound from "./shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
