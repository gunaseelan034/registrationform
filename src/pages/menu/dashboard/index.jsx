import "./index.css";
import { Layout, Table } from "antd";
import { PageHeaders } from "../../layout/components/pageheader/pageheader";
import { tableColumn } from "./column";
const { Content } = Layout;

export const DashBoard = () => {
  return (
    <div>
      <PageHeaders title={"Dashboard"} />
      <Content
        className="site-layout-background"
        style={{
          margin: "12px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        <Table
        className="ant-table table ant-table-thead"
          pagination={{
            pageSize: 50,
          }}
          dataSource={[]}
          columns={tableColumn}
        />
      </Content>
    </div>
  );
};
