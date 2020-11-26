import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import 'express-async-errors';
import morgan from 'morgan';
import * as bodyParser from "body-parser";
import cors from 'cors';
import './util/mudole-alias';
import routes from './routes';

// Conexão com o banco de dados
const connection = createConnection();

const app = express();
app.use(bodyParser.json());
const port = 3333;

// Middlewares
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());

// Rotas
app.use(routes);

// Listen
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});