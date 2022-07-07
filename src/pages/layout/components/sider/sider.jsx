import { Layout, Menu } from "antd";
import { routes } from "../../../../routes/index";
import "./sider.css";
const { Sider } = Layout;

export const Siders = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img
          style={{marginTop: '18px'}}
          src="http://www.sts-school.edu.in/wp-content/uploads/2019/10/Best-School-in-Meerut-1.png"
          width={50}
        />
      </div>
      <Menu
        style={{
          marginTop: "18px",
        }}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={routes}
      />
    </Sider>
  );
};
