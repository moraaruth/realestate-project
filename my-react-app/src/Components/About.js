import React from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";
import './Style.css'


function About() {
    return (
        <>
            <AppNavbar />
            {/* <div className="about-container">
        <h1 className="about-title">ABOUT <br /> PERFECT <br /> HOMES </h1>
        <p className="about-para">At Perfect Homes, we are dedicated to providing exceptional real estate services to our clients. Our team of experienced and knowledgeable agents work tirelessly to ensure that every transaction is smooth and stress-free for our clients. Whether you are looking to buy, sell, or rent a property, we are here to guide you every step of the way.</p>
        </div>

        <br /> */}
            {/* <h3 >Perfect <span style={{ color: "#50C878" }}>Homes</span> </h3> */}
            {/* <h3>
                <Link to="/" className="home-link"> 
                    Perfect <span style={{ color: "#50C878"}}>Homes</span>
                </Link>
            </h3> */}
            <div className="header">
                <h1>ABOUT </h1>
                <br />
                <p>
                    <Link to="/about" className="services-link" >Home / <span className="greyed-text">About</span></Link>
                </p>
            </div>
            <div className="divider"></div> {/* Added line divider */}

            <div className="about-container1">
                <div className="about-text">
                    <p>Our commitment to excellence is what sets us apart from our competitors. We take pride in our attention to detail and personalized approach to each client's unique needs.</p>
                    <p>We understand that every real estate transaction is different, and we tailor our services to meet those individual needs. Contact us today to learn more about how we can help you achieve your real estate goals.</p>
                    <button className="button1-style">Learn More</button>

                </div>
                <div className="about-image">
                    <img src="https://cdn.pixabay.com/photo/2017/05/18/11/04/key-2323278_640.jpg" alt="About Us" />
                </div>

            </div>
            <br /><br />
            <div style={{ backgroundColor: "#f6f6f3", padding: "10px", fontSize: "24px"}}>
                <h3 style={{ padding: "10px", fontSize: "45px"}}>The Team</h3>

            <Testimonial
            style={{ backgroundColor: '#f6f6f3' }}
          photoUrl='https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_640.png'
          name='Dakari'
          testimonial='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?'
          role='Manager'

        />
        <Testimonial
          photoUrl='https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_640.png'
          name='Imani'
          testimonial='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias? '
          role='Manager'

        />
        <Testimonial
          photoUrl='https://cdn.pixabay.com/photo/2013/07/13/10/24/woman-157149_640.png'
          name='Ruth'
          testimonial='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis inventore cumque tenetur laboriosam, minus culpa doloremque odio, neque molestias?'
          role='Manager'

        />
        </div><br />

            <Footer />
        </>
    )




}

export default About