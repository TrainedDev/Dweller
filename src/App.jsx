import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
