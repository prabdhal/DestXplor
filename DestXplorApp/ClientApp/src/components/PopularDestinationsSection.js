import React from 'react';

import CardItem from './CardItem';

const PopularDestinationsSection = () => {
  return (
    <section className="container-lg p-5">
      <h2 style={{ textAlign: "center" }}>Explore Some of The Most Popular Destinations</h2>
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

export default PopularDestinationsSection;