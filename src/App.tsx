import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";
import Inicio from "./pages/home/Inicio";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="cursos" element={<NotFound />} />
          <Route path="sobre" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;