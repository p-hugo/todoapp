import styled from 'styled-components';

const InputPresenter = styled.input`
  width: calc(100% - 16px);
  height: 56px;
  position: relative;
  padding: 0px 0 0 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: transparent;
  color: white;
  outline: none;
  -webkit-appearance: none;
  &::-webkit-input-placeholder{
    color: white;
  }
`

export default InputPresenter;