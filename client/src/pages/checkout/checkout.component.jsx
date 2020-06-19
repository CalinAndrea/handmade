import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
} from './checkout.styles';

import { CheckoutItemContainer } from '../../components/checkout-item/checkout-item.styles'
import OrderForm from '../../components/order-form/order-form.component'


const CheckoutPage = ({ cartItems }) => {

  return (
    <div>
      <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Produs</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Descriere</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Cantitate</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Preț</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Șterge</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        {cartItems.length > 0 &&
          <CheckoutItemContainer>
            <OrderForm></OrderForm>
          </CheckoutItemContainer>}
      </CheckoutPageContainer>
    </div>
  )
}

const mapStateToProps = () => createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, null)(CheckoutPage);