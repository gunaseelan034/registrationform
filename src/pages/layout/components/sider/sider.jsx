import { CalendarOutlined, DashboardOutlined, DashOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { routes } from "../../../../routes/index";
import "./sider.css";
const { Sider } = Layout;

export const Siders = ({ collapsed }) => {
  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          style={{ marginTop: "18px" }}
          src="http://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png"
          width={50}
        />
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{
        marginTop: "18px",
      }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <span >Deshboard</span>
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined />}>
          <span >Schedule</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
