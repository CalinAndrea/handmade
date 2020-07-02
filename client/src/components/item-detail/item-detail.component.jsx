import React from 'react';
import { AddButton, DescriptionContainer, NavigationLinkContainer } from './item-detail.styles'
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

import SimpleImageSlider from "react-simple-image-slider";

import { useToasts } from 'react-toast-notifications'


const ItemDetail = (state) => {

    const { location } = state;
    const { item, title } = location.state;
    const img = [];

    let images = [];
    images = item.additionalImages ? images.concat(item.imageUrl).concat(item.additionalImages) : images.concat(item.imageUrl);
    images.map(image => img.push({ url: image }))

    const { addToast } = useToasts()

    const addItemToCart = item => {

        state.addItem(item);
        addToast("Produsul a fost adăugat în coșul de cumpărături!", { appearance: 'success' })

    }

    return (
        <div>
            <NavigationLinkContainer href={`/shop/`}>Magazin / </NavigationLinkContainer>
            <NavigationLinkContainer href={`/shop/${title.toLowerCase()}`}>{title}</NavigationLinkContainer>
            <div className="row">
                <h1>
                    {item.name}
                </h1>
            </div>
            <div className="row">
                <div>
                    <div>
                        <SimpleImageSlider
                            width={350}
                            height={450}
                            images={img}
                            slideDuration={0.3}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div>
                    <span><b>Preț: {item.price} ron</b></span>
                </div>
            </div>
            <div className="row">
                <div>
                    <DescriptionContainer>{item.description}</DescriptionContainer>
                </div>
            </div>
            <div className="row">
                <div>
                    <AddButton onClick={() => addItemToCart(item)} inverted>
                        Adaugă în coș
                        </AddButton>
                </div>
            </div>
        </div >

    );

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(ItemDetail));

