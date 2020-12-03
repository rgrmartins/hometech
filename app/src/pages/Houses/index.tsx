/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container, Content, Error, FormStyles } from './styles';
import slider1 from '../../assets/slider1.svg';

type Profile = {
  cep: string;
  numero: number;
  longitude: number;
  latitude: number;
  residentes: number;
};

const schema = yup.object().shape({
  cep: yup.string().min(9).max(9).required(),
  numero: yup.number().positive().integer().required(),
  longitude: yup.number().required(),
  latitude: yup.number().required(),
  residentes: yup.number().positive().integer().required(),
});

function normalizeCEP(cep: string) {
  cep = cep.trim();
  cep = cep.replace(/(\d{5})(\d{3})/g, '$1-$2');
  return cep;
}

export function Form() {
  const { register, handleSubmit, errors, reset } = useForm<Profile>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    criteriaMode: 'all',
  });

  const onSubmit = handleSubmit(async (data) => {
    await api
      .post('house', data)
      .then((response) => toast.success('🚀 Casa cadastrada com sucesso!'))
      .catch((error) => {
        toast.error(`😱 ${error.response.data.error}`);
      });

    reset();
  });

  return (
    <FormStyles>
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="cep">CEP</label>
          <input
            placeholder="00000-000"
            type="tel"
            inputMode="numeric"
            autoComplete="cc-numeric"
            name="cep"
            id="cep"
            ref={register({
              required: true,
              max: 9,
              min: 9,
            })}
            onChange={(event) => {
              const { value } = event.target;
              event.target.value = normalizeCEP(value);
            }}
          />
          {errors.cep && errors.cep.types?.required && (
            <Error>CEP é Obrigatório</Error>
          )}
          {errors.cep && (errors.cep.types?.min || errors.cep.types?.max) && (
            <Error>CEP deve ter 8 digitos númericos</Error>
          )}
        </div>
        <div>
          <label htmlFor="numero">Número</label>
          <input
            ref={register({
              required: true,
            })}
            id="numero"
            name="numero"
            type="number"
          />
          {errors.numero && errors.numero.types?.typeError && (
            <Error>Número é Obrigatório</Error>
          )}
          {errors.numero && errors.numero.types?.min && (
            <Error>Número deve ser inteiro e positivo</Error>
          )}
        </div>
        <div>
          <label htmlFor="longitude">Longitude</label>
          <input
            ref={register({ required: true })}
            id="longitude"
            name="longitude"
            type="tel"
          />
          {errors.longitude && errors.longitude.types?.typeError && (
            <Error>Longitude é Obrigatório e deve ser númerico</Error>
          )}
        </div>
        <div>
          <label htmlFor="latitude">Latitude</label>
          <input
            ref={register({ required: true })}
            id="latitude"
            name="latitude"
            type="tel"
          />
          {errors.latitude && errors.latitude.types?.typeError && (
            <Error>Latitude é Obrigatório e deve ser númerico</Error>
          )}
        </div>
        <div>
          <label htmlFor="residentes">Residentes</label>
          <input
            ref={register({ required: true })}
            id="residentes"
            name="residentes"
            type="number"
          />
          {errors.residentes && errors.residentes.types?.typeError && (
            <Error>Residentes é Obrigatório</Error>
          )}
          {errors.residentes && errors.residentes.types?.min && (
            <Error>Número de residentes deve ser inteiro e positivo</Error>
          )}
        </div>
        <button type="submit">Salvar Residência</button>
      </form>
    </FormStyles>
  );
}

function Houses() {
  return (
    <Container>
      <Content>
        <img src={slider1} alt="Slider" />
        <Form />
      </Content>
    </Container>
  );
}

export default Houses;
