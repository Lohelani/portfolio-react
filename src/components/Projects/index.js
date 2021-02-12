
import { MDBMask, MDBView, MDBBtn } from "mdbreact";


//style buttons still


function Projects(props) {
    return (
        <MDBView hover zoom>
            <img
                src={props.image}
                className="img-fluid"
                alt={props.name}
            />
            <MDBMask className="flex-center" overlay="black-strong">
                <p className="white-text p-3">
                    {props.description}
                    <br/>
                    <MDBBtn color="info" href={props.href} target="_blank">Click Here to View Application.</MDBBtn>
                    
                </p>

            </MDBMask>
        </MDBView>
        
    )
}

export default Projects;