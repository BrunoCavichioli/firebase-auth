#  Firebase Authentication App

##  Descrição

Este projeto é uma aplicação web desenvolvida com **HTML, CSS e JavaScript**, utilizando o **Firebase Authentication** para gerenciar autenticação de usuários.

A aplicação permite que usuários se cadastrem, façam login e mantenham sua sessão ativa, com uma interface moderna e interativa.

---

## Funcionalidades

###  Autenticação

* Cadastro com email e senha
* Login de usuários
* Logout
* Persistência de sessão (usuário continua logado)

###  Experiência do Usuário (UX)

* Loading com spinner
* Validação de senha em tempo real
* Mensagens de erro personalizadas
* Interface dinâmica baseada no estado do usuário

###  Interface (UI)

* Layout moderno com efeito glassmorphism
* Animações suaves (login ↔ cadastro)
* Botões interativos 

---

##  Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES Modules)
* Firebase Authentication

---

##  Estrutura do projeto

```
firebase-auth/
│── index.html
│── style.css
│── app.js
│── README.md
```

---

##  Como executar o projeto

1. Clone este repositório:

```
git clone https://github.com/seu-usuario/firebase-auth.git
```

2. Abra a pasta do projeto

3. Execute com um servidor local (recomendado):

* Extensão Live Server (VS Code)

ou via terminal:

```
npx serve
```

---

##  Configuração do Firebase

1. Acesse o Firebase Console
2. Crie um projeto
3. Ative Authentication → Email/Senha
4. Copie suas credenciais e substitua no arquivo `app.js`:

```js
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_ID",
  appId: "SEU_APP_ID"
};
```

---

##  Deploy

O projeto pode ser publicado facilmente utilizando:

* Vercel
* Firebase Hosting

---

##  Prints da aplicação

> Adicione aqui imagens do projeto rodando

* Tela de login
* Tela de cadastro
* Usuário autenticado

---

##  Diferenciais do projeto

* Interface moderna (UI/UX aprimorada)
* Validação em tempo real  
* Animações suaves 
* Feedback visual ao usuário
* Código organizado e modular

---

##  Licença

Este projeto é apenas para fins educacionais.

---

##  Autor

Desenvolvido por **Bruno Cavichioli**
