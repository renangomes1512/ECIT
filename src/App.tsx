import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Blog } from "./pages/Blog"
import "./App.css"

export function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/ECIT" element={<Home/>}/>
        <Route path="/ECIT/sobre" element={<Sobre/>}/>
        <Route path="/ECIT/blog" element={<Blog/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>

  )
}

