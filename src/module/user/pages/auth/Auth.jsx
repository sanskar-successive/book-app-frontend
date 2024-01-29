import React, { useState } from 'react';
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { UserService } from '../../Service';


const AuthPage = () => {

    const [toggleAuthForm, setToggleAuthForm] = useState("login");
    const navigate = useNavigate();

    const handleLogin = async (values) => {

        try {
            const { data } = await UserService.userLogin(values);

            if (data.authorised) {
                localStorage.setItem("AUTH-TOKEN", data.token);
                navigate('/', { replace: true })
            }
        } catch (error) {
            console.log("Some error occurred", error);
        }
    }

    const handleRegister = async (values) => {
        try {
            const { data } = await UserService.userRegister(values);

        } catch (error) {
            
        }

    };

    if (toggleAuthForm === "login") {
        return (
            <>
                <Form
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={handleLogin}
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>

                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>

                    </Form.Item>

                </Form>
                <Button onClick={() => setToggleAuthForm("register")} >Create an Account!</Button>
            </>
        );
    }

    return (
        <>
            <Form
                onFinish={handleRegister}
                layout="horizontal"
                style={{
                    maxWidth: 600,
                }}
                scrollToFirstError
            >



                <Form.Item
                    name="firstName"
                    label="firstName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your FirstName!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="lastName"
                    label="lastName"
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    name={["contact", "email"]}
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>



                <Form.Item
                    name={["contact", "phone"]}
                    label="Phone Number"
                >
                    <Input
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>



                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The new password that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>




                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>

            </Form>
            <Button onClick={() => setToggleAuthForm("login")} >Login</Button>
        </>
    );

}

export default AuthPage