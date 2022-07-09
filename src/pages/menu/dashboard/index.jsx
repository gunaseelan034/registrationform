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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeaders } from "../../layout/components/pageheader/pageheader";
import { QueryFilter } from "../../layout/components/queryfilter/queryfilter";
import API from "../../../services/index";
import { TagStatus } from "./viewstudent/tagStatus";
const { Content } = Layout;

const MenuSelection = ({ id, getData }) => {
  var updateApplicationStatus = (values) => {
    API.dashboard
      .updateApplicationStatus(values)
      .then(() => {
        getData();
        message.success("Successfuly Updated");
      })
      .catch(() => {
        message.error("Error Occured");
      });
  };
  return (
    <Menu
      style={{ padding: "10px" }}
      items={[
        {
          label: (
            <span
              onClick={() => {
                updateApplicationStatus({ id: id, status: "approve" });
              }}
            >
              {" "}
              <Badge color="#87d068" text="Approve" />
            </span>
          ),
          key: "0",
          value: "approve",
        },
        {
          label: (
            <span
              onClick={() => {
                updateApplicationStatus({ id: id, status: "reject" });
              }}
            >
              {" "}
              <Badge color="#f50" text="Reject" />
            </span>
          ),
          key: "1",
          value: "approve",
        },
        {
          label: (
            <span
              onClick={() => {
                updateApplicationStatus({ id: id, status: "shortlist" });
              }}
            >
              {" "}
              <Badge status="processing" text="ShortList" />
            </span>
          ),
          key: "2",
          value: "shortlist",
        },
        {
          label: (
            <span
              onClick={() => {
                updateApplicationStatus({ id: id, status: "waiting" });
              }}
            >
              {" "}
              <Badge status="warning" text="Waiting" />
            </span>
          ),
          key: "2",
          value: "Waiting",
        },
      ]}
    />
  );
};

export const DashBoard = () => {
  const [data, setData] = useState();
  const [spin, setSpin] = useState(false);

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

  const tableColumn = [
    {
      title: "Admission No",
      dataIndex: "admission_no",
      sorter: true,
      key: "admission_no",
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
      render: (students) =>
        students.map((students) => students.first_name + students.last_name),
    },
    {
      title: "Relevant Type",
      dataIndex: "relevant_type",
      key: "relevant_type",
    },
    {
      title: "Gender",
      dataIndex: "students",
      key: "students",
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
      key: "mobile",
    },
    {
      title: "Age",
      dataIndex: "students",
      key: "students",
      sorter: (a, b) => a - b,
      render: (students) =>
        students.map((students) => students.age + students.age),
    },
    {
      title: "Class",
      dataIndex: "students",
      sorter: (a, b) => a - b,
      key: "students",
      render: (students) => students.map((students) => students.class),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, result) => <TagStatus result={result} />
    },
    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (_, result) => (
        <Link to={`viewstudent/?id=${result.id}`}>
          <Button size="small" onClick={() => {}}>
            <EyeOutlined /> View
          </Button>
        </Link>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, result) => (
        <Dropdown
          overlay={<MenuSelection id={result.id} getData={getData} />}
          trigger={["click"]}
        >
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
