import react from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Projects(props) {
    return (
        <MDBView hover zoom>
                            <img
                                src={props.image}
                                className="img-fluid"
                                alt={props.name}
                            />
                            <MDBMask className="flex-center" overlay="black-strong">
                                <p className="white-text"> 
                                {props.description}
                                <a href={props.href} target="_blank"> Click Here to View Application. </a>
                                </p>

                            </MDBMask>
                        </MDBView>
        // <MDBContainer className="mt-5">
        //         <MDBRow>
        //             <MDBRow>
        //                 <MDBCol md="8">
        //                     <p>
        //                         Below you can find just a few samples of my work from projects of mine. 
        //                     </p>
        //                 </MDBCol>
        //                 <MDBCol md="6">
        //                     <p>
        //                         Additionally my resume is linked <a href="https://docs.google.com/document/d/1-SU4N-ghM6YvrqeSM_CW8CsDfifgBwuyXL2iRKaV0iw/edit?usp=sharing" target="_blank"> HERE </a>
        //                     </p>
        //                 </MDBCol>
        //             </MDBRow>
        //             <MDBCol md="6">
        //                 <MDBView hover zoom>
        //                     <img
        //                         src={PaB}
        //                         className="img-fluid"
        //                         alt=""
        //                     />
        //                     <MDBMask className="flex-center" overlay="black-strong">
        //                         <p className="white-text"> Hopefullyyy
        //                         <a href="https://whispering-stream-30896.herokuapp.com/" target="_blank"> Click Here to View Application. </a>
        //                         </p>

        //                     </MDBMask>
        //                 </MDBView>
        //             </MDBCol>
                    
        //             <MDBCol md="6">
        //                 <MDBView hover zoom>
        //                     <img
        //                         src={SMRtrvl}
        //                         className="img-fluid"
        //                         alt=""
        //                     />
        //                     <MDBMask className="flex-center" overlay="black-strong">
        //                         <p className="white-text">SMRtrvl: Travel during covid 19 pandemic poses extra risk Project Description: Goal of the project is to simplify the unknown risk of travel to countries that user is trying to travel to as well as display tickets within the users price range. Will allow users to find plane tickets to countries within their budget. API's Used: SkyScanner, COVID-19 Coronavirus Statistics.
        //                         <a href="https://lohelani.github.io/smarTRVL/" target="_blank"> Click Here to View Application. </a></p>
        //                     </MDBMask>
        //                 </MDBView>
        //             </MDBCol>
        //             </MDBRow>
        //             <MDBRow>
        //             <MDBCol md="6">
        //                 <MDBView hover zoom>
        //                     <img
        //                         src={UserDirectory}
        //                         className="img-fluid"
        //                         alt=""
        //                     />
        //                     <MDBMask className="flex-center" overlay="black-strong">
        //                         <p className="white-text">User Directory: For this application I used react to create an employee user page from an api provided by randomuser.me. Application allows employer to search for user by name, number, email, and phone number. As employer types, the list will narrow down to the specifs whihc they are searching. Functionality is broken into components. Application uses react bootstrap.
        //                         <a href="
        //                         https://lohelani.github.io/User-directory/" target="_blank"> Click Here to View Application. </a></p>

        //                     </MDBMask>
        //                 </MDBView>
        //             </MDBCol>
        //             <MDBCol md="6">
        //                 <MDBView hover zoom>
        //                     <img
        //                         src={WorkoutTracker}
        //                         className="img-fluid"
        //                         alt=""
        //                     />
        //                     <MDBMask className="flex-center" overlay="black-strong">
        //                         <p className="white-text">Workout Tracker: For this application I used mongoDB to create a database that would track the users workouts and progress by adding up the totals for the time a user worked out(duration), the distance they may have traveled if doing cardio, and the total number of weight lifted for the past seven workouts. I used router for the routes, mongoose for the schema, and heroku to connect launch the application. User also has the option to view all the toals on the stats page which gives them a visual for their progress.
        //                         <a href="https://pacific-journey-14962.herokuapp.com/" target="_blank"> Click Here to View Application. </a></p>

        //                     </MDBMask>
        //                 </MDBView>
        //             </MDBCol>
        //         </MDBRow>
        //         <MDBRow>
        //             <MDBCol md="6">
        //                 <MDBView hover zoom>
        //                     <img
        //                         src={WeatherDashboard}
        //                         className="img-fluid"
        //                         alt=""
        //                     />
        //                     <MDBMask className="flex-center" overlay="black-strong">
        //                         <p className="white-text">Weather-Dashboard: Provide the user the ability to search for a city. Show the current and future conditions for that city. Present the city name, the date, an icon representation of weather conditions, the temperature, the humidity the wind speed, and the UV index (the color should indicate whether the conditions are favorable, moderate, or severe) Add that city to the search history. Show the 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity. Clicking on a city in the search history present the current and future conditions for that city. Save search history to local storage and when loading the page present the last searched city forecast.
        //                         <a href="https://lohelani.github.io/weather-dashboard/" target="_blank"> Click Here to View Application. </a>
        //                         </p>

        //                     </MDBMask>
        //                 </MDBView>
        //             </MDBCol>
                    
        //             <MDBCol md="6">
        //                 <MDBView hover zoom>
        //                     <img
        //                         src={NoteTaker}
        //                         className="img-fluid"
        //                         alt=""
        //                     />
        //                     <MDBMask className="flex-center" overlay="black-strong">
        //                         <p className="white-text">Note Taker: This application is to be used as a note taker app. To run the code from your local device, clone repository to your vscode. Dependencies are fs, util, uuid, express, and router. once dependencies are installed, run node server.js in your terminal and open via link in terminal on port 3000. Completion of this app was accomplished by using get, post, and delete methods. I used router and expresss primarily and used uuid to target the text elements. for my write and read files i used async.
        //                         <a href="https://thawing-shelf-78357.herokuapp.com/" target="_blank"> Click Here to View Application. </a></p>
        //                     </MDBMask>
        //                 </MDBView>
        //             </MDBCol>
        //             </MDBRow>
        //     </MDBContainer>
    )
}

export default Projects;