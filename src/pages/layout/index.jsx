import { Layout } from "antd";
import React, { useState } from "react";
import { DashBoard } from "../menu/dashboard";
import { Headers } from "./components/header/header";
import { Siders } from "./components/sider/sider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { Footer } from "antd/lib/layout/layout";
import { ViewAll } from "../menu/dashboard/viewstudent";

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
          <Route path="/viewstudent" element={<ViewAll/>}></Route>
        </Routes>
        <Footer style={{ textAlign: 'center', color: 'grey', }}> ©2022 Created by Cogniti Digitals Solution </Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
