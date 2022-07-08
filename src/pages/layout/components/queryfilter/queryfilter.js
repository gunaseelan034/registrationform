import {
  LoadingOutlined,
  ReloadOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { AutoComplete, Button, Col, Row, Select, Tooltip } from "antd";
import { useState } from "react";

export const QueryFilter = ({ spin, getData }) => {
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const [options, setOptions] = useState([]);
  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  return (
    <>
      <Row
        gutter={20}
        style={{
          margin: "12px 16px",
          padding: 24,
        }}
      >
        <Col span={5}>
          <span>Admission Id</span>
          <AutoComplete
            options={options}
            style={{ width: 200, marginLeft: "10px" }}
            placeholder="Search"
            onSelect={onSelect}
            onSearch={onSearch}
          />
        </Col>
        <Col span={5}>
          <span>Class</span>
          <Select
            placeholder="Select Class"
            style={{ width: 200, marginLeft: "10px" }}
          />
        </Col>
        <Col span={5}>
          <span>Section</span>
          <Select
            placeholder="Select Section"
            style={{ width: 200, marginLeft: "10px" }}
          />
        </Col>
        <Col span={5}>
          <span>Status</span>
          <Select
            placeholder="Select Status"
            style={{ width: 200, marginLeft: "10px" }}
          />
        </Col>
        <Col span={4}>
          <Tooltip title="Reload">
            <Button
              size="middle"
              shape="circle"
              onClick={getData}
              style={{ float: "right", marginLeft: "10px" }}
            >
              {spin ? <LoadingOutlined /> : <ReloadOutlined />}
            </Button>
          </Tooltip>
          <Button type="primary" style={{ float: "right" }}>
            <SearchOutlined />
            Search
          </Button>
          <Button
            type="default"
            style={{ float: "right", marginRight: "10px" }}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </>
  );
};
