import styled from 'styled-components';
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
  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 12px 20px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#7159c1')};
    }
  }
`;
export const List = styled.table`
  width: 100%;
  thead th {
    color: #000;
    text-align: center;
    padding: 13px;
    font-weight: bold;
    font-size: 20px;
  }
  tbody td {
    padding: 22px;
    border-bottom: 2px solid #eee;
    text-align: center;
  }
  tbody tr tr td {
    border: 2px dotted #9c9a99;
  }
  img {
    height: 100px;
  }
  strong {
    color: #000;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 10px;
  }
`;
export const Total = styled.div`
  display: flex;
  align-items: baseline;
  span {
    color: #000;
    font-weight: bold;
    font-size: 28px;
  }
  strong {
    font-size: 28px;
    margin-left: 12px;
  }
`;
