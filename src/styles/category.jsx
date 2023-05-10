import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryBody = styled.div`
  height: auto;
  min-height: 90px;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  background-color: white;
  opacity: 0.8;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: all 0.3s ease-in-out;
  z-index: 5;
`;

export const CategoryBg = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${({ imageurl }) => `url(${imageurl})`};
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  transition: all 0.3s ease-in-out;
`;

export const CategoryContainer = styled(Link)`
  height: auto;
  min-height: 240px;
  display: grid;
  align-items: center;
  justify-content: center;
  border: 1px solid #272727;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &:hover {
    ${CategoryBg} {
      transform: scale(1.1);
      filter: brightness(1.2);
    }

    ${CategoryBody} {
      opacity: 1;
    }
  }
`;

export const CategoryTitle = styled.h2`
  font-size: 22px;
  line-height: 22px;
  font-weight: 700;
  color: #4a4a4a;
  margin: 0;
`;

export const CategoryText = styled.p`
  font-size: 16px;
  line-height: 16px;
  font-weight: 300;
  color: #4a4a4a;
  margin: 0;
`;
