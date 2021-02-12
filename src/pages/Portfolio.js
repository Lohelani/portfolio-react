
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import projects from "../portfolio.json";
import Projects from "../components/Projects/index";
import "./style.css";

class Portfolio extends React.Component {

    state = {
        projects
    }

    stateDef = () => {
        this.setState({ projects })
    }

    render() {
        return (
            <div>
                <MDBContainer className="mt-5">
                    <MDBRow>
                        <MDBCol md="6">
                            <p>
                                Below you can find just a few samples of my work from projects of mine.
                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <p>
                                Additionally my resume is linked <a href="https://docs.google.com/document/d/1-SU4N-ghM6YvrqeSM_CW8CsDfifgBwuyXL2iRKaV0iw/edit?usp=sharing" target="_blank"> HERE </a>
                            </p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="m-2">

                        {this.state.projects.map(project => (
                            <MDBCol md="6">
                                <Projects 

                                    stateDef={this.stateDef}
                                    key={project.id}
                                    id={project.id}
                                    name={project.name}
                                    image={project.image}
                                    description={project.description}
                                    href={project.href}
                                />
                            </MDBCol>
                        ))}
                    </MDBRow>
                </MDBContainer >
            </div >

        );
    }
}
export default Portfolio;

