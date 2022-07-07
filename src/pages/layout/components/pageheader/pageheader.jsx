import { Breadcrumb, Button, Descriptions, PageHeader } from "antd";

export const PageHeaders = ({ title }) => {
  return (
    <PageHeader
      className="site-page-header site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
      }}
      title={title}
      extra={[
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">{title}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      ]}
    ></PageHeader>
  );
};
