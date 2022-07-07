import "antd/dist/antd.css";
import "./App.css";
import Auth from "./pages/auth/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/layout";
import { DashBoard } from "./pages/menu/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<DashBoard />} />
          <Route path='some' element={<span>wwwd</span>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
