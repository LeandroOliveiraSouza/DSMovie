# DSMovie
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/LeandroOliveiraSouza/DSMovie/blob/main/LICENSE) 

# Sobre o projeto
https://dscommerce-los.netlify.app

DSCommerce é uma aplicação full stack web e mobile, construída durante o curso **Formação Desenvolvedor Moderno** (#edição1), organizado pela [DevSuperior](https://devsuperior.com "Site da DevSuperior").

Inicialmente a aplicação apresenta uma página contendo pesquisa e catalogo de produtos. Uma vez escolhido o produto de interesse, com um click sobre ele, é aberta uma página de detalhes do produto, onde é dada opção para escolha de novos produtos ou comprar. Por questões de segurança é exigido que a partir dessa etapa o usuário se identifique por login. Feito o login, admitido para usuários administradores e clientes, é possível fechar o pedido. Caso o usuário seja administrador, ele pode ter acesso a uma área administrativa, com identidade distinta daquela usada para o cliente. Nessa área, esse usuário pode editar ou incluir novos produtos, que nesse caso alimentam o banco de dados por meio de requisições.

## Layout web
![Web product Listing](https://github.com/LeandroSouzaOliveira/assets/blob/main/dscommerce/Product%20Listing.png)

![Web Product Form](https://github.com/LeandroOliveiraSouza/assets/blob/main/dsmovie-form.png)

## Modelo conceitual
![Modelo Conceitual](https://github.com/LeandroSouzaOliveira/assets/blob/main/dscommerce/Conceptual%20Model.png)

# Competências:
## Back end:
- Modelo de domínio
- Acesso a banco de dados
- Estruturar o back end no padrão camadas
- Criar endpoints da API REST
- Implantação na nuvem

## Front end:
- Detalhes de card;
- Formulário
- Navageção entre páginas
- Implantação na nuvem

# Tecnologias utilizadas
## Back end
- Java
- Spring Data JPA
- Spring Web
- Spring Security
- Banco de dados H2
- Maven
## Front end
- HTML / CSS / JavaScript / TypeScript
- Bootstrap (5.1.3)
- ReactTS (React-App)
- React Router
- AXIOS

## Implantação em produção
- Back end: localhost
- Front end web: Netlify
- Banco de dados: H2 e Postgres

# Como executar o projeto

## Back end
Pré-requisitos: Java 17

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: yarn / react

```bash
# clonar repositório
git clone https://github.com/LeandroSouzaOliveira/dsmovie/frontend

# instalar dependências
yarn

# executar o projeto
yarn dev
```

# Agradecimentos
- DevSuperior https://devsuperior.com.br/

# Autor

Leandro de Oliveira Souza

