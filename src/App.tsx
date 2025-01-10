import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Enfer from "./pages/courses/Enfer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Ele from "./pages/courses/Ele";
import Log from "./pages/courses/Log";
import Sdt from "./pages/courses/Sdt";
import Adm from "./pages/courses/Adm";

export default function App() {
  return (
      <BrowserRouter basename="/alfatec">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Courses />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/enfermagem" element={<Enfer />} />
            <Route path="/eletrotecnica" element={<Ele />} />
            <Route path="/logistica" element={<Log />} />
            <Route path="/sdt" element={<Sdt />} />
            <Route path="/administracao" element={<Adm />} />
          </Routes>
      </BrowserRouter>
  );
};