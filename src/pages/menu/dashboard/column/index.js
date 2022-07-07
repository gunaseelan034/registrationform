import {
  DownOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Menu, Space, Tag } from "antd";

const menu = (
  <Menu
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
    ]}
  />
);

export const tableColumn = [
  {
    title: "#",
    dataIndex: "name",
    key: 'sno',
    key: "name",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (_, result) => (
      <span style={{ fontSize: "14px", fontWeight: 500 }}>{result.email}</span>
    ),
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
    sorter: true,
  },
  {
    title: "Section",
    dataIndex: "section",
    key: "section",
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
      <Button size="small">
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
