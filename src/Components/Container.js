import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  @media only screen and (min-width: 1224px){
    width: 50vw;
  }
  @media only screen and (min-width: 320px) and (max-width: 768px){
    width: 95vw;
  }
`;

export default Container;