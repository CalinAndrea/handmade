import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const AddButton = styled(CustomButton)`
opacity: 0.7;
@media screen and (max-width: 800px) {
  display: block;
  opacity: 0.9;
  min-width: unset;
  padding: 0 10px;
}
`;

export const TotalContainer = styled.div`
  margin-top: 15px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;