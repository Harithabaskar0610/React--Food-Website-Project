import "./App.css";
import Menuway from "./routes/Menuway";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbarway from "./routes/Navbarway";
import Aboutway from "./routes/Aboutway";
import Contactway from "./routes/Contactway";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Navbarway/>} />
          <Route path="/menu" element={<Menuway/>} />
          <Route path="/about" element={<Aboutway/>} />
          <Route path="/contact" element={<Contactway/>} />
      </Routes>
    </Router>
  );
}

export default App;