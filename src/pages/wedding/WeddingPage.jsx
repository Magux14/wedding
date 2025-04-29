import React from 'react';
import './wedding.scss';
import { Portrait } from '../../components/portrait/Portrait';
import { Gifts } from '../../components/gifts/Gifts';
import { SalonMap } from '../../components/salon-map/SalonMap';
import { OurWedding } from '../../components/our-wedding/OurWedding';

export const WeddingPage = () => {
  return (
    <div className="wedding container">
      <Portrait />
      <SalonMap />
      <OurWedding />
      <Gifts />
    </div>
  )
}
