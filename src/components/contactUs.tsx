import React from "react";
import {Button, Col, Form, Input, notification, Row, Space, Typography} from "antd";
import { motion } from "framer-motion";
import TextArea from "antd/es/input/TextArea";
import {contactUsProps, sendContactEmail} from "../api";

export const ContactUs:React.FC = () => {

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const layout = {
        labelCol: { span: 0 },
        wrapperCol: { span: 24 },
    };

    const [form] = Form.useForm();

    const [api, contextHolder] = notification.useNotification();
    type NotificationType = 'success' | 'error';
    const openNotificationWithIcon = (type: NotificationType, title: string, message: string) => {
        api[type]({
            message: title,
            description: message,
        });
    };

    const onFinish = async (values: contactUsProps) => {
        const res = await sendContactEmail(values)

            if(res.status == 200) {
                openNotificationWithIcon('success', 'Success', 'Email sent successfully')
                onReset()
            } else{
                openNotificationWithIcon('error', 'Error', 'Error sending email')
            }
    };

    const onReset = () => {
        form.resetFields();
    };

    const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
        <>
            {label}
            {required ? <p style={{color:"red"}}>&nbsp;*</p> : <p></p>}
        </>
    );

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            transition={{duration: 0.8, delay: 0.2, type: 'spring'}}
            variants={variants}
        >
            {contextHolder}
            <div className="banner-container-v2" id={"certifications"}>
                <Typography.Title className="font-bold">Contact US</Typography.Title>
                <div className={"contact-container"} style={{ paddingTop: 20, paddingBottom: 30}}>
                    <Col xs={24} sm={24} md={24} lg={24} className="form-container">
                        <Row className="w-full flex items-center">
                            <Typography.Text className="text-[19px]">
                                To sign up for the Electronic Jobsite Package, please fill out the form below. For technical inquiries, please fill out the technical support form.{' '}
                                <a href={'https://www.sbcacomponents.com/sign-up-for-electronic-jobsite-packages'}>Electronic Jobsite Packages form.</a>
                            </Typography.Text>
                            <Form
                                {...layout}
                                form={form}
                                name="control-hooks"
                                onFinish={onFinish}
                                className="w-full text-[15px] mt-4"
                                initialValues={{ requiredMarkValue: true }}
                                requiredMark={customizeRequiredMark}
                            >
                                <Row gutter={20}>

                                    <Col xs={24} sm={12}>
                                        <Form.Item
                                            name="firstName"
                                            rules={[{ required: true, message: "Please Enter First Name" }]}
                                        >
                                            <Input className="input-filed" placeholder="Enter Your First Name" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12}>
                                        <Form.Item
                                            name="lastName"
                                            rules={[{ required: true, message: "Please Enter Last Name" }]}
                                        >
                                            <Input className="input-filed" placeholder="Enter Your Last Name" />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row gutter={16}>
                                    <Col xs={24} sm={12}>
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                { type: "email", message: "The input is not valid Email." },
                                                { required: true, message: "Please Enter Email" },
                                            ]}
                                        >
                                            <Input className="input-filed" placeholder="Enter Your Email" />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} sm={12}>
                                        <Form.Item
                                            name="description"
                                            rules={[{ required: true, message: "Please Enter Description" }]}
                                            style={{ width: '100%'}}
                                        >
                                            <TextArea className="input-filed" placeholder="Enter Description" rows={4} showCount maxLength={2000}/>
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={24} >
                                        <Space style={{ display: "flex", justifyContent: "flex-end", width: '100%' }}>
                                            <Button htmlType="button" onClick={onReset} className="clear-button">
                                                CLEAR
                                            </Button>
                                            <Button type="primary" htmlType="submit" className="send-button">
                                                CONTACT US
                                            </Button>
                                        </Space>
                                    </Col>
                                </Row>

                            </Form>
                        </Row>
                    </Col>
                </div>
            </div>
        </motion.div>
    )
}