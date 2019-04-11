import styled from 'styled-components';

const InputPresenter = styled.input`
  height: 20px;
  border: 1px solid #F6F8F8;
  border-bottom: 1px solid #EC8B6E;
  outline: none;
  padding: 10px;
  margin: 20px 0;
  font-size: 16px;
  transition: box-shadow 1.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:focus {
    box-shadow: 0 0 10px #EC8B6E;
    border: 1px solid #EC8B6E;
  }
`

export default InputPresenter;