import { Layout } from "antd";
import React, { useState } from "react";
import { DashBoard } from "../menu/dashboard";
import { Headers } from "./components/header/header";
import { Siders } from "./components/sider/sider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ height: "100vh" }}>
      <Siders collapsed={collapsed} />
      <Layout className="site-layout">
        <Headers
          setCollapsed={setCollapsed}
          collapsed={collapsed}
          className={"site-layout-background"}
        />
        <Routes>
          <Route index element={<DashBoard />}></Route>
          <Route path="/some" element={<span>wdwdqdq</span>}></Route>
        </Routes>
      </Layout>
    </Layout>
  );
};

export default Home;
