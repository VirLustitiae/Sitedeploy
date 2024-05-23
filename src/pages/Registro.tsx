import { useState, FormEvent } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfig";
import "../components/css/Auth.css";

export default function Registro() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password);
      if (user) {
        alert("Usuário criado com sucesso!");
        navigate("/login");
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert(error);
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <h2>Cadastre-se</h2>
        <p>Digite suas informações de cadastro:</p>
      </header>

      <form onSubmit={handleSignUp} className="auth-form">
        <div className="input-container">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
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
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error.message}</p>}

        <button type="submit" className="auth-button">
          Cadastrar
        </button>

        {loading && <p>Carregando...</p>}

        <div className="auth-footer">
          <p>Você já tem uma conta?</p>
          <Link to="/login" className="auth-link">Acesse sua conta aqui</Link>
        </div>
      </form>
    </div>
  );
}
