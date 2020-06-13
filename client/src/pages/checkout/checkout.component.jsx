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
import { CheckoutItemContainer } from '../../components/checkout-item/checkout-item.styles'

const CheckoutPage = ({ cartItems, total }) => {

  const [orderProperties, setOrderProperties] = useState({ displayName: '', phoneNumber: '', region: '', city: '', completeAddress: '', otherInstructions: '' });
  const { displayName, phoneNumber, region, city, completeAddress, otherInstructions } = orderProperties;

  const [paymentMethod, setPaymentMethod] = useState('bankTransfer');
  const [totalPriceWithTransport, setTotalPriceWithTransport] = useState(total);

  const handleSubmit = async event => {
    event.preventDefault();


    // signUpStart({ displayName, email, password })

  };

  const handleRadioChange = event => {
    setPaymentMethod(event.target.value);
    if (event.target.value === 'ramburs') {
      setTotalPriceWithTransport(total + 15)
    } else {
      setTotalPriceWithTransport(total)
    }
  }

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

        {/* <WarningContainer>
          *Folosește următorul card de credit pentru testare*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
        <StripeCheckoutButton price={total} /> */}

        <CheckoutItemContainer>
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
                    Metoda de livrare și plată
              </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>

                  <div className='group-checkout'>
                    <div>
                      <input
                        type='radio'
                        id='paymentMethod1'
                        value='bankTransfer'
                        checked={paymentMethod === 'bankTransfer'}
                        onChange={handleRadioChange}
                      />
                      <label for="paymentMethod1">Transfer Bancar - (0 cost transport)</label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        id='paymentMethod2'
                        value='ramburs'
                        checked={paymentMethod === 'ramburs'}
                        onChange={handleRadioChange}
                      />
                      <label for="paymentMethod2">Poșta română - Ramburs (15 ron transport)</label>
                    </div>

                    <div>
                      <input
                        type='radio'
                        id='paymentMethod3'
                        value='pickup'
                        checked={paymentMethod === 'pickup'}
                        onChange={handleRadioChange}
                        label='Ridicare personala in Medias ( 0 cost transport)'
                      />
                      <label for="paymentMethod3">Ridicare personala in Medias ( 0 cost transport)</label>
                    </div>
                    <div>
                      <input
                        type='radio'
                        id='paymentMethod4'
                        value='creditCard'
                        checked={false}
                        disabled
                        onChange={handleRadioChange}
                        label='*(in curand) Plata cu cardul - (0 cost transport)'
                      />
                      <label for="paymentMethod4">*(in curand) Plata cu cardul - (0 cost transport)</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </form>
        </CheckoutItemContainer>
        <TotalContainer>Preț total: {totalPriceWithTransport} RON</TotalContainer>
      </CheckoutPageContainer>

    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);