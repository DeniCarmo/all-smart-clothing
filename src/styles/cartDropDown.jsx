import styled from 'styled-components';
import { BaseButton, GoogleButton, InvertedButton } from './button';

export const CartDropDown = styled.div`
  width: 100%;
  max-width: 240px;
  height: auto;
  max-height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  position: absolute;
  top: 55px;
  right: 40px;
  z-index: 15;

  ${BaseButton},
  ${GoogleButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyCartMessage = styled.p`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartDropDownItems = styled.div`
  height: auto;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;
