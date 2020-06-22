import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { Container, Cart } from './styles';
import logo from '../../assests/img/logo.png';
import { signOut } from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }
  function handleEditProfile() {
    history.push('/edit-profile');
  }
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Massas Hirata" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize}</span>
        </div>
        <MdShoppingCart size={42} color="#000" />
      </Cart>

      <Cart>
        <MdAccountCircle size={65} color="#FFF" />
        <DropdownButton variant="light" alignRight title="PERFIL">
          <Dropdown.Item onClick={handleEditProfile}>
            EDITAR PERFIL
          </Dropdown.Item>

          <Dropdown.Item onClick={handleSignOut}>SAIR</Dropdown.Item>
        </DropdownButton>
      </Cart>
    </Container>
  );
}
