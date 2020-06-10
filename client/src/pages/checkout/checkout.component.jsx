import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './accordion.styles.scss';


const CheckoutPage = ({ cartItems, total }) => (
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
      <TotalContainer>Preț total: {total} RON</TotalContainer>
      <WarningContainer>
        *Folosește următorul card de credit pentru testare*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>

    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Adresa de livrare
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Exercitation in fugiat est ut ad ea cupidatat ut in
            cupidatat occaecat ut occaecat consequat est minim minim
            esse tempor laborum consequat esse adipisicing eu
            reprehenderit enim.
                    </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Metoda de livrare
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            In ad velit in ex nostrud dolore cupidatat consectetur
            ea in ut nostrud velit in irure cillum tempor laboris
            sed adipisicing eu esse duis nulla non.
                    </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Metoda de plata
                    </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            In ad velit in ex nostrud dolore cupidatat consectetur
            ea in ut nostrud velit in irure cillum tempor laboris
            sed adipisicing eu esse duis nulla non.
                    </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  </div>

);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);