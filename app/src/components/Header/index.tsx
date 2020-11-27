import React from 'react';

import logo from '../../assets/logo-hometech.svg';
import { Container, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Hometech" />
        <nav>
          <a href="/">Cadastro</a>
          <a href="/maps">Mapa</a>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
