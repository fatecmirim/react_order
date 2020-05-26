/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 700px;
`;

export const Content = styled.div`
  padding-top: 30px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  form {
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    input {
      border: 0;
      border-radius: 10px;
      height: 44px;
      font-size: 16px;
      padding: 0 20px;
      color: #000;
      margin: 0 0 10px;
      &::placeholder {
        color: #000;
      }
    }
    select {
      background: grey;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: #fff;
      }
    }
    span {
      color: red;
      margin: 0 0 10px;
      align-self: flex-start;
      font-weight: bold;
    }
    button {
      margin: 15px 0 0;
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
    a {
      color: black;
      padding-top: 35px;
      font-size: 30px;
      font-weight: 900;
      text-decoration: none;
    }
    img {
      width: 360px;
    }
    label {
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
      img {
        height: 120px;
        width: 120px;
        border-radius: 20%;
        border: 3px solid rgba(255, 255, 255, 0.3);
        background: #eee;
      }
      input {
        display: none;
      }
    }
  }
`;
