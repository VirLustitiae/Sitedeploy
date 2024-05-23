import { useState, FormEvent } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import "../components/css/Auth.css";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      if (user) {
        navigate("/");
      } else {
        alert("Usuário ou senha inválidos.");
      }
    } catch (err) {
      alert("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <h2>Login</h2>
        <p>Por favor, digite suas informações de login:</p>
      </header>

      <form onSubmit={handleSignIn} className="auth-form">
        <div className="input-container">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="seuemail@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error.message}</p>}

        <a href="#" className="forgot-password-link">Esqueceu sua senha?</a>

        <button type="submit" className="auth-button">
          Entrar
        </button>

        {loading && <p>Carregando...</p>}

        <div className="auth-footer">
          <p>Você não tem uma conta?</p>
          <Link to="/registro" className="auth-link">Crie a sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
