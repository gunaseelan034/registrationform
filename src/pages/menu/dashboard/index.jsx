import "./index.css";
import { Button, Layout, Spin, Table } from "antd";
import { PageHeaders } from "../../layout/components/pageheader/pageheader";
import { tableColumn } from "./column";
import { useEffect, useState } from "react";

import API from "../../../../src/services/index";
import { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";
const { Content } = Layout;

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
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
        <div style={{ float: "right" }}>
          <button onClick={getData} className="primary-btn">
            {spin ? <LoadingOutlined /> : <ReloadOutlined />} Refresh
          </button>
        </div>
        <Spin
          indicator={<LoadingOutlined style={{ color: "black" }} />}
          spinning={spin}
        >
          <Table
            style={{
              marginTop: "60px",
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
