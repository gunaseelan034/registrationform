import "./index.css";
import {
  Button,
  Layout,
  message,
  Spin,
  Table,
  Menu,
  Badge,
  Dropdown,
  Space,
  Form,
} from "antd";
import {
  DownOutlined,
  EyeOutlined,
  HomeFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeaders } from "../../../pages/layout/components/pageheader/pageheader";
import { QueryFilter } from "../../layout/components/queryfilter/queryfilter";
import API from "../../../services/index";
import { TagStatus } from "./viewstudent/tagStatus";
import { DownloadXlxs } from "./download/downloadxlxs";
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
          key: "3",
          value: "Waiting",
        },
      ]}
    />
  );
};

export const DashBoard = () => {
  const [data, setData] = useState();
  const [spin, setSpin] = useState(false);
  const [filters, setFilters] = useState();

  

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
      title: "#",
      dataIndex: "sno",
      key: "sno",
      render: (value, item, index) => index,
    },
    {
      title: "Admission No",
      dataIndex: "admission_no",
      sorter: true,
      key: "1",
      render: (_, result) => (
        <span style={{ fontSize: "14px" }}>
          {result.admission_no == null ? "N/A" : result.admission_no}
        </span>
      ),
    },
    {
      title: "Name",
      dataIndex: "students",
      key: "2",
      render: (students) =>
        students.map((students) => students.first_name + students.last_name),
    },
    {
      title: "Relevant Type",
      dataIndex: "relevant_type",
      key: "3",
    },
    {
      title: "Gender",
      dataIndex: "students",
      key: "4",
      render: (students) => students.map((students) => students.gender),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "5",
      render: (_, result) => (
        <span style={{ fontSize: "14px" }}>{result.email}</span>
      ),
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "6",
    },
    {
      title: "Age",
      dataIndex: "students",
      key: "7",
      sorter: (a, b) => a - b,
      render: (students) =>
        students.map((students) => students.age + students.age),
    },
    {
      title: "Class",
      dataIndex: "students",
      sorter: (a, b) => a - b,
      key: "8",
      render: (students) => students.map((students) => students.class),
    },

    {
      title: "View",
      dataIndex: "view",
      key: "9",
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
      key: "10",
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
    {
      title: "Status",
      dataIndex: "status",
      key: "11",
      render: (_, result) => <TagStatus result={result} />,
    },
  ];

  useEffect(() => {
    getData(filters);
  }, []);

  return (
    <div>
      <PageHeaders
        title={"Dashboard"}
        icon={<HomeFilled />}
        DownloadXlxs={<DownloadXlxs data={data} />}
      />
      <QueryFilter spin={spin} getData={getData} setFilters={setFilters} />
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
              marginTop: "10px",
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
