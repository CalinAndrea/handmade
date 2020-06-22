import React from 'react';
import Img from 'react-cool-img'


import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name } }) => (
  <div className='cart-item'>

    <Img
      src={imageUrl}
      cache // Default is true, just for demo
      alt="item"
    />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        <b>{price} ron</b>
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
