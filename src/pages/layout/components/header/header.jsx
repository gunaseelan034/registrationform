import { BellOutlined, MenuOutlined } from "@ant-design/icons";
import React from "react";
import "./header.css";
import { Avatar, Badge, Layout } from "antd";
const { Header } = Layout;

export const Headers = ({ setCollapsed, collapsed, className }) => {
  return (
    <Header
      className={className}
      style={{
        padding: 0,
      }}
    >
      <span style={{ marginLeft: "30px" }}>
        {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        })}
      </span>
      <span
        style={{
          float: "right",
          marginRight: "20px",
        }}
      >
        <Avatar />
      </span>
    </Header>
  );
};
