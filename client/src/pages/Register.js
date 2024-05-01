import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm(); // Add this line to get access to the form instance

  // form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());

      // Additional validation for password and confirm password
      if (values.password !== values.confirmPassword) {
        dispatch(hideLoading());
        message.error("Passwords do not match");
        return;
      }

      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());

      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.error(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          form={form} // Add this line to pass the form instance
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
         

          <h3 className="text-center">Register Form</h3>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'Please enter a valid email address.',
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone number!' },
              {
                pattern: /^[1-9]\d{9}$/, // Add your phone number regex pattern here
                message: 'Please enter a valid 10-digit phone number.',
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[
              { required: true, message: 'Please input your age!' },
              {
                pattern: /^(0?[1-9]|[1-9][0-9])$/, // Add your age regex pattern here
                message: 'Please enter a valid age.',
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="District"
            name="district"
            rules={[{ required: true, message: 'Please input your district!' }]}
          >
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            // hasFeedback
            // rules={[
            //   { required: true, message: 'Please input your password!' },
            //   {
            //     pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Add your password regex pattern here
            //     message: 'Password must contain at least 8 characters, including letters and numbers.',
            //   },
            // ]}
          >
            <Input.Password
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>

          <Form.Item
  label="Confirm Password"
  name="confirmPassword"
  hasFeedback
  rules={[
    { required: true, message: 'Please confirm your password!' },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject('The two passwords do not match!');
      },
    }),
  ]}
>
  <Input.Password
    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
  />
</Form.Item>
          <Link to="/login" className="m-2">
            Already a user? Login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;