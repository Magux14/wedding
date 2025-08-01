import React from 'react';
import './wedding.scss';
import { Portrait } from '../../components/portrait/Portrait';
import { Gifts } from '../../components/gifts/Gifts';
import { SalonMap } from '../../components/salon-map/SalonMap';
import { OurWedding } from '../../components/our-wedding/OurWedding';
import { MessageFromBride } from '../../components/message-from-bride/MessageFromBride';
import { Parents } from '../../components/parents/Parents';
import { DressCode } from '../../components/dress-code/DressCode';
import { Invitation } from '../../components/invitation/Invitation';

export const WeddingPage = () => {
  return (
    <div className="wedding container">
      <Portrait />
      <Invitation/>
      <MessageFromBride />
      <OurWedding />
      <DressCode />
      <Parents />
      <SalonMap />
      <Gifts />

      <div className="wedding__last-message">
        ¡Te esperamos!
      </div>
    </div>
  )
}
