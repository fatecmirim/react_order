import styled from 'styled-components';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  min-width: 100%;
  margin: 30px 0;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  transition: opacity 0.1s;
  &:hover {
    opacity: 0.9;
  }
  div {
    text-align: right;
    margin-right: 16px;
  }
  strong {
    font-size: 24px;
    display: block;
    color: #000;
    font-weight: bold;
  }
  span {
    font-size: 26px;
    color: #000;
    text-align: center;
  }
`;
