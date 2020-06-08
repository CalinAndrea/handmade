import React from 'react';
import { AddButton, DescriptionContainer, CollectionItemContainer, BackgroundImage, NameContainer, PriceContainer, CollectionFooterContainer } from './item-detail.styles'
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

import SimpleImageSlider from "react-simple-image-slider";


class ItemDetail extends React.Component {

    render() {
        const { item } = this.props.location.state;

        const images1 = [
            { url: "images/1.jpg" },
            { url: "images/2.jpg" },
            { url: "images/3.jpg" },
            { url: "images/4.jpg" },
            { url: "images/5.jpg" },
            { url: "images/6.jpg" },
            { url: "images/7.jpg" },
        ];

        const img = [];

        let images = [];
        images = item.additionalImages ? images.concat(item.imageUrl).concat(item.additionalImages) : images.concat(item.imageUrl);
        images.map(image => img.push({url: image}))
        return (
            <div>
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
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <span>Preț: {item.price} ron</span>
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

