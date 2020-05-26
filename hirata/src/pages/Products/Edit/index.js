import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Content } from './styles';
import upload from '../../../assests/img/upload.png';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

function EditProduct(props) {
  const { register, handleSubmit } = useForm();
  const [idPhoto, setIdPhoto] = useState();
  const [urlPhoto, setUrlPhoto] = useState();
  const [products, setProducts] = useState([]);
  const { id } = props.match.params;

  const loading = false;

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get(`/api/products/${id}`);
      setProducts(response.data);
    }
    loadProduct();
  }, []);

  async function onSubmit(data) {
    const { name } = data;
    const kg = parseFloat(data.kg, 1);
    const price = parseFloat(data.price, 2);
    const stock = parseInt(data.stock, 0);
    const photoId = idPhoto;
    try {
      await api.patch(`/api/products/${id}`, {
        name,
        price,
        kg,
        stock,
        photoId,
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
    const { id, url } = response.data.photo;
    setIdPhoto(id);
    setUrlPhoto(url);
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
        <button type="submit">{loading ? 'Carregando...' : 'Cadastrar'}</button>
      </form>
    </Content>
  );
}

export default EditProduct;
