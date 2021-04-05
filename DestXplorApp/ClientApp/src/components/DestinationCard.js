import React from 'react';

import './DestinationCard.css';

const DestinationCard = (props) => {
  return (
    <div className="destination-card-item p-2 my-5">
      <img
        src={props.src}
        width="250px"
        height="250px"
      />
      <div className="flex-column px-3">
        <h3>{props.destinationTitle}</h3>
        <p>{props.description}</p>
        <button className="btn btn-primary">Book Now</button>
      </div>
    </div>
  );
}

export default DestinationCard;