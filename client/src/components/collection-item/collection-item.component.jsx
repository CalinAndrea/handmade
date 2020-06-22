import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';


import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

import Img from 'react-cool-img'


const CollectionItem = ({ item, history, title }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer onClick={() => history.push({
      pathname: `/detail/${item.id}`,
      state: {
        item: item,
        title: title
      }
    })}>
      {/* <Img className
          src={imageUrl}
          cache // Default is true, just for demo
          alt="item"
        /> */}
      <BackgroundImage cache className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price} ron</PriceContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};


export default withRouter(connect(
  null,
  null
)(CollectionItem));
