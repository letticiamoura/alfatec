import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/home/Home"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route index path="/" element={<Home/>} />
          <Route path="/cursos" element={<NotFound/>} />
          <Route path="/sobre" element={<NotFound/>} />
          <Route path="/*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
