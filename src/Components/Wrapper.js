import styled from 'styled-components';

const Wrapper = styled.main`
  margin: auto;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em; // both row and column gap

  @media screen and (max-width: $break-small) {
    width: 85vw;
  }
`

export default Wrapper;