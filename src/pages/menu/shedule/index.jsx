import { CalendarOutlined, CaretRightOutlined, DownOutlined, ReconciliationOutlined, SearchOutlined, } from "@ant-design/icons"
import { Avatar, Button, Collapse, Divider, Dropdown, List, Skeleton, Space, Tag } from "antd"
import { Content } from "antd/lib/layout/layout"
import { PageHeaders } from "../../layout/components/pageheader/pageheader"
import InfiniteScroll from 'react-infinite-scroll-component';
import API from "../../../services/index";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../services/config";
import { MenuSelection } from "../dashboard/statusmenu";
import moment from "moment";

const { Panel } = Collapse;


export const Shedule = () => {
    const [data, setData] = useState([]);

    const getInterViewList = () => {
        API.InterView.getInterViewList().then((resp) => {
            setData(resp.data.data);
            console.log(resp.data.data)
        }).catch((err) => { console.log(err) })

    }

    useEffect(() => {
        getInterViewList()
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

                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h3><ReconciliationOutlined /> Upcomming InterView</h3>
                    <Button style={{float: 'right'}}><SearchOutlined /> Filter</Button>
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
                                            <Tag color='yellow'>{moment(item.interview_date).format('YYYY-MM-DD')}</Tag>
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
        </div>
    )
}