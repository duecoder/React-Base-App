import styled from 'styled-components';
import { iconColor } from '../../config/colors';

export const Nav = styled.nav`
  background-color: ${iconColor};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  a {
    color: #fff;
    margin: 0 15px 0;
    font-weight: bold;
  }
`;
