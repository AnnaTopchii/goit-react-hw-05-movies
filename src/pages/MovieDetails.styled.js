import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
`;

export const StyledBackLink = styled(Link)`
  display: inline-block;
  margin: 20px 0px;
  color: #000;
  text-decoration: none;
  font-size: 24px;
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
