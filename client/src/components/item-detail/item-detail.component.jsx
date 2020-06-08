import React from 'react';
import { AddButton, DescriptionContainer, CollectionItemContainer, BackgroundImage, NameContainer, PriceContainer, CollectionFooterContainer } from './item-detail.styles'
import Slideshow from '../image-slide-show/image.slide.show.component'
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import './item-detail.styles.scss'

class ItemDetail extends React.Component {

    render() {
        const { item } = this.props.location.state;

        const items = [
            { id: 1, title: 'item #1' },
            { id: 2, title: 'item #2' },
            { id: 3, title: 'item #3' },
            { id: 4, title: 'item #4' },
            { id: 5, title: 'item #5' }
        ]



        const slider = (
            <AwesomeSlider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>
        );

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
            <div className="slider-width">
                <AwesomeSlider>
                    {item.additionalImages.map(image => <div data-src={image}></div>)}
                {/* <div data-src="https://firebasestorage.googleapis.com/v0/b/crwn-db-23683.appspot.com/o/1.PNG?alt=media&token=f63aee5e-7549-4888-bef8-0537e03a6e5e" ></div>
                <div>2</div>
                <div>3</div>
                <div>4</div> */}
            </AwesomeSlider>
            </div>
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

