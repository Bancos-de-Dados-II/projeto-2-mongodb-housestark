import { Home } from "./pages/home"
import {List} from "./pages/list"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agricultores" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App