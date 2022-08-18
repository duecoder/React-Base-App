import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.buttonClickedRequest());
  }

  return (
    <Container>
      <Title>Login</Title>
      <Paragrafo>Welcome Comrade</Paragrafo>
      <button type="button" onClick={handleClick}>
        Be Happy!
      </button>
    </Container>
  );
}

// React.useEffect(() => {
//   async function getData() {
//     const response = await axios.get('/alunos');
//     const { data } = response;
//   }

//   getData();
// }, []);
