import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import foto1 from '../pictures/carritoprueba1.jpg';
import foto2 from '../pictures/carritoprueba2.jpg';

//import './Carousel.css';
const items = [
  {
    src: foto1,
    altText: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: foto2,
    altText: 'Slide 2',
    header: 'Slide 2 Header'
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;