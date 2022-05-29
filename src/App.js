import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Fetch from "./components/Fetch";
import Axios from "./components/Axios";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/axios" element={<Axios />} />
      </Routes>
    </Router>
  );
}

export default App;
