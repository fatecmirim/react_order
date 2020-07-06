import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import logo from '../../../assests/img/logo.png';
import { createUserRequest } from '../../../store/modules/auth/actions';
import { Content } from './styles';
import api from '../../../services/api';

export default function EditProfile() {
  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState([]);
  const id = useSelector(state => state.user.customerId);

  const loading = useSelector(state => state.auth.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/api/customers/${id}`);
      setUser(response.data);
    }
    loadUser();
  }, []);

  async function onSubmit(data) {
    try {
      const { name, email, password, phone } = data;
      await api.patch(`/api/customers/${id}`, {
        name,
        email,
        password,
        phone,
      });
      toast.success('Usuario alterado com sucesso');
    } catch (err) {
      toast.error('Error na alteração tente novamente');
    }
  }
  function msgError(texto) {
    toast.error(texto);
  }
  console.log(user);

  return (
    <Content>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={logo} alt="logo" />
        <input
          ref={register}
          name="name"
          type="text"
          defaultValue={user.name}
        />
        <input
          ref={register}
          name="email"
          type="text"
          defaultValue={user.email}
        />
        <input
          ref={register}
          name="password"
          type="text"
          defaultValue={user.password}
        />
        <input
          ref={register({ minLength: 9, maxLength: 9 })}
          name="phone"
          type="number"
          defaultValue={user.phone}
        />
        {errors.phone && msgError('insira um numero válido')}
        <button type="submit">{loading ? 'Carregando...' : 'Editar'}</button>
      </form>
    </Content>
  );
}
