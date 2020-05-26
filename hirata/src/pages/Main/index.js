import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddShoppingCart, MdCreate } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import history from '../../services/history';

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((SumAmount, product) => {
      SumAmount[product.id] = product.amount;
      return SumAmount;
    }, {})
  );

  const adm = useSelector(state => state.auth.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get('/api/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price),
      }));
      setProducts(data);
    }
    loadProduct();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function handleEditProduct(id) {
    history.push(`/edit-product/${id}`);
  }

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.photoUrl} alt={product.id} />
          <strong>{product.name}</strong>
          <span>{product.priceFormated}</span>
          {!adm ? (
            <button type="button" onClick={() => handleAddProduct(product.id)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          ) : (
            <button type="button" onClick={() => handleEditProduct(product.id)}>
              <div>
                <MdCreate size={16} color="#FFF" />
              </div>
              <span>EDITAR PRODUTO</span>
            </button>
          )}
        </li>
      ))}
    </ProductList>
  );
}
