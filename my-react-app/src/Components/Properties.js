import React from "react";
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import BoxCard from './BoxCard';
import Footer from "./Footer";
import './Properties.css'; // Import your CSS file

function Properties() {
  return (
    <div>
      <AppNavbar />
      <div className="header">
        <h1>PROPERTIES</h1>
        <br />
        <p>
          <Link to="/properties" className="services-link" >Home / <span className="greyed-text">Properties</span></Link>
        </p>
      </div>
      <div className="prperty-card">


        <div className="property-group">

          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2017/01/11/16/13/bad-1972205_640.jpg"
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 1.2M</p>
                <p>Kileleshwa</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />


          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_640.jpg"
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 1.3M</p>
                <p>Lavington</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_640.jpg"
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 1.4M</p>
                <p>Ngong</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
        </div>

      </div>
      <div className="prperty-card">


        <div className="property-group">

          <BoxCard
            titleImage="https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.webp?b=1&s=612x612&w=0&k=20&c=nDchx0WDIzgjrs3bb5XB6B3BT6E5xkgpy1XYeYnpDjA="
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 1.6M</p>
                <p>Kilimani</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
          <BoxCard
            titleImage="https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.webp?b=1&s=612x612&w=0&k=20&c=9bA_E6bi430LQiIg7wahxg5aNph5mIzD8SB0oiEtvMs="
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 2.2M</p>
                <p>Kileleshwa</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2017/11/16/19/29/cottage-2955582_640.jpg"
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 2.3M</p>
                <p>Ongata Rongai</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
        </div>

      </div>
      <div className="prperty-card">


        <div className="property-group">

          <BoxCard
            titleImage="https://media.istockphoto.com/id/1357529933/photo/digitally-generated-image-of-a-fully-furnished-living-room.webp?b=1&s=612x612&w=0&k=20&c=w9LxmxRyz4LT_v-xDNO8-ertuEGXC3YTydKHa3xkJsw="
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 1.2M</p>
                <p>Upper Kabete</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2017/07/30/23/59/garlic-2556022_640.jpg"
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 1.1M</p>
                <p>Kileleshwa</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
          <BoxCard
            titleImage="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_640.jpg"
            description={
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 'bold' }}>Price: 1.4M</p>
                <p>Kilimani</p>
                <p>Description: Your House Description Goes Here</p>
              </div>
            }
            imageStyle={{ width: '400px', height: '400px' }}
          />
        </div>

      </div>
      <Footer />.
    </div>
  );
}

export default Properties;
