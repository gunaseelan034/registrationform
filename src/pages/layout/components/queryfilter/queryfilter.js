import {
  LoadingOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Form, Button, Col, Row, Select, Tooltip, Input, Space } from "antd";

export const QueryFilter = ({ spin, resetParams, search }) => {
  const relevanOption = [
    { label: "General", value: "General" },
    { label: "Father", value: "Father" },
    { label: "Mother", value: "Mother" },
    { label: "Siblings", value: "Siblings" },
  ];
  const classes = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "10", value: "10" },
    { label: "11", value: "11" },
    { label: "12", value: "12" },
  ];

 
  return (
    <>
      <div
        style={{
          margin: "8px 16px",
          padding: "5px 10px 0px 15px",
        }}
      >
        <Row gutter={1}>
          <Col span={18}>
            <Row gutter={24}>
              <Col span={6}>
                <Form.Item name="relevant_type" label="Relevant Type">
                  <Select
                    allowClear
                    placeholder="Relevant Type"
                    options={relevanOption}
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="class" label="Class">
                  <Select
                    allowClear
                    style={{ width: "100%" }}
                    placeholder="Select Class"
                    options={classes}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="mobile" label="Mobile">
                  <Input placeholder="Mobile" 
                    allowClear
                    />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <Space style={{ float: "right" }}>
              <Tooltip title="Reload Table">
                <Button
                  size="middle"
                  type="dashed"
                  onClick={resetParams}
                  shape="circle"
                  icon={!spin ? <ReloadOutlined /> : <LoadingOutlined />}
                />
              </Tooltip>
              <Button
                size="middle"
                type="dashed"
                onClick={resetParams}
              >
                Reset
              </Button>
              <Button
                style={{ marginLeft: "10px" }}
                icon={<SearchOutlined />}
                type="primary"
                size="middle"
                onClick={search}
              >
                Search
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
};
