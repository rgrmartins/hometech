import React, { useEffect, useRef, useState } from 'react';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
// import api from '../../services/api';
import { Container, Content } from './styles';
import slider1 from '../../assets/slider1.svg';

import Input from '../../components/Input';

interface formData {
  cep: string;
  numero: number;
  longitude: number;
  latitude: number;
  residentes: number;
}

const Houses: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  return (
    <Container>
      <Content>
        <img src={slider1} alt="Slider" />
        <h1>Formulário de Cadastro</h1>
        <h3>Salvar no Banco da API os dados com validação da casa</h3>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" />
          <Input name="email" />
        </Form>
      </Content>
    </Container>
  );
};

export default Houses;
