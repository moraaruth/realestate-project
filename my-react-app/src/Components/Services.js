import React from 'react';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import BoxCard from './BoxCard';
import Footer from './Footer';
import './Properties.css'
import './Services.css'


function Services() {
    return (
        <div>
            <AppNavbar />
            <div className="header">
                <h1>SERVICES</h1>
                <br />
                <p>
                    <Link to="/services" className="services-link" >Home / <span className="greyed-text">Services</span></Link>
                </p>
            </div>

            <div className="box-card-container1">

                <BoxCard
                    titleImage="https://cdn.pixabay.com/photo/2017/08/16/15/52/puzzle-pieces-2648214_640.jpg"
                    content="New Properties"
                    description="Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else."
                    linkTo="/new-properties"
                    
                />
                <BoxCard
                    titleImage="https://media.istockphoto.com/id/1412574838/vector/real-estate-tycoons-send-cameras-to-watch-the-market-to-determine-investments-in-homes-and.webp?b=1&s=612x612&w=0&k=20&c=KGRzUquVP-oxDqWtROi8lOCMXTFLPcJnp-0u7tMhYUM="
                    content="Building for sale"
                    description="Welcome to an exceptional opportunity to acquire a prime commercial building strategically located in one of the most vibrant and sought-after business districts. This remarkable property offers an array of possibilities for savvy investors and business owners seeking a prestigious and versatile space."
                />
                <BoxCard
                    titleImage="https://cdn.pixabay.com/photo/2014/03/24/17/15/building-295214_640.png"
                    content="House for Sale"
                    description="Discover the perfect family haven in this inviting residence located in a peaceful and highly desirable neighborhood. This charming house is now available for sale, offering a harmonious blend of comfort, style, and convenience."
                />
                <BoxCard
                    titleImage="https://cdn.pixabay.com/photo/2015/11/03/08/54/house-purchase-1019764_640.jpg"
                    content="Contact Agent"
                    description="Unlock the door to your dream property by getting in touch with our experienced real estate agent today. This is your chance to explore an array of exceptional properties and receive personalized assistance in finding the perfect match for your lifestyle and preferences."
                />
                <br /> <br />
                <BoxCard
                    titleImage="https://cdn.pixabay.com/photo/2017/08/16/15/52/puzzle-pieces-2648213_640.jpg"
                    content="Mortgage Houses"
                    description="Discover the path to homeownership with our selection of mortgage houses designed to make your dreams a reality. These thoughtfully crafted homes offer a unique opportunity to own a property without the upfront burden of a full purchase price."
                />


                <BoxCard
                    titleImage="https://cdn.pixabay.com/photo/2017/11/16/16/33/home-2955065_640.jpg"
                    content="Rentals"
                    description="Embark on a journey to find the perfect rental home that suits your lifestyle and preferences. Our selection of rental properties offers a wide range of options, ensuring that you'll discover a place that feels like home from the moment you step inside."
                />
                <BoxCard
                    titleImage="https://cdn.pixabay.com/photo/2014/04/02/10/40/home-304190_640.png"
                    content="Browse Homes"
                    description="Welcome to your gateway to a world of endless possibilities in homeownership. Our selection offers a wide array of properties, each with its unique charm and appeal. Take your time to explore and discover the home that resonates with your vision and aspirations."
                />
                <BoxCard
                    titleImage="https://cdn.pixabay.com/photo/2012/04/01/12/46/house-23272_640.png"
                    content="Get home recommendations"
                    description="Ready to discover the perfect place to call home? Our service is designed to make your property search a breeze. We believe that your home should not just meet your needs; it should reflect your lifestyle, aspirations, and personality. Let us assist you in finding a property that resonates with you on every level."
                />


            </div>

            <Footer />
        </div>
    )
}

export default Services