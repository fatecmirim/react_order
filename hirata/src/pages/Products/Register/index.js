import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Container, Content } from './styles';
import upload from '../../../assests/img/upload.png';
import api from '../../../services/api';

function RegisterProduct() {
  const { register, handleSubmit } = useForm();
  const [idPhoto, setIdPhoto] = useState();
  const [urlPhoto, setUrlPhoto] = useState();
  const loading = false;
  function onSubmit(data) {
    console.log(data);
  }
  async function handleChange(e) {
    const data = new FormData();
    data.append('photo', e.target.files[0]);
    const response = await api.post('/api/photos', data);
    const { id, url } = response.data;
    setIdPhoto(id);
    setUrlPhoto(url);
  }
  console.log(idPhoto);

  return (
    <Content>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="photo">
          <img src={!urlPhoto ? upload : urlPhoto} alt="upload" />
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </label>
        <input
          ref={register}
          name="name"
          type="text"
          placeholder="Digite o nome do produto"
        />
        <input
          ref={register}
          name="price"
          type="number"
          placeholder="Digite o preço do produto"
        />
        <input
          ref={register}
          name="kg"
          type="number"
          placeholder="Digite a quantidade de KG"
        />
        <input
          ref={register}
          name="stock"
          type="number"
          placeholder="Digite a quantidade em estoque"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Cadastrar'}</button>
      </form>
    </Content>
  );
}

export default RegisterProduct;
