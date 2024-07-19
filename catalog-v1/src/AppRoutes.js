import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/componentsJS/Layout";
import Pile from "./components/componentsJS/Pile";
// import UserProfile from "./components/componentsJS/UserProfile";
// import Review from "./components/componentsJS/Review";

// Pages 
import Verification from "./pages/Verification";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Register";

import RequireAuth from './components/componentsJS/RequireAuth';

const AppRoutes = ({ cards }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home cards={cards} />} />

        <Route element={<RequireAuth />}>
          {/* <Route path="profile" element={<UserProfile />} /> */}
          <Route path="piles" element={<Pile />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="verification" element={<Verification />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
