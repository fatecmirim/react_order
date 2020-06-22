import React, { useEffect, useState } from 'react';
import { Container, List } from './styles';
import api from '../../../services/api';

export default function UserList() {
  const [users, setUsers] = useState([]);

  /* function handleRecusado() {} */
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/api/customers');
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  console.log(users);

  return (
    <Container>
      <List>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </List>
    </Container>
  );
}
