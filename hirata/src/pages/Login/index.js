import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";
import logo from '../../assests/img/logo.png';
import { MdCreate } from 'react-icons/md';
import { loginRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  password: Yup.string()
    .min(3, "No mínimo 4 caracteres")
    .required("A senha é obrigatória")
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ email, password }) {
    dispatch(loginRequest(email, password));
  }
  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <img src={logo} alt="logo" />
      <Input name="email" type="email" placeholder="Digite seu e-mail" />
      <Input name="password" type="password" placeholder="Digite sua senha" />
      <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
      <a>
        {' '}
        <MdCreate size={30} />
        Criar conta{' '}
      </a>
    </Form>
  );
}
