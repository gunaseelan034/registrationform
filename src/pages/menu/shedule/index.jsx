import { CalendarOutlined, CaretRightOutlined, DownOutlined, ReconciliationOutlined, } from "@ant-design/icons"
import { Avatar, Button, Collapse, Divider, Dropdown, List, Skeleton, Space, Tag } from "antd"
import { Content } from "antd/lib/layout/layout"
import { PageHeaders } from "../../layout/components/pageheader/pageheader"
import InfiniteScroll from 'react-infinite-scroll-component';
import API from "../../../services/index";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../services/config";
import { MenuSelection } from "../dashboard/statusmenu";

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
                <div
                    id="scrollableDiv"
                    style={{
                        height: 400,
                        overflow: 'auto',
                        padding: '0 16px',
                    }}
                >
                    <InfiniteScroll
                        dataLength={data.length}
                        next={getInterViewList}
                        loader={
                            <Skeleton
                                avatar
                                paragraph={{
                                    rows: 1,
                                }}
                                active
                            />
                        }
                        scrollableTarget="scrollableDiv"
                    >
                        <h3><ReconciliationOutlined /> InterView Shedule List</h3>
                        <Divider />
                        <List
                            split
                            size='large'
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`${BASE_URL}/static/image/${item.applicant_photo}`} />}
                                        title={
                                            <Space>
                                                <span>{item.admission_no}</span>
                                                <Tag>{item.relevant_type}</Tag>
                                            </Space>
                                        }
                                        description={item.students[0].first_name + item.students[0].last_name}
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
                    </InfiniteScroll>
                </div>

            </Content>
        </div>
    )
}