import { Button, Descriptions, PageHeader, } from 'antd';

export const PageHeaders = ({title}) => {
  return (
    <PageHeader
      className="site-page-header site-layout-background"
      style={{
          margin: "24px 16px",
          padding: 24,
        }}
      title={title}
      extra={[
        <Button key="1" type='primary'>Operation</Button>
      ]}
    >
    </PageHeader>
  );
};
