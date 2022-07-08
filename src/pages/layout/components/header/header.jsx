import {
  BellOutlined,
  DownOutlined,
  LockOutlined,
  LoginOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import React from "react";
import "./header.css";
import { Avatar, Badge, Dropdown, Layout, Menu, Space } from "antd";
const { Header } = Layout;

export const Headers = ({ setCollapsed, collapsed, className }) => {
  const menu = (
    <Menu
      style={{ padding: "10px" }}
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer">
              <LockOutlined style={{marginRight: '5px'}} /> Forgot Password
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" onClick={() => {window.location.href = '/'}}>
              <LoginOutlined style={{marginRight: '5px'}} /> LogOut
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );
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
        <Space size={15}>
          <Dropdown overlay={menu}>
            <span onClick={(e) => e.preventDefault()}>
                Admin
                <DownOutlined />
            </span>
          </Dropdown>
          <Avatar />
        </Space>
      </span>
    </Header>
  );
};
