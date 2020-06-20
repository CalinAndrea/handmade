import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  WarningContainer
} from './checkout.styles';

import { CheckoutItemContainer } from '../../components/checkout-item/checkout-item.styles'
import OrderForm from '../../components/order-form/order-form.component'
import { selectIsOrderSent } from '../../redux/shop/shop.selectors';


const CheckoutPage = ({ cartItems, isOrderSent }) => {

  return (
    <div>
      <CheckoutPageContainer>
        {
          cartItems.length === 0 &&
          <span>Coșul de cumpărături este gol. Vă rugam selectați produsele dorite.</span>
        }
        {!!!isOrderSent && cartItems.length > 0 &&
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
        </CheckoutHeaderContainer>}
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        {!!!isOrderSent && cartItems.length > 0 &&
          <CheckoutItemContainer>
            <OrderForm></OrderForm>
          </CheckoutItemContainer>}
        <WarningContainer>{isOrderSent ? "Comanda a fost plasată cu succes. Vă mulțumim! Un Email de confirmare a fost trimis. Dacă ați selectat opțiunea prin transfer bancar, vă rugam să urmați detaliile din email." : ''}</WarningContainer>

      </CheckoutPageContainer>
    </div>
  )
}

const mapStateToProps = () => createStructuredSelector({
  cartItems: selectCartItems,
  isOrderSent: selectIsOrderSent
});

export default connect(mapStateToProps, null)(CheckoutPage);