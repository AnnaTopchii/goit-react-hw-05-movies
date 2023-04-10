import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-top: 20px;
`;

export const Button = styled.button`
  display: inline-block;
  height: 48px;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 1px;
  border: 1px solid #fff;
  padding: 5px 20px;
  text-transform: uppercase;
  transition: background-color 250ms linear, border 250ms linear;
  &:hover,
  &:focus {
    background-color: #ffe5cc;
    border: 1px solid #ff7b00;
  }
`;

export const ButtonLabel = styled.span`
  font-size: 24px;
`;

export const Input = styled.input`
  display: inline-block;
  margin-right: 10px;
  width: 100%;
  font: inherit;
  font-size: 30px;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
  }
`;
