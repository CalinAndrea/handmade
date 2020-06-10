import React from 'react';
import { AddButton, DescriptionContainer, NavigationLinkContainer } from './item-detail.styles'
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

import SimpleImageSlider from "react-simple-image-slider";


class ItemDetail extends React.Component {

    render() {
        const { item, title } = this.props.location.state;
        const img = [];

        let images = [];
        images = item.additionalImages ? images.concat(item.imageUrl).concat(item.additionalImages) : images.concat(item.imageUrl);
        images.map(image => img.push({ url: image }))
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
                        <AddButton onClick={() => this.props.addItem(item)} inverted>
                            Adaugă în coș
                        </AddButton>
                    </div>
                </div>
            </div >

        );

    }

}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default withRouter(connect(
    null,
    mapDispatchToProps
)(ItemDetail));

