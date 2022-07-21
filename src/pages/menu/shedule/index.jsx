import { CalendarOutlined, LoadingOutlined } from "@ant-design/icons"
import { Avatar, Divider, List, Skeleton } from "antd"
import { Content } from "antd/lib/layout/layout"
import { PageHeaders } from "../../layout/components/pageheader/pageheader"
import InfiniteScroll from 'react-infinite-scroll-component';

export const Shedule = () => {
    
    return (
        <div>
            <PageHeaders title='Interview Schedules' icon={<CalendarOutlined />} />
            <Content
                className="site-layout-background"
                style={{
                    margin: "12px 16px",
                    padding: 24,
                    margin: "24px 16px 0",
                    overflow: "initial",
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
                        dataLength={8}
                        loader={
                            <Skeleton
                                avatar
                                paragraph={{
                                    rows: 1,
                                }}
                                active
                            />
                        }
                    >
                        <List
                            dataSource={[]}
                            renderItem={(item) => (
                                <List.Item key={item.email}>
                                    <List.Item.Meta
                                        avatar={<Avatar src={``} />}
                                        title={<a href="https://ant.design">{}</a>}
                                    />
                                    <div>Content</div>
                                </List.Item>
                            )}
                        />
                    </InfiniteScroll>
                </div>

            </Content>
        </div>
    )
}