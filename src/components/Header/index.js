import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="http://0.0.0.0">
        <FaHome size={24} />
      </a>
      <a href="http://0.0.0.0">
        <FaUserAlt size={24} />
      </a>
      <a href="http://0.0.0.0">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
}
