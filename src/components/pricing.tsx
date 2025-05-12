import React from "react";
import {List, Typography} from "antd";
import { motion } from "framer-motion";

export const Pricing: React.FC<any> = () => {
    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };
    const data = [
        'Available to members only',
        'Minimum subscription costs $33 per month and includes up to 300 pages',
        'After 300 pages in one month, $0.11 per page'
    ];
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            transition={{duration: 0.8, delay: 0.2, type: 'spring'}}
            variants={variants}
        >
            <div className="banner-container-v2" id={"pricing"}>
                <Typography.Title className="font-bold">Pricing</Typography.Title>
                <div className="w-full pt-[10px]">
                    <Typography.Title level={2}>Electronic Jobsite Packages Subscription</Typography.Title>
                    <div className="w-full">
                        <Typography.Paragraph className="text-lg">
                            Access to all current Electronic Jobsite Packages.
                            <List
                                size="large"
                                className="text-lg"
                                dataSource={data}
                                renderItem={(item) => (
                                    <List.Item className="list-item ml-5">
                                        {item}
                                    </List.Item>
                                )}
                            />
                        </Typography.Paragraph>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
