import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";

export default function LoginPage() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e){
    e.preventDefault();
    if (input){
      dispatch(login(input));
      navigate("/")
    }
    else{
      alert('Заполните поле!')
    }
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1 className="login-title">Войти</h1>
      <input
        type="text"
        placeholder="Введите никнейм"
        className="login-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn">
        Войти
      </button>
    </form>
  );
}
