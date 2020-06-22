import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

import Img from 'react-cool-img'

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img
          src={imageUrl}
          cache // Default is true, just for demo
          alt="item"
        />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <span>{quantity}</span>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
