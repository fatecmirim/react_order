import styled from 'styled-components';

export const Container = styled.header`
  background: #ffff00;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
  }
  li {
    float: left;
    padding: 20px;
    border-radius: 3px;
    &:hover {
      background: #fafafa;
      border-radius: 3px;
    }
  }
  a {
    color: #000;
    font-size: 28px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
`;
