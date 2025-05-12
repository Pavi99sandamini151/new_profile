import React from "react";
import {Typography} from "antd";
import { motion } from "framer-motion";

export const Legal: React.FC<any> = () => {
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
            <div className="banner-container-v2" id={"legal"}>
                <Typography.Title className="font-bold">Legal</Typography.Title>
            </div>
        </motion.div>
    );
};
