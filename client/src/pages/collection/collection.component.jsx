import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
  NavigationLinkContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div>
      <NavigationLinkContainer href={`/shop/`}>Magazin / </NavigationLinkContainer>
      <NavigationLinkContainer href={`/shop/${title.toLowerCase()}`}>{title}</NavigationLinkContainer>
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} title={title} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    </div>

  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);