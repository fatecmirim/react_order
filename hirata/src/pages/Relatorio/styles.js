import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { darken } from 'polished';

export const Container = styled.div`
  margin-top: 80px;
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: center;
  input {
    border: 3;
    border-radius: 8px;
    height: 40px;
    font-size: 16px;
    padding: 10 10px;
    color: #000;
    margin-left: 20px;
    text-align: center;
    &::placeholder {
      color: #000;
    }
    button {
      background: grey !important;
    }
  }

  button {
    margin-left: 20px;
    height: 44px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 6px;
    font-size: 18px;
    transition: background 0.2;

    &:hover {
      background: ${darken(0.03, '#3b9eff')};
    }
  }
`;
