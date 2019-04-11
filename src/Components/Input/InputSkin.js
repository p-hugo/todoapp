import styled from 'styled-components';

const InputSkin = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  position: relative;
  background-color: ${props => props.active ? props.theme.secondary : "rgba(231,86,113, 0.3)"};
  margin: 10px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.active ? null: "rgba(231,86,113, 0.5)"};
  }
`;

export default InputSkin;