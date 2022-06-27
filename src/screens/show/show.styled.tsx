import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 500px;
  margin-bottom: 60px;
`;

export const PreviewArea = styled.div<{ img: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%; 
    z-index: 99;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(26, 26, 26, 1));
  }
`;

export const Title = styled.h1`
  
`;

export const Paragraph = styled.p`

`;
