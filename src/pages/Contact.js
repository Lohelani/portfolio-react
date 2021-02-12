import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import Style from "../components/Row/style.css"
import LICard from "../components/Card/LiCard";
import GmailCard from "../components/Card/GmailCard";
import GithubCard from "../components/Card/GithubCard";

function Contact() {
    return (
        <div>
            <Container>
                <Row className="md-4">
                    <Col size="md-6">
                        <h2 {...Style}>
                            Contact me:
                        </h2>
                    </Col>
                    <Col size="md-6">
                        <p>
                            Here you can find various ways to contact me: 
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <LICard />
                    </Col>
                    <Col size="md-6">
                        <GmailCard />
                    </Col>
                    <Col size="md-6">
                        <GithubCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;