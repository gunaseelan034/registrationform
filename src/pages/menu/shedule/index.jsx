import { CalendarOutlined, DownOutlined, ReconciliationOutlined, SearchOutlined, } from "@ant-design/icons"
import { Avatar, Button, Divider, Dropdown, List, Space, Tag } from "antd"
import { Content } from "antd/lib/layout/layout"
import { useEffect, useState } from "react";
import moment from "moment";

import { PageHeaders } from "../../layout/components/pageheader/pageheader"
import API from "../../../services/index";
import { BASE_URL } from "../../../services/config";
import { MenuSelection } from "../dashboard/statusmenu";
import { FilterInterView } from "./filter";


export const Shedule = () => {
    const [data, setData] = useState([]);
    const [visible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    const getInterViewList = () => {
        API.InterView.getInterViewList().then((resp) => {
            setData(resp.data.data);
            console.log(resp.data.data)
        }).catch((err) => { console.log(err) })
    }

    useEffect(() => {
        getInterViewList();
    }, [])
    return (
        <div>
            <PageHeaders title='Interview Schedules' icon={<CalendarOutlined />} />
            <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: "24px 16px 0",
                }}
            >

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3><ReconciliationOutlined /> Upcomming InterView</h3>
                    <Button style={{ float: 'right' }} onClick={openModal}><SearchOutlined /> Filter</Button>
                </div>
                <Divider />
                <List
                    split
                    size='large'
                    dataSource={data}

                    renderItem={(item) => (
                        <List.Item key={item.id}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={`${BASE_URL}/static/image/${item.applicant_photo}`} />}
                                title={
                                    <Space>
                                        <span>{item.admission_no}</span>
                                        <Tag>{item.relevant_type}</Tag>
                                        {/* /<Tag color='yellow'>{moment(item.interview_date).format('YYYY-MM-DD')}</Tag> */}
                                    </Space>
                                }
                                description={
                                    <>
                                        <p>{item.students[0].first_name + item.students[0].last_name}</p>
                                        <Space>
                                            <Tag color='blue'>{moment(item.interview_date).format('YYYY-MM-DD')}</Tag>
                                            <Tag color='yellow'>{item.interview_time}</Tag>
                                        </Space>
                                    </>
                                }
                            />
                            <Dropdown
                                overlay={
                                    <MenuSelection
                                        id={item.id}
                                        studentData={item}
                                        getData={getInterViewList}
                                    />
                                }
                                trigger={["click"]}
                            >
                                <Button
                                    type="text"
                                    size="small"
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <Space>
                                        Action
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </List.Item>
                    )}
                />
            </Content>

            <FilterInterView
                visible={visible}
                closeModal={closeModal}
            />
        </div>
    )
}