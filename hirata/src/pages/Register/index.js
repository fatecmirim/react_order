import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from '../../assests/img/logo.png';
import history from '../../services/history';
import { createUserRequest } from '../../store/modules/auth/actions';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  function handleLogin() {
    history.push('/');
  }
  function onSubmit(data) {
    dispatch(createUserRequest(data));
  }
  function msgError(texto) {
    toast.error(texto);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img src={logo} alt="logo" />
      <input
        ref={register}
        name="name"
        type="text"
        placeholder="Digite seu nome"
      />
      <input
        ref={register}
        name="email"
        type="text"
        placeholder="Digite seu email"
      />
      <input
        ref={register}
        name="password"
        type="password"
        placeholder="digite sua senha"
      />
      <input
        ref={register({ minLength: 9, maxLength: 9 })}
        name="phone"
        type="number"
        placeholder="digite seu telefone"
      />
      {errors.phone && msgError('insira um numero válido')}
      <button type="submit">{loading ? 'Carregando...' : 'Registrar'}</button>
      <button type="button" onClick={() => handleLogin()}>
        Já tenho conta
      </button>
    </form>
  );
}
