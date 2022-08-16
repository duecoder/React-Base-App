import React, { Fragment } from 'react';
import { Title, Paragrafo } from './styled';

import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title>Login</Title>
      <Paragrafo>Lorem</Paragrafo>
      <button type="button">Send</button>
    </Container>
  );
}
