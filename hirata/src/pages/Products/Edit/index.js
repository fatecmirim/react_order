import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Content, Delete } from './styles';
import api from '../../../services/api';
import history from '../../../services/history';

function EditProduct(props) {
  const { register, handleSubmit } = useForm();
  const [idPhoto, setIdPhoto] = useState();
  const [urlPhoto, setUrlPhoto] = useState();
  const [products, setProducts] = useState([]);
  const { productId } = props.match.params;

  const loading = false;

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/api/products/${productId}`);
      setProducts(response.data);
    }
    loadProduct();
  }, []);

  async function onSubmit(data) {
    const { name } = data;
    const kg = parseFloat(data.kg, 1);
    const price = parseFloat(data.price, 2);
    const stock = parseInt(data.stock, 0);

    try {
      await api.patch(`/api/products/${productId}`, {
        name,
        price,
        kg,
        stock,
      });
      toast.success('Produto cadastrado com suceeso');
    } catch (err) {
      toast.error('Falha no cadastro, revise os dados');
    }
  }

  async function handleChange(e) {
    const data = new FormData();
    data.append('photo', e.target.files[0]);

    const response = await api.post('/api/photos', data);
    const idAntigo = parseInt(products.photoId, 0);
    const { id, url } = response.data.photo;

    try {
      await api.patch(`/api/photos/${idAntigo}`, {
        id,
      });
    } catch (err) {
      console.log(err);
    }

    setIdPhoto(id);
    setUrlPhoto(url);
  }

  async function handleDeleteProduct(id) {
    try {
      await api.delete(`/api/products/${id}`);
      toast.success('Produto excluido com sucess');
      history.push('/Main');
    } catch (err) {
      toast.error('Erro na exclusão do produto');
      history.push('/Main');
    }
  }

  return (
    <Content>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="photo">
          <img src={!urlPhoto ? products.photoUrl : urlPhoto} alt="upload" />
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
          defaultValue={products.name}
        />
        <input ref={register} name="price" defaultValue={products.price} />
        <input ref={register} name="kg" defaultValue={products.kg} />
        <input
          ref={register}
          name="stock"
          type="number"
          defaultValue={products.stock}
        />
        <button type="submit">{loading ? 'Carregando...' : 'Editar'}</button>
      </form>
      <Delete type="button" onClick={() => handleDeleteProduct(products.id)}>
        Deletar
      </Delete>
    </Content>
  );
}

export default EditProduct;
