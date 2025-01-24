import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logout} from "../redux/slices/userSlice"
export default function ProfilePage() {
  const username = useSelector((state)=> state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logOut(){
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className="login">
      <h1 className="login-title">Мой профиль</h1>
      <h2 className="article-title">Мой никнейм:{username} </h2>
      <button className="btn" onClick={logOut}>Выйти</button>
    </div>
  );
}
