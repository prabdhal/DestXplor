import React from 'react';

import CardItem from './CardItem';

const Cards = () => {
  return (
    <section className="container-xl py-5">
      <h2 class="section-header">Explore Some of The Most Popular Destinations</h2>
      <div class="row">
        <CardItem
          colClass="col-md-6"
          src="./img-2.jpg"
          headerText="Come visit the mountains"
          path="/services"
        />
        <CardItem
          colClass="col-md-6"
          src="./img-3.jpg"
          headerText="Come visit the plains"
          path="/services"
        />
        <CardItem
          src="./img-4.jpg"
          headerText="Come visit the desert"
          path="/services"
        />
        <CardItem
          colClass="col-md-4"
          src="./img-5.jpg"
          headerText="Come visit the beautiful city"
          path="/services"
        />
        <CardItem
          colClass="col-md-4"
          src="./img-6.jpg"
          headerText="Come visit Greece"
          path="/services"
        />
      </div>
    </section>
  );
}

export default Cards;