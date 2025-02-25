import { Home } from "./pages/home"
import {List} from "./pages/list"
import { About } from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/agricultores" element={<List />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App