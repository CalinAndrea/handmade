import React from 'react';
import { AddButton, DescriptionContainer, CollectionItemContainer, BackgroundImage, NameContainer, PriceContainer, CollectionFooterContainer } from './item-detail.styles'
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './item-detail.styles.scss'

class ItemDetail extends React.Component {

    render() {
        const { item } = this.props.location.state;

        let images = [];
        images = item.additionalImages ? images.concat(item.imageUrl).concat(item.additionalImages) : images.concat(item.imageUrl);

        return (
            <div>
                <div className="row">
                    <h1>
                        {item.name}
                    </h1>
                </div>
                <div className="row">
                    <div>
                        <div className="slider-width">
                            <AwesomeSlider bullets={false}>
                                {images.map(image => <div key={image} data-src={image}></div>)}
                            </AwesomeSlider>
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

