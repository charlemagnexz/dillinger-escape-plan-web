import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>The Dillinger Escape Plan </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dep-diss.jpg'
              text='Check out the brand new heart-stopping hard-hitting album'
              label='Music'
              path='/Album'
            />
            <CardItem
              src='images/dep-live.jpg'
              text='World Dissociation Tour | Check out live show dates'
              label='Tour'
              path='/Tour'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dep-merch.jpg'
              text='All new Merch online and for sale now'
              label='Merch'
              path='/SignUp'
            />
            <CardItem
              src='images/dep-deepset.jpg'
              text='What is new with the Dillinger Escape Plan?'
              label='News'
              path='/SignUp'
            />
            <CardItem
              src='images/dep-spotify.jpg'
              text='Check out the New Album on Spotify'
              label='Playlists'
              path='/Album'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;