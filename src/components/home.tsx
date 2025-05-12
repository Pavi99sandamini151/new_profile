import React, {useState} from "react";
import {Col, Image, List, Modal, Row, Typography} from "antd";
import { motion } from "framer-motion";
import {CloseOutlined} from "@ant-design/icons";
import ReactPlayer from "react-player";

export const Home: React.FC<any> = () => {
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleThumbnailClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const jobsitePackages = [
        { name: "Jobsite Package", url: "https://pubs.sbcacomponents.com/products/jobsite-package-50-packages" },
        { name: "Long Span Jobsite Package", url: "https://pubs.sbcacomponents.com/products/long-span-jobsite-package-25-packages" },
        { name: "Floor Truss Jobsite Package", url: "https://pubs.sbcacomponents.com/products/floor-truss-jobsite-package-50-packages" },
        { name: "Wall Panel Jobsite Package", url: "https://pubs.sbcacomponents.com/products/wall-panel-jobsite-package-50-packages" },
        { name: "Cold-Formed Steel Jobsite Package", url: "https://pubs.sbcacomponents.com/collections/cold-formed-steel/products/cold-formed-steel-jobsite-package-25-packages" }
    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1, once: true }}
            transition={{duration: 0.8, delay: 0.2, type: 'spring'}}
            variants={variants}
        >
            <div className="banner-container-v2" style={{ paddingTop: '20px'}} id={"aboutme"}>
                <Row>
                    <Col span={13} >
                        <div className="home-div">
                            <Typography.Paragraph className="text-lg text-justify">
                                SBCA’s Jobsite Packages allow component manufacturers (CMs) to provide customers with best practice information
                                regarding handling and installing components with every jobsite delivery. Now, these <a href={'/#pricing'}>economical packages</a> of key SBCA
                                documents are available for distribution in a job-specific and electronic format.
                            </Typography.Paragraph>
                        </div>
                        <div className="home-div">
                            <Typography.Paragraph className="text-lg text-justify">
                                Using SBCAdocs, <a href={'/#help'}>quickly and easily create</a> a digital document for a specific job, include it with truss design drawings and other
                                project-specific materials, print it yourself and/or email it to everyone involved in the project. This
                                ensures the key information is delivered to your customer and CMs have fulfilled your duty to warn.
                            </Typography.Paragraph>
                        </div>
                        <div className="home-div">
                            <Typography.Paragraph className="text-lg text-justify">
                                Currently, the following five pre-defined Jobsite Packages are available as digital documents:
                            </Typography.Paragraph>
                        </div>
                        <div className="home-div">
                            <Typography.Paragraph>
                                <List
                                    size="large"
                                    dataSource={jobsitePackages}
                                    renderItem={(item) => (
                                        <List.Item>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-lg">{item.name}</a>
                                        </List.Item>
                                    )}
                                />
                            </Typography.Paragraph>
                        </div>
                        <div className="home-div">
                            <Typography.Paragraph className="text-lg">
                                To sign-up for Electronic Jobsite Package, please fill out the For Technical Inquiries, please fill out the
                                <a href={'https://www.sbcacomponents.com/sign-up-for-electronic-jobsite-packages'}> Electronic Jobsite Packages form.</a>
                            </Typography.Paragraph>
                        </div>
                    </Col>
                    <Col className="pt-[50px] pl-[30px] w-full md:w-[45%]" span={11}>
                        <motion.div
                            key={'video'}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer w-full"
                        >
                            <Image
                                src={"https://img.youtube.com/vi/ifavZbfgj9E/maxresdefault.jpg"}
                                alt={`Thumbnail for video one`}
                                preview={false}
                                onClick={handleThumbnailClick}
                                className="rounded-lg w-full shadow-md"
                            />
                        </motion.div>
                    </Col>
                </Row>

            </div>
            <Modal
                open={isModalVisible}
                onCancel={handleModalClose}
                footer={null}
                centered
                width="80vw"
                style={{ maxWidth: "1000px" }}
                closeIcon={<div style={{ color: "#111111" }}><CloseOutlined /></div>}
                destroyOnClose={true}
            >
                <div className="p-5 flex items-center justify-center w-full">
                <ReactPlayer
                    url={"https://youtu.be/ifavZbfgj9E"}
                    controls={true}
                    playing={isModalVisible}
                    width="100%"
                    height="60vh"
                />
                </div>
            </Modal>
        </motion.div>
    );
};
