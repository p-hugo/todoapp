import styled from 'styled-components';

const ToggleButton = styled.div`
  position: relative;
  margin: 10px 0;
  width: 40px;
  height: 18px;
  background: ${props => props.theme.contrast};
  border-radius: 10px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.4s;
  &::before{
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: ${({theme}) => theme.primary};
    top: -2px;
    left: ${({active}) => active ? "22px" : "-2px"};
    transition: all .4s;
  } 
`

export default ToggleButton;