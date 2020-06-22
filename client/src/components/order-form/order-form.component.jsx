import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { useToasts } from 'react-toast-notifications'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartTotal, selectCartItems } from '../../redux/cart/cart.selectors';

import { selectOrderErrorMessage }
    from '../../redux/shop/shop.selectors';

import { selectCurrentUser } from '../../redux/user/user.selectors'

import { sendOrderStart } from '../../redux/shop/shop.actions'

import FormInput from '../form-input/form-input.component';

import { AddButton, TotalContainer, WarningContainer } from './order-form.styles'
import './accordion.styles.scss';

const OrderForm = ({ cartItems, sendOrderStart, total, orderErrorMessage, selectedUser }) => {

    const [orderProperties, setOrderProperties] = useState({ displayName: '', phoneNumber: '', region: '', city: '', completeAddress: '', otherInstructions: '', cartItems, selectedUser });
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
        orderProperties.date = new Date();
        orderProperties.paymentMethod = paymentMethod;

        sendOrderStart(orderProperties);

    }

    const handleChange = event => {
        const { value, name } = event.target;

        setOrderProperties({ ...orderProperties, [name]: value });
    };

    return (
        <div>
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
                <WarningContainer>{orderErrorMessage === 'Missing or insufficient permissions.' ? "Vă rugăm să vă autentificați pentru a plasa comanda." : orderErrorMessage ? 'Eroare tehnică. Vă rugam să ne contactati, sau încercați mai târziu.' : ''}</WarningContainer>
                <WarningContainer>{orderErrorMessage === 'Missing or insufficient permissions.' ? "Vă rugăm să vă autentificați pentru a plasa comanda." : orderErrorMessage ? 'Eroare tehnică. Vă rugam să ne contactati, sau încercați mai târziu.' : ''}</WarningContainer>
                <TotalContainer>
                    <AddButton type='submit' inverted>
                        Trimite comanda
                    </AddButton>
                </TotalContainer>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    sendOrderStart: orderProperties => dispatch(sendOrderStart(orderProperties))
})

const mapStateToProps = () => createStructuredSelector({
    total: selectCartTotal,
    orderErrorMessage: selectOrderErrorMessage,
    cartItems: selectCartItems,
    selectedUser: selectCurrentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);