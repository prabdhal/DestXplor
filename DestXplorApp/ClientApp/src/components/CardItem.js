import React from 'react';
import { Link } from 'react-router-dom';

import './CardItem.css';

const CardItem = (props) => {

  const colClass = props.colClass ? props.colClass : "col-md-4";

  return (
    <div className={` my-5 ${colClass}`}>
      <Link className="card--item--link" to={props.path}>
      <div className="card">
        <figure>
          <img className="card-img-top" src={props.src} />
        </figure>
        <figcaption class="p-2" style={{ minHeight: '60px' }}>
          <h5>{props.headerText}</h5>
        </figcaption>
        </div>
        </Link>
    </div>
  );
}

export default CardItem;