import React from 'react';
import { AddButton, DescriptionContainer, CollectionItemContainer, BackgroundImage, NameContainer, PriceContainer, CollectionFooterContainer } from './item-detail.styles'
import Slideshow from '../image-slide-show/image.slide.show.component'
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
class ItemDetail extends React.Component {

    render() {
        const { item } = this.props.location.state;

        const images = [];

        return (
            // <div>
            //     <div className="row">
            //         <h1>
            //             {item.name}
            //         </h1>
            //     </div>
            //     <div className="row">
            //         <div>
            //             {item.additionalImages &&
            //                 <div className='slideshow-image'>
            //                     <Slideshow images={item.additionalImages ? images.concat(item.imageUrl).concat(item.additionalImages) : images.concat(item.imageUrl)}></Slideshow>
            //                 </div>
            //             }
            //             {!item.additionalImages &&
            //                 <div>
            //                     <img className='background-detail-image' src={item.imageUrl}></img>
            //                 </div>
            //             }
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div>
            //             <DescriptionContainer>{item.description}</DescriptionContainer>
            //         </div>
            //     </div>
            //     {/* <div className="row">
            //         <div>
            //             <span>Preț: {item.price} ron</span>
            //         </div>
            //     </div> */}
            //     <div className="row">
            //         <div>
            //             <AddButton onClick={() => this.props.addItem(item)} inverted>
            //                 Adaugă în coș
            //             </AddButton>
            //         </div>
            //     </div>
            // </div >
            <CollectionItemContainer>
                <BackgroundImage className='image' images={item.additionalImages ? images.concat(item.imageUrl).concat(item.additionalImages) : images.concat(item.imageUrl)} />
                <CollectionFooterContainer>
                    <NameContainer>{item.name}</NameContainer>
                    <PriceContainer>{item.price} ron</PriceContainer>
                </CollectionFooterContainer>
                <AddButton onClick={() => addItem(item)} inverted>
                    Adaugă în coș
                </AddButton>
                <DescriptionContainer>{item.description}</DescriptionContainer>

            </CollectionItemContainer>
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

