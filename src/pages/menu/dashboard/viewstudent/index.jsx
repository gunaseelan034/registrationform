import {
  Spin,
  Card,
  Layout,
  Avatar,
  Row,
  Col,
  Badge,
  Descriptions,
  Button,
  Divider,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  LoadingOutlined,
  DownOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import API from "../../../../services/index";
import { PageHeaders } from "../../../layout/components/pageheader/pageheader";
const { Content } = Layout;
const { Meta } = Card;

export const ViewAll = () => {
  const search = useLocation().search;
  const userId = new URLSearchParams(search).get("id");
  const [spin, setSpin] = useState(false);
  var [data, setData] = useState([]);
  var [studentData, setStudentData] = useState([]);
  var [fatherData, setFatherData] = useState([]);
  var [motherData, setMotherData] = useState([]);
  var [communicationAddress, setCommunicationAddress] = useState([]);
  var [permenantAddress, setPermenantAddress] = useState([]);

  const getUserData = (value) => {
    setSpin(true);
    API.dashboard
      .getAdmissionAppliedDetailsById(value)
      .then((resp) => {
        setData(resp.data.data[0]);
        setStudentData(resp.data.data[0].students[0]);
        setCommunicationAddress(
          JSON.parse(resp.data.data[0].addresses[0].communication_address)
        );
        setPermenantAddress(
          JSON.parse(resp.data.data[0].addresses[0].permanent_address)
        );
        setFatherData(
          JSON.parse(resp.data.data[0].parentdetails[0].father_details)
        );
        setMotherData(
          JSON.parse(resp.data.data[0].parentdetails[0].mother_details)
        );
        console.log(communicationAddress, "jj");
        setSpin(false);
      })
      .catch((err) => {
        setSpin(false);

        console.log(err);
      });
  };

  useEffect(() => {
    getUserData(userId);
  }, [userId]);
  return (
    <>
      <PageHeaders title={"View Details"} />
      <Content
        className="site-layout-background"
        style={{
          margin: "12px 16px",
          padding: 24,
          minHeight: "auto",
        }}
      >
        <Spin
          indicator={<LoadingOutlined style={{ color: "black" }} />}
          spinning={spin}
        >
          <Row>
            <Col span={5}>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<b style={{textTransform: "uppercase"}}>{studentData.first_name}</b>}
                  description={data.admission_no}
                />
              </Card>
            </Col>
            <Col span={19}>
              <Descriptions
                title="Student Info"
                bordered
                size={20}
                extra={<Button type="primary">Download<DownloadOutlined /></Button>}
              >
                <Descriptions.Item label={<b>Relevant Type</b>}>
                  {data.relevant_type}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Admission No</b>}>
                  {data.admission_no}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Gender</b>}>
                  {studentData.gender}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Age</b>}>
                  {studentData.age}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Application Status</b>}>
                  <Badge status="warning" text="Waiting" />
                </Descriptions.Item>
                <Descriptions.Item label={<b>Contact Email</b>}>
                  {data.email}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Contact Mobile</b>}>
                  {data.mobile}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Class</b>}>
                  {studentData.class}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Blood Group</b>}>
                  {studentData.blood_group}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Extra Curricular</b>}>
                  {studentData.extra_curricular}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Nationality</b>}>
                  {studentData.nationality}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Religion</b>}>
                  {studentData.religion}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Community</b>}>
                  {studentData.community}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Height</b>}>
                  {studentData.height}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Weight</b>}>
                  {studentData.weight}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Mother Tongue</b>}>
                  {studentData.mother_tongue}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Distance</b>}>
                  {studentData.distance}
                </Descriptions.Item>
                <Descriptions.Item label={<b>Proficiency In Sports</b>}>
                  {studentData.prof_in_sports}
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
          <Card style={{ padding: "5px", marginTop: "30px" }}>
            <Row>
              <Col span={12}>
                <Descriptions title="Father Details" bordered>
                  <Descriptions.Item label={<b>Father Name</b>} span={6}>
                    {fatherData.first_name + fatherData.last_name}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Contact Mail</b>} span={6}>
                    {fatherData.email}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Contact Mobile</b>} span={6}>
                    {fatherData.mobile_no}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Occupation</b>} span={6}>
                    {fatherData.occupation}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={12}>
                <Descriptions title="Mother Details" bordered>
                  <Descriptions.Item label={<b>Mother Name</b>} span={6}>
                    {motherData.first_name + motherData.last_name}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Contact Mail</b>} span={6}>
                    {motherData.email}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Contact Mobile</b>} span={6}>
                    {motherData.mobile_no}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Occupation</b>} span={6}>
                    {motherData.occupation}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Divider />
            <Row style={{ marginTop: "30px" }}>
              <Col span={12}>
                <Descriptions title="Communication Address" bordered>
                  <Descriptions.Item label={<b>Address 1</b>} span={6}>
                    {communicationAddress.address_1}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Address 2</b>} span={6}>
                    {communicationAddress.address_2}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>City</b>} span={6}>
                    {communicationAddress.city}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>pincode</b>} span={6}>
                    {communicationAddress.pin_code}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>State</b>} span={6}>
                    {communicationAddress.state}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={12}>
                <Descriptions title="Permanent Address" bordered>
                  <Descriptions.Item label={<b>Address 1</b>} span={6}>
                    {permenantAddress.address_1}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Address 2</b>} span={6}>
                    {permenantAddress.address_2}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>City</b>} span={6}>
                    {permenantAddress.city}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>pincode</b>} span={6}>
                    {permenantAddress.pin_code}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>State</b>} span={6}>
                    {permenantAddress.state}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Card>
        </Spin>
      </Content>
    </>
  );
};
