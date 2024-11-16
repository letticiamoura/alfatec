import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Enfer from "./pages/courses/Enfer";
import About from "./pages/About";

export default function App() {
  return (
      <BrowserRouter basename="/alfatec">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/enf" element={<Enfer />} />
          </Routes>
      </BrowserRouter>
  );
};