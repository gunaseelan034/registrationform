import { Breadcrumb, Divider, PageHeader, Space } from "antd";

export const PageHeaders = ({ title, subTitle, icon, DownloadXlxs }) => {
  return (
    <PageHeader
      // className="site-page-header site-layout-background"
      style={{
        margin: "10px 16px",
        padding: "5px 24px",
      }}
      title={title}
      extra={[
        <Space>
          {DownloadXlxs}
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
