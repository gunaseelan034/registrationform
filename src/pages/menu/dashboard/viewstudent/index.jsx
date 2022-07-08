import { Spin, Card, Layout } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { PageHeaders } from "../../../layout/components/pageheader/pageheader";
const { Content } = Layout;

export const ViewAll = () => {
  return (
    <>
      <PageHeaders title={"View Details"} />
      
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
            spinning={true}
          >
            <Card
              style={{
                marginTop: "60px",
              }}
            ></Card>
            />
          </Spin>
        </Content>
    </>
  );
};
