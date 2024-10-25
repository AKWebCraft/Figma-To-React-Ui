import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cats from "./pages/Cats";
import Volunteer from "./pages/Volunteer";
import Support from "./pages/Support";


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cats" element={<Cats />} />
                <Route path="/volunteer" element={<Volunteer />} />
                <Route path="/support" element={<Support />} />
              </Routes>
            </div>
            <Footer/>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
