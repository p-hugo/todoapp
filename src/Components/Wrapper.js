import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: ${props => props.theme.bg};
  height: 100vh;
  * {
    color: ${props => props.theme.contrast};
  }
`

Wrapper.defaultProps = {
  theme: {
    bg: "white",
    contrast: "black"
  }
}

export default Wrapper;