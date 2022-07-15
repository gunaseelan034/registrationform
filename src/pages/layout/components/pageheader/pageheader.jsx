import {
  Breadcrumb,
  Divider,
  PageHeader,
  Space,
} from "antd";

export const PageHeaders = ({ title,subTitle, icon }) => {
  return (
    <PageHeader
      className="site-page-header site-layout-background"
      style={{
        margin: "24px 16px",
        padding: "10px 24px",
      }}
      title={title}
      extra={[
        <Space>
          <Divider />
          <Breadcrumb>
            <Breadcrumb.Item>{icon}</Breadcrumb.Item>
            <Breadcrumb.Item>{subTitle}</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">{title}</a>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Space>,
      ]}
    ></PageHeader>
  );
};
