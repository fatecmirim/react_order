import React, { useEffect, useState } from 'react';
import { Container, List } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function Orders() {
  const [itens, setItens] = useState([]);
  /* async function handleAceito(id) {
    const status = true;
    const aprovado = true;
    try {
      await api.put(`/approvals/${id}`, {
        status,
        aprovado,
      });
      history.push('/admin');
    } catch (err) {
      console.log('Falha Porra');
    }
  } */
  /* function handleRecusado() {} */
  useEffect(() => {
    async function loadItens() {
      const response = await api.get('/api/orders/all');
      setItens(response.data);
    }
    loadItens();
  }, []);

  console.log(itens);

  return (
    <Container>
      <List>
        <thead>
          <tr>
            <th>N° Pedido</th>
            <th>Cliente</th>
            <th>Contato</th>
            <th>Data</th>
            <th>Total</th>
            <tr>
              <th>Produtos</th>
              <th>QTD</th>
            </tr>
            <th>Aceitar</th>
          </tr>
        </thead>
        <tbody>
          {itens.map(item => (
            <tr>
              <td>{item.orderResponse.orderNumber}</td>
              <td>{item.customerName}</td>
              <td>{item.customerPhone}</td>
              <td>{item.orderResponse.date}</td>
              <td>{formatPrice(item.orderResponse.total)}</td>

              {item.orderResponse.products.map(product => (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
              <td>
                <button type="button">Aceitar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
