import React from "react";
import { Container } from "react-bootstrap";
import SocialMediaBar from "../SocialMedia/social";
import CustomButton from "../button/button";
import { Link } from 'react-router-dom';
import '../../asset/styles/Banner.css';


const Banner =() => {
    return(
        <Container>
            {/* Heading */}
            <div className="banner">
                {/* SocialmediaBar */}
                <div className="social">
                    <SocialMediaBar/>
                </div>
                <h1 className="h1">
                    Sparking their <br/> <span className="highlight">curiosity</span> &{" "}
                    creativity.
                </h1>
                <div className="container-description">
                    <p className="description">
                     We prepare young minds for an innovative future by igniting
                     imagination, fostering essential soft skills, and providing engaging
                     hands-on learning experiences in coding, STEM, and interactive classes.
                    </p>
                </div>
            </div>
            {/* Get Started Button */}
            <div className="button-container">
                <Link to="/register">
                    <CustomButton variant="primary">Get Started</CustomButton> 
                </Link>
            </div>
        </Container>
    );
}


export default Banner;