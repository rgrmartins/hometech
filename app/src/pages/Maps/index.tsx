import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Content } from './styles';

const Maps: React.FC = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    async function getHouses(): Promise<void> {
      const home = await api.get('houses');
      setHouses(home.data);
    }

    getHouses();
  }, []);

  return (
    <Container>
      <Content>
        {console.log(houses)}
        <h1>Mapa de Calor das residências</h1>
        <h3>Buscar na base e criar o mapa de calor</h3>
      </Content>
    </Container>
  );
};

export default Maps;
