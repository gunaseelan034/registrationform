import "./index.css";
import {
  Button,
  Layout,
  message,
  Spin,
  Table,
  Menu,
  Badge,
  Tag,
  Dropdown,
  Space,
} from "antd";
import { DownOutlined, EyeOutlined, LoadingOutlined } from "@ant-design/icons";

import { PageHeaders } from "../../layout/components/pageheader/pageheader";
import { QueryFilter } from "../../layout/components/queryfilter/queryfilter";
import React, { useEffect, useState } from "react";

import API from "../../../services/index";
import { useNavigate } from "react-router-dom";
const { Content } = Layout;

const menu = (
  <Menu
    style={{ padding: "10px" }}
    items={[
      {
        label: (
          <span>
            {" "}
            <Badge color="#87d068" text="Approve" />
          </span>
        ),
        key: "0",
        value: "approve",
      },
      {
        label: (
          <span>
            {" "}
            <Badge color="#f50" text="Reject" />
          </span>
        ),
        key: "1",
        value: "approve",
      },
      {
        label: (
          <span>
            {" "}
            <Badge status="warning" text="ShortList" />
          </span>
        ),
        key: "2",
        value: "shortlist",
      },
    ]}
  />
);

export const DashBoard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [spin, setSpin] = useState(false);
  const tableColumn = [
    {
      title: "#",
      dataIndex: "id",
      key: "sno",
    },
    {
      title: "Admission No",
      dataIndex: "admission_no",
      key: "admission_no",
      sorter: true,
      render: (_, result) => (
        <span style={{ fontSize: "14px" }}>
          {result.admission_no == null ? "N/A" : result.admission_no}
        </span>
      ),
    },
    {
      title: "Name",
      dataIndex: "students",
      key: "students",
      sorter: true,
      render: (students) => students.map((students) => students.first_name + students.last_name),
    },
    {
      title: "Gender",
      dataIndex: "students",
      key: "students",
      sorter: true,
      render: (students) => students.map((students) => students.gender),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, result) => (
        <span style={{ fontSize: "14px" }}>{result.email}</span>
      ),
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      sorter: (a, b) => a - b,
      key: "mobile",
    },
    {
      title: "Age",
      dataIndex: "students",
      key: "students",
      render: (students) => students.map((students) => students.age + students.age),

    },
    {
      title: "Class",
      dataIndex: "students",
      key: "students",
      sorter: true,
      render: (students) => students.map((students) => students.class),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, result) => <Tag color="gold">{"waiting"}</Tag>,
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (_, result) => (
        <Button
          size="small"
          onClick={() => {
            navigate("viewstudent");
          }}
        >
          <EyeOutlined /> View
        </Button>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, result) => (
        <Dropdown overlay={menu} trigger={["click"]}>
          <Button
            type="text"
            size="small"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Space>
              Action
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
  ];

  const getData = () => {
    setSpin(true);
    API.dashboard
      .getAdmissionAppliedDetails()
      .then((resp) => {
        setData(resp.data.data);
        setSpin(false);
      })
      .catch((error) => {
        setSpin(false);
        message.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <PageHeaders title={"Dashboard"} />
      <QueryFilter spin={spin} getData={getData} />
      <Content
        className="site-layout-background"
        style={{
          margin: "12px 16px",
          padding: 24,
          minHeight: 250,
        }}
      >
        <Spin
          indicator={<LoadingOutlined style={{ color: "black" }} />}
          spinning={spin}
        >
          <Table
            style={{
              marginTop: "60px",
            }}
            pagination={{

              pageSizeOptions: ["10", "20"],
              showSizeChanger: true,

            }}
            className="ant-table table ant-table-thead .ant-pagination-item-active"
            dataSource={data}
            columns={tableColumn}
          />
        </Spin>
      </Content>
    </div>
  );
};
