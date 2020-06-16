import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import { selectOrderDetails }
  from '../../redux/shop/shop.selectors';
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  AddButton
} from './checkout.styles';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './accordion.styles.scss';

import { sendOrderStart } from '../../redux/shop/shop.actions'

import FormInput from '../../components/form-input/form-input.component';
import { CheckoutItemContainer } from '../../components/checkout-item/checkout-item.styles'

import { useToasts } from 'react-toast-notifications'


const CheckoutPage = ({ sendOrderStart, cartItems, total, orderDetails }) => {

  const [orderProperties, setOrderProperties] = useState({ displayName: '', phoneNumber: '', region: '', city: '', completeAddress: '', otherInstructions: '' });
  const { displayName, phoneNumber, region, city, completeAddress, otherInstructions } = orderProperties;

  const [paymentMethod, setPaymentMethod] = useState();
  const [totalPriceWithTransport, setTotalPriceWithTransport] = useState(total);

  const handleRadioChange = event => {
    setPaymentMethod(event.target.value);
    if (event.target.value === 'ramburs') {
      setTotalPriceWithTransport(total + 15)
    } else {
      setTotalPriceWithTransport(total)
    }
  }

  const { addToast } = useToasts()


  const handleSubmit = event => {
    event.preventDefault();

    if (!displayName || !phoneNumber || !region || !city || !completeAddress || !completeAddress.length > 8) {
      addToast("Adresa este incompletă! Vă rugăm completați toate câmpurile.", { appearance: 'error' })
      return;
    }
    if (!paymentMethod) {
      addToast("Vă rugăm selectați metoda de livrare și plată!", { appearance: 'error' })
      return;
    }
    sendOrderStart(orderProperties);

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

        {cartItems.length > 0 &&

          <CheckoutItemContainer>
            <form className='checkout-form' onSubmit={handleSubmit}>
              <Accordion preExpanded={['deliveryAddress', 'paymentMethod']} allowMultipleExpanded={true} allowZeroExpanded={true}>

                <AccordionItem uuid='deliveryAddress'>
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
                    />
                    <FormInput
                      type='text'
                      name='phoneNumber'
                      value={phoneNumber}
                      onChange={handleChange}
                      label='Număr de telefon pentru contact'
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
                    />
                    <FormInput
                      type='text'
                      name='city'
                      value={city}
                      onChange={handleChange}
                      label='Oraș'
                    />
                    <FormInput
                      type='text'
                      name='completeAddress'
                      value={completeAddress}
                      onChange={handleChange}
                      label='Strada, Număr (*Bloc, Scară, Apartament, Etaj)'
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

                <AccordionItem uuid='paymentMethod'>
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
                        <label htmlFor="paymentMethod1">Transfer Bancar - (0 cost transport)</label>
                      </div>

                      <div>
                        <input
                          type='radio'
                          id='paymentMethod2'
                          value='ramburs'
                          checked={paymentMethod === 'ramburs'}
                          onChange={handleRadioChange}
                        />
                        <label htmlFor="paymentMethod2">Poșta română - Ramburs (15 ron transport)</label>
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
                        <label htmlFor="paymentMethod3">Ridicare personala in Medias ( 0 cost transport)</label>
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
                        <label htmlFor="paymentMethod4">*(in curand) Plata cu cardul - (0 cost transport)</label>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
              <TotalContainer>Preț total: {totalPriceWithTransport} RON</TotalContainer>
              <TotalContainer>Error message: {orderDetails}</TotalContainer>
              <TotalContainer>
                {/* onClick={() => sendOrderSuccess(orderProperties)} */}
                <AddButton type='submit' inverted>
                  Trimite comanda
            </AddButton>
              </TotalContainer>
            </form>
          </CheckoutItemContainer>
        }

      </CheckoutPageContainer>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  sendOrderStart: orderProperties => dispatch(sendOrderStart(orderProperties))
})

const mapStateToProps = (state) => createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  orderDetails: selectOrderDetails,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);