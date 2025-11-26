import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Cadastro from "./pages/cadastro/Cadastro"

function App() {


  return (
    <>

      {/* Comentário em JSX */}

      <BrowserRouter>
        <Navbar />
        
        <div className="min-h-[80vh]">
          <Routes>
            {/* Importando config definida em Home.tsx */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
