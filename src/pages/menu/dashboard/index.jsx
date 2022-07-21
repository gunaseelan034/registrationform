import "./index.css";
import 'react-calendar/dist/Calendar.css';
import {
  Button,
  Layout,
  message,
  Spin,
  Table,
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
import { MenuSelection } from "./statusmenu";
const { Content } = Layout;



export const DashBoard = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState();
  const [spin, setSpin] = useState(false);
  const [filters, setFilters] = useState();

  const getData = (values) => {
    setSpin(true);
    API.dashboard
      .getAdmissionAppliedDetails(JSON.stringify(values))
      .then((resp) => {
        setData(resp.data.data);
        setSpin(false);
      })
      .catch((error) => {
        setSpin(false);
        message.error(error);
      });
  };
  
  const search = () => {
    form.validateFields().then((values) => {
      setFilters(values);
      getData(values);
    });
  };

  const resetParams = () => {
    form.resetFields();
    search();
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
      sorter: (a, b) => a.admission_no - b.admission_no,
      key: "admission_no",
      render: (_, result) => (
        <span style={{ fontSize: "14px" }}>
          {result.admission_no == null ? "-" : result.admission_no}
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
      title: "Class",
      dataIndex: "students",
      key: "8",
      render: (students) => students.map((students) => students.class),
    },

    {
      title: "View",
      dataIndex: "view",
      key: "view",
      render: (_, result) => (
        <Link to={`viewstudent/?id=${result.id}`}>
          <Button type="primary" size="small" onClick={() => {}}>
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
          overlay={
            <MenuSelection
            filters={filters}
              id={result.id}
              studentData={result}
              getData={getData}
            />
          }
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
      key: "status",
      render: (_, result) => <TagStatus result={result} />,
    },
  ];

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <PageHeaders
        DownloadXlxs={<DownloadXlxs data={data} />}
        title={"Dashboard"}
        icon={<HomeFilled />}
      />
      <Form form={form} layout="horizontal">
        <QueryFilter
          form={form}
          spin={spin}
          search={search}
          getData={getData}
          filters={filters}
          setFilters={setFilters}
          resetParams={resetParams}
        />
      </Form>
      <Content
        className="site-layout-background"
        style={{
          margin: "12px 16px",
          padding: 24,
          margin: "24px 16px 0",
          overflow: "initial",
        }}
      >
        <Spin
          indicator={<LoadingOutlined style={{ color: "black" }} />}
          spinning={spin}
        >
          <Table
            checkStrictly={true}
            xs="small"
            sm="small"
            md="middle"
            lg="large"
            pagination={{
              pageSizeOptions: ["10", "20"],
              showSizeChanger: true,
            }}
            className="ant-table table ant-table-thead .ant-pagination-item-active"
            dataSource={data}
            columns={tableColumn}
            expandable
          />
        </Spin>
      </Content>
    </div>
  );
};
