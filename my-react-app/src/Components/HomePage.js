// HomePage.js
import React from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import HomepageCarousel from "./HomepageCarousel";
import './AppNavbar.css';
import BoxCard from "./BoxCard";
import Popular from "./Popular";
import Testimonial from "./Testimonial";
import './Properties.css'



function HomePage() {
  // const imageUrl = "https://cdn.pixabay.com/photo/2016/12/30/07/56/bathroom-1940171_640.jpg"; 

  return (
    <>
      <AppNavbar />

      <div
      // style={{
      //   background: `url(${imageUrl})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "calc(100vh - 120px)", // Adjust the height to account for the navbar and footer
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   position: "relative",
      //   width: "100%"
      // }}
      >
        <HomepageCarousel />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <div className="search-bar-container">
           <h1 className="title">Welcome to Perfect Homes</h1> 
            <p>Let’s find a home that’s perfect for you</p>



          </div>


        </div>
        <div className="box-card-container">

          <BoxCard
            titleImage="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=612x612&w=0&k=20&c=9bA_E6bi430LQiIg7wahxg5aNph5mIzD8SB0oiEtvMs="
            content="Buy a House"
          
          />
          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2018/04/07/03/06/real-estate-3297625_640.jpg"
            content="Rent a House"
          />
          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2018/01/28/10/08/purchase-3113198_640.jpg"

            content="Contact Agent"
          />

        </div>
        <br /><br />
        <div >
          <div>
            <h3 className="header">POPULAR PROPERTIES </h3>
            <Link to="/properties">
              <button className="button-style">View all properties</button>
            </Link>
          </div>

          <div className="popular-card-container">
            <Popular
              titlePhoto="https://cdn.pixabay.com/photo/2017/08/10/15/38/floor-2623897_640.jpg"
              price="ksh 1.6M"
              estate="Bumbani estate"
              location="Kilimani"
            />
            <Popular
              titlePhoto="https://cdn.pixabay.com/photo/2017/06/18/21/31/house-2417321_640.jpg"
              price="ksh 1.2M"
              estate="Kahuhia estate"
              location="Lavington"
            />
            <Popular
              titlePhoto="https://cdn.pixabay.com/photo/2017/08/25/20/01/gallery-2681238_640.jpg"
              price="ksh 1M"
              estate="Mambo yote estate"
              location="Kileleshwa"
            />

          </div>
        </div>
        <Testimonial
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
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
