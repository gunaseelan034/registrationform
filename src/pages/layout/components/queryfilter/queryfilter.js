import {
  LoadingOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Form, Button, Col, Row, Select, Tooltip, Input, Space } from "antd";

export const QueryFilter = ({ spin, getData, setFilters }) => {
  const [form] = Form.useForm();
  const relevanOption = [
    { label: "General", value: "General" },
    { label: "Father", value: "Father" },
    { label: "Mother", value: "Mother" },
    { label: "Siblings", value: "Siblings" },
  ];

  const search = () => {
    form.validateFields().then((values) => {
      setFilters(values);
      getData();
    });
  };

  return (
    <>
      <div
        style={{
          margin: "8px 16px",
          padding: "5px 10px 0px 15px",
        }}
      >
        <Form form={form} layout="horizontal">
          <Row gutter={1}>
            <Col span={18}>
              <Row gutter={24}>
                <Col span={6}>
                  <Form.Item name="relevant_Type" label="Relevant Type">
                    <Select
                      placeholder="Relevant Type"
                      options={relevanOption}
                      style={{ width: "100%" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="class" label="Class">
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Select Class"
                    />
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item name="mobile" label="Mobile">
                    <Input placeholder="Mobile" />
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
                    onClick={getData}
                    shape="circle"
                    icon={!spin ? <ReloadOutlined /> : <LoadingOutlined />}
                  />
                </Tooltip>
                <Button
                  size="middle"
                  type="dashed"
                  onClick={() => form.resetFields()}
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
        </Form>
      </div>
    </>
  );
};
