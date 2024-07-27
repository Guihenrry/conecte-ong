<h1 align="center">
  <img alt="ConecteOng" src=".github/logo.png" width="250px" />
</h1>

<h3 align="center">
  Plataforma que conecta voluntários a ONGs
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Guihenrry/conecte-ong?color=623CEA">

  <img alt="Tech Challenge - FIAP" src="https://img.shields.io/badge/Tech%20Challenge-FIAP-623CEA">

  <img alt="ConecteOng" src="https://img.shields.io/badge/ConecteOng-623CEA">
</p>

<p align="center">
  <img alt="Screenshot" src=".github/screenshot.png" width="700px" />
</p>

> [Visualizar live demo](https://conecte-ong.vercel.app/)

## Descrição

O projeto **Fiap ConecteOng** visa criar uma plataforma que conecta voluntários a ONGs, facilitando o engajamento e a organização de atividades voluntárias. A plataforma também permite o cadastro de novas ONGs, promovendo uma rede de colaboração e apoio.

## Tecnologias Utilizadas

- NextJS
- ReactJS
- TailwindCSS
- TypeScript
- SupaBase

## Funcionalidades

### Cadastro de Usuário

- Registro de novos membros com informações como Nome Completo, E-mail e Senha. Esta funcionalidade é essencial para manter um registro organizado e detalhado de todos os usuários.

### Listagem de ONGs

- Apresenta uma tabela com informações das ONGs registradas, incluindo Nome, Descrição, Localização, Área de Atuação e Contato. Isso facilita a busca e o engajamento dos voluntários.

### Cadastro de ONGs

- Permite o registro de novas ONGs na plataforma, incluindo dados essenciais como Nome, Descrição, Localização, Área de Atuação e Contato.

## Como utilizar

1 - Primeiro passo é clonar esse repositório

```bash
git clone https://github.com/Guihenrry/conecte-ong.git
```

2 - Acessar o diretório do projeto

```bash
cd conecte-ong
```

3 - Instalar o pnpm (OBS: precisa no NodeJS instalado na sua maquina)

```bash
npm install -g pnpm
```

4 - Instalar as dependências

```bash
pnpm install
```

5 - Copiar o arquivo '.env.example' para '.env.local' (OBS: precisa adicionar as credenciais do supabase)

```bash
cp .env.example .env
```

6 - Por fim, execute o projeto em modo desenvolvimento

```bash
pnpm dev
```
