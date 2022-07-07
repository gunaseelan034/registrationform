import "./auth.css";
import { Button, Checkbox, Form, Input } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import login from "../../asset/login.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [spin, setSpin] = useState(false);

  const handleSubmit = () => {
    form.validateFields().then(() => {
      setSpin(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);
    });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={login} alt="Login" />
        </div>
        <Form name="login-form" initialValues={{ remember: true }} form={form}>
          <p className="form-title">Admin Login</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={handleSubmit}
            >
              {spin ? <LoadingOutlined /> : null}
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Auth;
