import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";
// import Footer from "../components/Footer/index";
// import Navbar from "../components/Navbar";


function About() {
    return (
        <div>
            {/* <Navbar/> */}
            <Container style={{ marginTop: 30 }}>
                <Row className="md-4">
                      <Col size="md-6">
                      <p>Hi there! Welcome to my page. My name is Lohelani. I am currently a student at Rutgers Coding Academy working on becoming a full stack javascript web developer. I have experience using in jquery and the usage of css frameworks such as boorstrap and materialize. I am up to date using React.js, and have used databases such as MySQL and mongoDB (in addition I am familiar with nosql). I am familiar with creating APIs as well as a home made ORM (sequelize or mongoose). I created this portfolio website using react, mbdreact, and bootstrap, and deployed it to github Pages.</p>
                    </Col>
                    <Col size="md-6">
                    <p>Here on this page you will find a portfolio of coding projects I've created. Additionally, under the contact tab, you can reach out to me regarding these projects, or keep up with me on via various social media platforms and view my professional progress.</p>
                    </Col>
                    
                </Row>
            </Container>
            {/* <Footer/> */}
        </div>
        
    )
}

export default About;
