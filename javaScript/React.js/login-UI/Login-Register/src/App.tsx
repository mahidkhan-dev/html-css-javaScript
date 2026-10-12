import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./Component/Login-SignUp UI/Login"
import SignUp from "./Component/Login-SignUp UI/SignUp"

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />



      </Routes>

    </BrowserRouter>
  )
}

export default App