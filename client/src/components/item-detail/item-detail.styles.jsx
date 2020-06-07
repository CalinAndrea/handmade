import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  height: 50%;
  position: relative;
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
height: 10%;
weight: 10%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
height: 10%;
  text-align: right;
`;

export const DescriptionContainer = styled.span`
  weight: 50%;
  height: 70%;
  float: left;
  overflow-wrap: break-word;
  display: flex;
`;

export const AddButton = styled(CustomButton)`
  float: left;
  width: 10%;
  height: 10%;
  opacity: 0.7;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;