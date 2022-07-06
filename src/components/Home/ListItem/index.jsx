import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, address, rating , county , noodbed , bathroom , category },
}) => (
  <div className='item'>
  <div className='listItem-wrap card'>
    <img src={coverSrc} alt='' />
    <header className='pd'>
      <h1>{title}</h1>
      <span>🌟{rating}</span>
    </header>
    <footer className='pd'>
      <div>
        <h2>
        ${price}/
        <span>Month</span>
        </h2>
        <p> <b> {address}, </b> </p><i> {county}</i> 
      </div>
      <div>
        <p>{noodbed} Beds </p>
        <p>{bathroom} Bathroom</p>
        <b>{category} </b>
      </div>
   
    </footer>
  </div>
  </div>
);

export default ListItem;
