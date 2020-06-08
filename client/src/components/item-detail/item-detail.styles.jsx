// import styled from 'styled-components';
// import CustomButton from '../custom-button/custom-button.component';

// export const CollectionItemContainer = styled.div`
//   width: 80%;
//   display: flex;
//   flex-direction: row;
//   height: 50%;
//   position: relative;
//   &:hover {
//     .image {
//       opacity: 0.8;
//     }
//     button {
//       opacity: 0.85;
//       display: flex;
//     }
//   }
//   @media screen and (max-width: 800px) {
//     width: 40vw;
//     &:hover {
//       .image {
//         opacity: unset;
//       }
//       button {
//         opacity: unset;
//       }
//     }
//   }
// `;

// export const CollectionFooterContainer = styled.div`
//   width: 100%;
//   height: 20%;
//   display: flex;
//   justify-content: space-between;
//   font-size: 18px;
// `;

// export const NameContainer = styled.span`
// height: 10%;
// weight: 10%;
//   margin-bottom: 15px;
// `;

// export const PriceContainer = styled.span`
// height: 10%;
// weight: 50%;
// text-align: right;
// float: left;
// display: flex;
// `;

// export const DescriptionContainer = styled.span`
//   weight: 50%;
//   height: 50%;
//   float: left;
// `;

// export const AddButton = styled(CustomButton)`
//   float: left;
//   width: 10%;
//   opacity: 0.7;
//   @media screen and (max-width: 800px) {
//     width: 40%;
//     display: block;
//     opacity: 0.9;
//     min-width: unset;
//     padding: 0 10px;
//   }
// `;

import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';
import Slideshow from '../image-slide-show/image.slide.show.component'

export const CollectionItemContainer = styled.div`
  width: 40%;
  height: 400px;
  align-items: center;
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

export const AddButton = styled(CustomButton)`
width: 40%;
opacity: 0.7;
position: absolute;
top: 535px;
display: none;
@media screen and (max-width: 800px) {
  display: block;
  opacity: 0.9;
  min-width: unset;
  padding: 0 10px;
}
`;

export const BackgroundImage = styled(Slideshow)`
  width: 40%;
  height: 95%;
  margin-bottom: 5px;
  position: absolute;

  @media screen and (max-width: 800px) {
    height: 100px;
    width: 60%;
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 80%;
  margin-bottom: 15px;
`;

export const DescriptionContainer = styled.div`
  width: 70%;
  position: absolute;
  top: 535px;
  margin-top: 50px;
  font-size: 18px;
`;

export const PriceContainer = styled.span`
  width: 20%;
  text-align: right;
`;