import React, {useEffect, useState} from "react";
import { Col, Image, Layout, Menu, Row } from "antd";
import {ArrowRightOutlined, MenuOutlined} from "@ant-design/icons";
import logo from "../assets/logo.png";
import _ from "lodash";

const { Header } = Layout;

export const HeaderComponent: React.FC = () => {
    const [activeSection, setActiveSection] = useState("home");

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            window.history.pushState(null, "", `#${sectionId}`);
        }
    };

    // Menu items
    const items = [
        {
            key: "1",
            label: "About Me",
            className: activeSection === "aboutme" ? "active" : "",
            onClick: () => scrollToSection("aboutme")
        },
        {
            key: "2",
            label: "Experince",
            className: activeSection === "experience" ? "active" : "",
            onClick: () => scrollToSection("experience")
        },
        {
            key: "3",
            label: "Skills",
            className: activeSection === "skills" ? "active" : "",
            onClick: () => scrollToSection("skills")
        },
        {
            key: "4",
            label: "Porjects",
            className: activeSection === "projects" ? "active" : "",
            onClick: () => scrollToSection("projects")
        },
        {
            key: "5",
            label: "Certifications",
            className: activeSection === "certifications" ? "active" : "",
            onClick: () => scrollToSection("certifications")
        },
        {
            key: "6",
            label: <span className="login-item"><a href="/app/">Blogs<ArrowRightOutlined style={{ fontWeight: 'bold'}} /> </a></span>,
        }
    ];

    const sectionKeyMap: Record<string, string> = {
        home: "1",
        about: "2",
        pricing: "3",
        help: "4",
        contact: "5"
    };

    useEffect(() => {
        const sections = ["experience", "aboutme", "skills", "projects", "certifications"];
        const throttledHandleScroll = _.throttle(() => {
            let closestSection = "";
            let minDistance = Infinity;

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = section;
                    }
                }
            });

            if (closestSection && closestSection !== activeSection) {
                setActiveSection(closestSection);
                window.history.replaceState(null, "", `#${closestSection}`);
            }
        }, 100);

        window.addEventListener("scroll", throttledHandleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
            throttledHandleScroll.cancel();
        };
    }, [activeSection]);

    return (
        <Header className="header h-full">
            <Row className="h-full flex items-center">
                <Col span={10} className="header-image-col flex items-center">
                    <a href="#" className="flex items-center">
                        <Image src={logo} preview={false} width={100} />
                    </a>
                </Col>
                <Col span={14} className="header-image-col h-[6vh] flex items-center justify-start bg-[#001529]">
                    <Menu
                        className="menu"
                        mode="horizontal"
                        theme="light"
                        overflowedIndicator={<MenuOutlined />}
                        items={items}
                        selectedKeys={[sectionKeyMap[activeSection]]}
                    />
                </Col>
            </Row>
        </Header>
    );
};

