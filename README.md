# EADSKILL Frontend

![Preview do Projeto](/public/preview.png)

## RFs

- [x] - Desenvolver uma página que viabilize o CRUD completo de produtos, utilizando a API pública Fake Store API
- [x] O usuário deve ser capaz de listar todos os produtos de forma paginada (a paginação não pôde ser realizada pois ao testar o envio da query "limit", a api não retorna nenhum item);
- [x] O usuário deve ser capaz de filtrar cursos de uma determinada categoria;
- [x] O usuário deve ser capaz de ordenar os produtos por preço;
- [x] O nome dos produtos não podem ter mais que 30 caracteres;
- [x] Produtos com o rate acima de 4.5 devem ser listado com prioridade/destaque;
- [x] Durante o processo de atualização, o usuário não deve ser capaz de alterar a categoria de um produto;
- [x] O usuário deve ser capaz de visualizar os dados de um produto de forma individual;
- [x] A exclusão de produtos não deve ser permitida de forma imediata, o usuário deve confirmar a ação;

## RNFs
- [x] O código deve seguir os princípios SOLID.
- [x] Utilizar GIT para versionamento do código.
- [x] Criar um repositório público no GitHub com commits bem documentados.
- [x] Um olhar aguçado para UX e UI podem trazer um diferencial para seu projeto.
- [x] Yup/Zod - Utilizar uma das bibliotecas para gerir os formulários.
- [x] Testes unitários - Exigência de cobertura de no mínimo 30%;

## Não obrigatório
- [ ] Documente pelo menos um componente com o StoryBook.
- [x] Utilizar o Shadcn;
- [ ] Utilizar o conceito de FDD;

## Técnologias utilizadas
* Tecnologias
* Typescript;
* NextJs 14 (app dir);
* Tailwind CSS;
* Jest;

# Documentação do Projeto

## Rodando o Projeto

Este projeto foi construído com **Next.js 14** e **TypeScript**. Para rodar a aplicação, siga os passos abaixo:

### Pré-requisitos

- Node.js (versão >20)
- npm ou yarn

### Passos para Setup

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Nicolas-Moises/test-eadskill-web.git
   cd test-eadskill-web
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```
   
3. **Copie as variáveis ambiente:**
   ```bash
    cp .env.example .env
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação:**
   Abra seu navegador e vá para `http://localhost:3000`.

## Executando os Testes

Para executar os testes unitários, siga os passos abaixo:

1. **Certifique-se de que as dependências estão instaladas (veja a seção de Setup).**

2. **Execute os testes:**
   ```bash
   npm test
   # ou
   yarn test
   ```
3.  **Execute os testes com coverage:**
   ```bash
   npm run test:coverage
   # ou
   yarn run test:coverage
   ```

Os testes devem ser executados e você verá um relatório de cobertura de testes.