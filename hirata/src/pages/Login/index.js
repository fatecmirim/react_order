import React from 'react';
import logo from '../../assests/img/logo.png';
import {MdCreate} from 'react-icons/md';
export default function Login() {
  return (
    <form>
      <img src={logo} alt="logo" />
      <input name="email" type="email" placeholder="Digite seu e-mail" />
      <input name="password" type="password" placeholder="Digite sua senha" />
      <button type="submit">Entrar</button>
      <a> <MdCreate size={30}/>Criar conta </a>
    </form>
  );
}
