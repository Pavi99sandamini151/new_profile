import React from "react";
import {Typography} from "antd";
import { motion } from "framer-motion";

export const AboutUS: React.FC<any> = () => {

    const variants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            transition={{duration: 0.8, delay: 0.2, type: 'spring'}}
            variants={variants}
        >
            <div className="banner-container-v2" id={"experience"}>
                <Typography.Title className="font-bold">About US</Typography.Title>
                <Typography.Title level={2}>What is SBCAdocs?</Typography.Title>
                <div style={{ width: '100%'}}>
                    <Typography.Paragraph className="text-lg">
                        The SBCAdocs website provides SBCA members, via <a href={'/#pricing'}>subscription</a>, access to a database
                        of electronic document <a href={'/#home'}>collections</a> that have been developed and copyrighted by SBCA.
                        Subscribers can view individual documents, create Electronic Jobsite Packages and download,
                        print and email these document collections to customers and others in the market. <a href={'/#help'}>Learn how to use the Electronic
                        Jobsite Packages.</a>
                    </Typography.Paragraph>
                </div>


                <Typography.Title level={2}>API</Typography.Title>
                <div style={{ width: '100%'}}>
                    <Typography.Paragraph className="text-lg">
                        The Electronic Jobsite and Document Packages system provides access to a variety of API endpoints that
                        allow subscribers to create and manage jobsite packages from external applications. Contact SBCA staff to learn more.
                    </Typography.Paragraph>
                </div>

            </div>
        </motion.div>
    );
};
