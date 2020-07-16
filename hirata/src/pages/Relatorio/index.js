import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import { Container, Card } from './styles';

export default function Relatorio() {
  const [startDate, setStartDate] = useState(null);
  const [FinishDate, setFinishDate] = useState(null);

  function handleCreate() {}

  return (
    <Container>
      <Card>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          disabledKeyboardNavigation
          placeholderText="Data de inicio"
        />

        <DatePicker
          selected={FinishDate}
          onChange={date => setFinishDate(date)}
          disabledKeyboardNavigation
          placeholderText="Data de término"
        />
        <button type="button" onClick={() => handleCreate()} enviar>
          Gerar relatorio
        </button>
      </Card>
    </Container>
  );
}
