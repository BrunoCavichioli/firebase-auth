import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyArXKmD2dqjuOBxgdA-7XxPhkMs1QgMC_k",
  authDomain: "atv-fb-brunocavichioli.firebaseapp.com",
  projectId: "atv-fb-brunocavichioli",
  storageBucket: "atv-fb-brunocavichioli.firebasestorage.app",
  messagingSenderId: "1062028736667",
  appId: "1:1062028736667:web:fcb777562664f438592e3e",
  measurementId: "G-MDPV9MME0C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ELEMENTOS
const loading = document.getElementById("loading");
const authContainer = document.getElementById("auth-container");
const userContainer = document.getElementById("user-container");
const userEmail = document.getElementById("user-email");
const message = document.getElementById("message");

// FUNÇÕES AUXILIARES
function showLoading(show) {
  loading.classList.toggle("hidden", !show);
}

function showMessage(text, color = "black") {
  message.innerText = text;
  message.style.color = color;
}

function validate(email, password) {
  if (!email.includes("@")) {
    showMessage("Email inválido ❌", "red");
    return false;
  }

  if (password.length < 6) {
    showMessage("Senha deve ter no mínimo 6 caracteres ❌", "red");
    return false;
  }

  return true;
}

// MENSAGENS PERSONALIZADAS
function getErrorMessage(error) {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "Esse email já está cadastrado ❌";
    case "auth/invalid-email":
      return "Email inválido ❌";
    case "auth/weak-password":
      return "Senha muito fraca ❌";
    case "auth/user-not-found":
      return "Usuário não encontrado ❌";
    case "auth/wrong-password":
      return "Senha incorreta ❌";
    default:
      return "Erro: " + error.message;
  }
}

// CADASTRO
window.register = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!validate(email, password)) return;

  showLoading(true);

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    showMessage("Cadastro realizado com sucesso ✅", "green");
  } catch (error) {
    showMessage(getErrorMessage(error), "red");
  }

  showLoading(false);
};

// LOGIN
window.login = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  showLoading(true);

  try {
    await signInWithEmailAndPassword(auth, email, password);
    showMessage("Login realizado com sucesso ✅", "green");
  } catch (error) {
    showMessage(getErrorMessage(error), "red");
  }

  showLoading(false);
};

// LOGOUT
window.logout = async () => {
  showLoading(true);
  await signOut(auth);
  showLoading(false);
};

// ESTADO DE AUTENTICAÇÃO
onAuthStateChanged(auth, (user) => {
  showLoading(false);

  if (user) {
    authContainer.classList.add("hidden");
    userContainer.classList.remove("hidden");
    userEmail.innerText = user.email;
  } else {
    authContainer.classList.remove("hidden");
    userContainer.classList.add("hidden");
  }
});