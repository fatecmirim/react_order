import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

export default function HeaderAdm() {
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <Link to="/">
              <li>PRODUTOS</li>
            </Link>
            <Link to="/pedidos">
              <li>PEDIDOS</li>
            </Link>
            <Link to="/lista-usuarios">
              <li>USUARIOS</li>
            </Link>
            <Link to="/register-product">
              <li>NOVO PRODUTO</li>
            </Link>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
