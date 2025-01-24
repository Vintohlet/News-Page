import { Routes, Route , Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ArticlePage from "../pages/ArticlePage";
import { useSelector } from "react-redux";

export default function AppRouter() {
  const isAuth = useSelector((state) => state.user.isAuth)
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<NewsPage />} />
      {isAuth ? ( 
        <>
         <Route path="/profile" element={<ProfilePage />} />
         <Route path="/news/:id" element={<ArticlePage />} />
        </>
      ):(
        <Route path="/login" element={<LoginPage />} />
      )}
     
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}
