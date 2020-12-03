<h1 align="center">
  <img src="app/src/assets/logo-hometech.svg" alt="logo" >

</h1>

<p align="center">:house_with_garden: Fique em casa.</p>

## :rocket: Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- HTML
- CSS
- Javascript
- TypeScript
- NodeJS
- ReactJS
- Styled Components
- Postgres
- Leaflet

<br>

## :computer: Projeto

HomeTech Register é uma aplicação web onde o usuário irá cadastrar residências e poderá observar todas as casas cadastradas em um mapa e com exibição do point de acordo com o número de residentes na casa;

## :wrench: Instalação e uso

Para rodar a aplicação, você precisa ter o [Node](https://nodejs.org/en/) e [Docker](https://www.docker.com/) instalado em sua máquina e seguir os passos abaixo:

1) Abra um terminal e copie este repositório com o comando
    ```
    git clone https://github.com/rgrmartins/hometech
    ```
    ou use a opção de download.
 
 2) Entre na pasta com
    ```
    cd hometech
    ```
    Denttro da pasta hometech terá 2 subpastas (Api e App)
 
 3) Será necessário entra tanto na pasta api quanto na app para instalar as dependências
    ```
    npm install
    ```
    ou
    ```
    yarn 
    ```
 4) Abra 2 terminais, um para a API e outro para o App
    <br>
    4.1) Dentro da pasta da API, vamos criar os containers para o Banco de dados e PG Admin, execute:
       ```
      docker-compose up -d
      ```
      É necessário criar o arquivo de variáveis de ambiente .env, igual ao arquivo .env.example que está na raiz da API:
       ```
      Criar o arquivo .env
      ```
      vamos subir a aplicação API, execute:
       ```
      yarn dev
      ```
    4.2) Dentro da pasta APP, em outro terminal, vamos subir o APP, execute:
      ```
      yarn start
      ```
 5) Acesse ```http://localhost:3000``` no seu navagador.

