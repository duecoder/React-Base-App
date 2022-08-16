import React from 'react';
import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';

export default function Page404() {
  toast.error('Bad luck! :(');

  return (
    <Container>
      <h1>Erro 404</h1>
      <p>Essa página não existe.</p>
    </Container>
  );
}
