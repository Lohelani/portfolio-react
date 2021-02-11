import React from "react";
import Container from "../components/Container/index";
import Row from "../components/Row/index";
import Col from "../components/Col/index";


function About() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row className="md-4">
                      <Col size="md-6">
                      <p>Hi there! Welcome to my page. My name is Lohelani. I am a full stack javascript web developer and graduate of Rutgers Coding Academy. I have experience using in jquery and the usage of css frameworks such as boorstrap and materialize. I am up to date using React.js, and have used databases such as MySQL and mongoDB (in addition I am familiar with nosql). I am familiar with creating APIs as well as a home made ORM (sequelize or mongoose). I created this portfolio website using react, mbdreact, and bootstrap, and deployed it to github Pages.</p>
                      {/* <iframe src="https://giphy.com/embed/LmNwrBhejkK9EFP504" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
                    </Col>

                    <Col size="md-6">
                    {/* <iframe src="https://giphy.com/embed/11vhCpFcD3um7m" width="480" height="451" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
                    <p>Here on this page you will find a portfolio of coding projects I've created (and yes, the minoions are an accurate representation of my general demeanor when my code works). Additionally, under the contact tab, you can reach out to me regarding these projects, or keep up with me on via various social media platforms and view my professional progress.</p>
                    </Col>
                    
                </Row>
            </Container>
            
        </div>
        
    )
}

export default About;
