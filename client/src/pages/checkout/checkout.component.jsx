import React, { useState } from 'react';
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

import CustomButton from '../../components/custom-button/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

const CheckoutPage = ({ cartItems, total }) => {

  const [orderProperties, setOrderProperties] = useState({ displayName: '', phoneNumber: '', region: '', city: '', completeAddress: '', otherInstructions: '' });
  const { displayName, phoneNumber, region, city, completeAddress, otherInstructions } = orderProperties;

  const handleSubmit = async event => {
    event.preventDefault();


    // signUpStart({ displayName, email, password })

  };

  const handleChange = event => {
    const { value, name } = event.target;

    setOrderProperties({ ...orderProperties, [name]: value });
  };

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
        <TotalContainer>Preț total: {total} RON</TotalContainer>
        <WarningContainer>
          *Folosește următorul card de credit pentru testare*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
        <StripeCheckoutButton price={total} />
      </CheckoutPageContainer>

      <form className='checkout-form' onSubmit={handleSubmit}>
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Adresa de livrare
          </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Persoană de contact'
                required
              />
              <FormInput
                type='text'
                name='phoneNumber'
                value={phoneNumber}
                onChange={handleChange}
                label='Număr de telefon pentru contact'
                required
              />
              <FormInput
                type='text'
                name='country'
                value={'România'}
                onChange={handleChange}
                label='Țara'
                disabled
              />
              <FormInput
                type='text'
                name='region'
                value={region}
                onChange={handleChange}
                label='Județ'
                required
              />
              <FormInput
                type='text'
                name='city'
                value={city}
                onChange={handleChange}
                label='Oraș'
                required
              />
              <FormInput
                type='text'
                name='completeAddress'
                value={completeAddress}
                onChange={handleChange}
                label='Strada, Număr (*Bloc, Scară, Apartament, Etaj)'
                required
              />
              <FormInput
                type='text'
                name='otherInstructions'
                value={otherInstructions}
                onChange={handleChange}
                label='Alte instrucțiuni (opțional)'
              />
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
      </form>

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);