import styled, { css } from 'styled-components';

const ShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: black;
`;

const InputAlert = css`
  color: red;
`;

export const ConfirmText = styled.p`
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  ${({ confirm }) => confirm && InputAlert}
`;

export const FormLabel = styled.label`
  color: grey;
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  left: 5px;
  top: 10px;
  margin: 0;
  transition: 0.3s all ease-in-out;
  position: absolute;
  ${({ shrink }) => shrink && ShrinkLabel}
`;

export const FormContainer = styled.section`
  width: 100%;
  max-width: 380px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  text-align: left;
`;

export const FormInput = styled.input`
  background: none;
  background-color: white;
  color: grey;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid grey;
  margin: 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormLabel} {
    ${ShrinkLabel}
  }

  &input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputGroup = styled.div`
  width: 100%;
  position: relative;
  margin: 15px 0;
`;

export const FormButtons = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-gap: 0 5px;
`;
