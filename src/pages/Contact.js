import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
import Style from "../components/Row/style.css"

function Contact (){
    return (
        <div>
            <Container> 
                <Row className="md-4">
                    <h2 {...Style}>
                        Contact me:
                    </h2>
                    <Col size="md-6">

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;