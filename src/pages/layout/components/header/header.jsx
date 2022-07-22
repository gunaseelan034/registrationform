import {
  CaretRightOutlined,
  DownOutlined,
  LockOutlined,
  LoginOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  AutoComplete,
  Avatar,
  Dropdown,
  Input,
  Layout,
  Menu,
  Space,
} from "antd";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";

import API from "../../../../services/index";
import "./header.css";
const { Header } = Layout;

export const Headers = ({ setCollapsed, collapsed, className }) => {
  const formRef = useRef();
  const navigete = useNavigate();
  const [option, setOption] = useState();

  const onSelect = (e) => {
    formRef.current = e.email;
    console.log(formRef);
    navigete(`dashboard/viewstudent/?id=${e.id}`);
  };

  const onChange = (values) => {
    if (values !== "") {
      API.header.getSuggestionStudent(values.toString()).then((resp) => {
        const tmpobj = resp.data.data.map((item) => {
          return {
            value: item.id,
            label: (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                onClick={() => {
                  onSelect(item);
                }}
              >
                <span>
                  <Space>
                    <CaretRightOutlined />
                    {item.admission_no}
                  </Space>
                </span>
                <span>{item.students[0].first_name}</span>
              </div>
            ),
          };
        });
        setOption(tmpobj);
      });
    }
  };

  const menu = (
    <Menu
      style={{ padding: "10px" }}
      items={[
        {
          label: (
            <a target="_blank" rel="noopener noreferrer">
              <LockOutlined style={{ marginRight: "5px" }} /> Forgot Password
            </a>
          ),
          key: "0",
        },
        {
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              <LoginOutlined style={{ marginRight: "5px" }} /> LogOut
            </a>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <Header
      className={'header'}
    >
      <span >
        {React.createElement(collapsed ? MenuOutlined : MenuOutlined, {
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        })}
      </span>
      <span
        style={{
          float: "right",
          marginRight: "40px",
        }}
      >
        <Space size={35}>
          <AutoComplete
            ref={formRef}
            bordered={false}
            onSearch={(e) => {
              onChange(e);
            }}
            options={option}
            placeholder="Search"
            suffixIcon={<SearchOutlined />}
            allowClear
          >
            <Input suffix={<SearchOutlined />} />
          </AutoComplete>
          <Dropdown overlay={menu}>
            <span onClick={(e) => e.preventDefault()}>
              Admin
              <DownOutlined />
            </span>
          </Dropdown>
          <Avatar src={`http://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png`} />
        </Space>
      </span>
    </Header>
  );
};
