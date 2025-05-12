import React, { useState } from "react";
import {Modal, Typography, Image, List} from "antd";
import { motion } from "framer-motion";
import { unstable_batchedUpdates } from "react-dom";
import ReactPlayer from "react-player";
import { CloseOutlined } from "@ant-design/icons";

export const Help: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    const handleThumbnailClick = () => {
        unstable_batchedUpdates(() => {
            setIsModalVisible(true);
        });
    };

    const handleModalClose = () => {
        unstable_batchedUpdates(() => {
            setIsModalVisible(false);
        });
    };

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    const data = [
        'If this is your company’s first use of the system, it will be necessary to submit your logo and register for a monthly subscription.',
        'Sign in to the secure SBCAdocs website. The system will recognize your member status and location based on your email address.',
        'From the Home page or the My Packages page, click the “+New Jobsite Package” button.',
        'Enter ALL required information and select the type of package you’d like to create.',
        'Click publish. The system will merge your chosen package files into a PDF, watermark each page with the job number, jobsite address, and your logo.',
        'Once complete, the jobsite package is added to your list on the “My Packages” page.',
        'From the “My Packages” page, you can copy the PDF link into an email to send the electronic jobsite package to the customer. In addition, a QR code is generated and can be included on the shipment. A quick scan of the QR code with a smartphone gives framers in the field immediate access to the documents.'

    ];

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            variants={variants}
        >
            <div className="banner-container-v2" id={"help"} >
                <Typography.Title className="font-bold">
                    Help
                </Typography.Title>
                <Typography.Title level={3}>
                    How to Use the Electronic Jobsite Package System
                </Typography.Title>

                < div style={{ width: "100%" }}>
                    <Typography.Paragraph>
                        <List
                            size="large"
                            className="text-lg"
                            dataSource={data}
                            renderItem={(item) => (
                                <List.Item style={{ display: "list-item", listStyleType: "decimal", marginLeft: "20px" }}>
                                    {item}
                                </List.Item>
                            )}
                        />
                    </Typography.Paragraph>
                </div>

                <div className="help-video-div">
                    <motion.div
                        key={'video'}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-pointer w-2/5"
                    >
                        <Image
                            src={"https://img.youtube.com/vi/tyRozr2PVig/maxresdefault.jpg"}
                            alt={`Thumbnail for video two`}
                            preview={false}
                            onClick={handleThumbnailClick}
                            className="rounded-lg w-full shadow-md"
                        />
                    </motion.div>
                </div>
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
                        url="https://www.youtube.com/watch?v=tyRozr2PVig"
                        controls
                        playing={isModalVisible}
                        width="100%"
                        height="60vh"
                    />
                </div>
            </Modal>
        </motion.div>
    );
};
