import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth/auth";
import Home from "./pages/layout";
import { DashBoard } from "./pages/menu/dashboard";
import { ViewAll } from "./pages/menu/dashboard/viewstudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/home" element={<Home />}>
          <Route index element={<DashBoard />} />
          <Route path="viewstudent" element={<ViewAll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
