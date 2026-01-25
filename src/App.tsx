import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Inicio from "./pages/home/Inicio";
import Cursos from "./pages/cursos/Curso";
import EntrarEmContato from "./pages/contato/EntrarEmContato";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="sobre" element={<NotFound />} />
          <Route path="/entrar-em-contato" element={<EntrarEmContato />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;