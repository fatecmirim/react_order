import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function HeaderAdm() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <Link to="/">
              <li>PRODUTOS</li>
            </Link>
            <Link to="/orders">
              <li>PEDIDOS</li>
            </Link>
            <Link to="/list-users">
              <li>USUARIOS</li>
            </Link>
            <Link to="/register-product">
              <li>NOVO PRODUTO</li>
            </Link>
            <Link to="/edit-profile">
              <li>PERFIL</li>
            </Link>
            <Link to="/">
              <li onClick={handleSignOut}>SAIR</li>
            </Link>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
