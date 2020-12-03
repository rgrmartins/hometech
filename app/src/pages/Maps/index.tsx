import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import api from '../../services/api';
import { Container, Content, EmptySearch } from './styles';
import pointDefault from '../../assets/point-default.svg';
import point1 from '../../assets/point-1.svg';
import point2 from '../../assets/point-2.svg';
import point3 from '../../assets/point-3.svg';
import point4 from '../../assets/point-4.svg';
import point5 from '../../assets/point-5.svg';
import point6 from '../../assets/point-6.svg';
import point7 from '../../assets/point-7.svg';

type Home = {
  id: string;
  residentes: number;
  latitude: number;
  longitude: number;
};

const Maps: React.FC = () => {
  const [houses, setHouses] = useState([]);

  const icon1 = L.icon({
    iconUrl: point1,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const icon2 = L.icon({
    iconUrl: point2,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const icon3 = L.icon({
    iconUrl: point3,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const icon4 = L.icon({
    iconUrl: point4,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const icon5 = L.icon({
    iconUrl: point5,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const icon6 = L.icon({
    iconUrl: point6,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const icon7 = L.icon({
    iconUrl: point7,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });
  const iconDefault = L.icon({
    iconUrl: pointDefault,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
  });

  useEffect(() => {
    async function getHouses(): Promise<void> {
      const home = await api.get('houses');
      setHouses(home.data);
    }

    getHouses();
  }, []);

  function getIcon(residentes: number): L.Icon {
    switch (residentes) {
      case 1:
        return icon1;
      case 2:
        return icon2;
      case 3:
        return icon3;
      case 4:
        return icon4;
      case 5:
        return icon5;
      case 6:
        return icon6;
      case 7:
        return icon7;
      default:
        return iconDefault;
    }
  }

  // function centerMap(): [number, number] {
  //   if (houses.length > 0) {
  //     console.log('entrou no center');
  //     const { latitude, longitude } = houses[0];
  //     console.log([latitude, longitude]);
  //     return [latitude, longitude];
  //   }
  //   return [51.505, -0.09];
  // }

  return (
    <Container>
      <Content>
        <h1>Mapa de Calor das residências</h1>
        <h3>Pontos no mapa de acordo com números de residentes</h3>
        {houses.length === 0 && (
          <EmptySearch>
            <h1>Ainda não há residências cadastradas!</h1>
          </EmptySearch>
        )}
        <MapContainer center={[-23.63446, -46.620071]} zoom={7} className="map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {houses.length > 0 &&
            houses.map((home: Home) => (
              <Marker
                key={home.id}
                position={[home.latitude, home.longitude]}
                icon={getIcon(home.residentes)}
              >
                <Popup>Nesta residência mora {home.residentes} pessoa</Popup>
              </Marker>
            ))}
        </MapContainer>
      </Content>
    </Container>
  );
};

export default Maps;
