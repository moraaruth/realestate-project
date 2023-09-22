import React from 'react';
import { Link } from 'react-router-dom';
import './BoxCard.css'
function BoxCard({ titleImage, content, description, linkTo }) {
  return (
    <div className="box-card">
      <img src={titleImage} alt="Box " className="box-card-image" />
      <br />
      <p>{content}</p>
      <br />
      <p>{description}</p>
      <br />
      <Link to={linkTo} className="blue-button">
        Learn more
      </Link>
    </div>
  );
}

export default BoxCard;

