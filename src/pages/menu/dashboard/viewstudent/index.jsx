import {
  Spin,
  Card,
  Layout,
  Avatar,
  Row,
  Col,
  Descriptions,
  Button,
  Divider,
  Image,
  Space,
  Tooltip,
} from "antd";
import {
  LoadingOutlined,
  HomeFilled,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import API from "../../../../services/index";
import { PageHeaders } from "../../../layout/components/pageheader/pageheader";
import { TagStatus } from "./tagStatus";
import { Pdfdownloader } from "./pdfdownload/pdfDownload";
import { BASE_URL } from "../../../../services/config";
const { Content } = Layout;
const { Meta } = Card;

export const ViewAll = () => {
  const downloadRef = useRef();
  const search = useLocation().search;
  const userId = new URLSearchParams(search).get("id");
  const [spin, setSpin] = useState(false);
  var [data, setData] = useState([]);
  var [studentData, setStudentData] = useState([]);
  var [fatherData, setFatherData] = useState([]);
  var [motherData, setMotherData] = useState([]);
  var [aluminiDetails, setAluminiDetails] = useState([]);
  var [communicationAddress, setCommunicationAddress] = useState([]);
  var [permenantAddress, setPermenantAddress] = useState([]);

  const getUserData = (value) => {
    setSpin(true);
    API.dashboard
      .getAdmissionAppliedDetailsById(value)
      .then((resp) => {
        setData(resp.data.data[0]);
        setAluminiDetails(JSON.parse(resp.data.data[0].alumini_details));
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
        setSpin(false);
      })
      .catch((err) => {
        setSpin(false);
      });
  };

  useEffect(() => {
    getUserData(userId);
  }, [userId]);
  return (
    <>
      <PageHeaders
        title={"View Details"}
        subTitle={"Dashboard"}
        icon={<HomeFilled />}
      />
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
          <div ref={downloadRef}>
            <Row gutter={24}>
              <Col span={5}>
                <Card
                  hoverable
                  cover={
                    <>
                      <Card>
                        {" "}
                        <Image
                          style={{
                            textAlign: "center",
                            padding: "10px",
                          }}
                          width={160}
                          preview={false}
                          src={`${BASE_URL}/static/image/${data.applicant_photo}`}
                        ></Image>
                      </Card>
                    </>
                  }
                  actions={[
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    ></div>,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar
                        style={{
                          color: "#eeeee",
                          textTransform: "uppercase",
                        }}
                        icon={<UserOutlined />}
                      />
                    }
                    title={<b>{studentData.first_name}</b>}
                    description={data.admission_no}
                  />
                </Card>
              </Col>
              <Col span={19}>
                <Descriptions
                  title="Student Info"
                  bordered
                  layout="horizontal"
                  size="small"
                  extra={
                    <div style={{ display: "flex" }}>
                      <Space>
                        <Pdfdownloader
                          downloadRef={downloadRef}
                          data={data}
                          studentData={studentData}
                        />
                        <Tooltip title="View Adhar Photo">
                          <Button>
                            <a
                              target="_blank"
                              href={`${BASE_URL}/static/image/${data.adhar_photo}`}
                            >
                              View Adhar
                            </a>
                          </Button>
                        </Tooltip>
                        <Tooltip title="View Age Proof">
                          <Button>
                            <a
                              target="_blank"
                              href={`${BASE_URL}/static/image/${data.age_proof}`}
                            >
                              View Age Proof
                            </a>
                          </Button>
                        </Tooltip>
                      </Space>
                    </div>
                  }
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
                  <Descriptions.Item label={<b>DOB</b>}>
                    {studentData.dob}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Application Status</b>}>
                    <TagStatus result={data} />
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
                  <Descriptions.Item label={<b>Adhar Number</b>}>
                    {studentData.aadhar_no}
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
                    {studentData.height + " " + "Cm"}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Weight</b>}>
                    {studentData.weight + " " + "kg"}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Mother Tongue</b>}>
                    {studentData.mother_tongue}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Distance</b>}>
                    {studentData.distance + " " + "km"}
                  </Descriptions.Item>
                  <Descriptions.Item label={<b>Proficiency In Sports</b>}>
                    {studentData.prof_in_sports}
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
            <Card style={{ padding: "1px", marginTop: "10px" }}>
              <Row gutter={24}>
                {data.relevant_type === "General" ? null : (
                  <Col span={8}>
                    <Descriptions size="small" title="Alumni Details" bordered>
                      {data.relevant_type !== "Siblings" ? (
                        <>
                          <Descriptions.Item label={<b>Name</b>} span={6}>
                            {aluminiDetails.name}
                          </Descriptions.Item>
                          <Descriptions.Item
                            label={<b>Year Of Passed Out</b>}
                            span={6}
                          >
                            {aluminiDetails.year}
                          </Descriptions.Item>
                        </>
                      ) : (
                        <>
                          <Descriptions.Item label={<b>Name</b>} span={6}>
                            {aluminiDetails.name}
                          </Descriptions.Item>
                          <Descriptions.Item label={<b>Class</b>} span={6}>
                            {aluminiDetails.class}
                          </Descriptions.Item>
                          <Descriptions.Item label={<b>Setion</b>} span={6}>
                            {aluminiDetails.section}
                          </Descriptions.Item>
                        </>
                      )}
                    </Descriptions>
                  </Col>
                )}
                <Col span={data.relevant_type === "General" ? 12 : 8}>
                  <Row>
                    <Col span={15}>
                      <Descriptions
                        size="small"
                        title="Father Details"
                        bordered
                      >
                        <Descriptions.Item label={<b>Father Name</b>} span={6}>
                          {fatherData.first_name + fatherData.last_name}
                        </Descriptions.Item>
                        <Descriptions.Item label={<b>Contact Mail</b>} span={6}>
                          {fatherData.email}
                        </Descriptions.Item>
                        <Descriptions.Item label={<b>Contact Mobile</b>} span={6}>
                          <>
                            {fatherData.mobile_no}{" "}
                          </>
                        </Descriptions.Item>
                        <Descriptions.Item label={<b>Occupation</b>} span={6}>
                          {fatherData.occupation}
                        </Descriptions.Item>
                      </Descriptions>
                    </Col>
                    <Col span={9}>
                      <Image
                        style={{ float: 'right', }}
                        width={100}
                        src={`${BASE_URL}/static/image/${data.father_photo}`}
                      /></Col>
                  </Row>
                </Col>
                <Col span={data.relevant_type === "General" ? 12 : 8}>
                  <Row>
                    <Col>
                      <Descriptions
                        size="small"
                        title="Mother Details"
                        bordered
                      >
                        <Descriptions.Item label={<b>Mother Name</b>} span={6}>
                          {motherData.first_name + motherData.last_name}
                        </Descriptions.Item>
                        <Descriptions.Item label={<b>Contact Mail</b>} span={6}>
                          {motherData.email}
                        </Descriptions.Item>
                        <Descriptions.Item label={<b>Contact Mobile</b>} span={6}>
                          <>
                            {motherData.mobile_no}{" "}
                          </>
                        </Descriptions.Item>
                        <Descriptions.Item label={<b>Occupation</b>} span={6}>
                          {motherData.occupation}
                        </Descriptions.Item>
                      </Descriptions>
                    </Col>
                    <Col>
                      <Image
                        style={{ float: 'right', }}
                        width={100}
                        src={`${BASE_URL}/static/image/${data.mother_photo}`}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Divider />
              <Row style={{ marginTop: "10px" }}>
                <Col span={12}>
                  <Descriptions
                    size="small"
                    title="Communication Address"
                    bordered
                  >
                    <Descriptions.Item label={<b>Address 1</b>} span={6}>
                      {communicationAddress.address_1}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>Address 2</b>} span={6}>
                      {communicationAddress.address_2}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>City</b>} span={6}>
                      {communicationAddress.city}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>State</b>} span={6}>
                      {communicationAddress.state}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>Pincode</b>} span={6}>
                      {communicationAddress.pin_code}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
                <Col span={12}>
                  <Descriptions size="small" title="Permanent Address" bordered>
                    <Descriptions.Item label={<b>Address 1</b>} span={6}>
                      {permenantAddress.address_1}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>Address 2</b>} span={6}>
                      {permenantAddress.address_2}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>City</b>} span={6}>
                      {permenantAddress.city}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>State</b>} span={6}>
                      {permenantAddress.state}
                    </Descriptions.Item>
                    <Descriptions.Item label={<b>Pincode</b>} span={6}>
                      {permenantAddress.pin_code}
                    </Descriptions.Item>
                  </Descriptions>
                </Col>
              </Row>
            </Card>
          </div>
        </Spin>
      </Content>
    </>
  );
};
