import * as types from '../types';

export const initialState = {
  botaoClicado: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCCESS: {
      console.log('Success! :)');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BUTTON_CLICKED_FAILURE: {
      console.log('Error! :(');
      return state;
    }

    case types.BUTTON_CLICKED_REQUEST: {
      console.log('Requesting...');
      return state;
    }

    default: {
      return state;
    }
  }
}
