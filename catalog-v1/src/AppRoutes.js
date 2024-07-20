import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/componentsJS/Layout";
import Pile from "./components/componentsJS/Pile";

// Pages 
import Verification from "./pages/Verification";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Register from "./pages/Register";

import RequireAuth from './components/componentsJS/RequireAuth';
import Collectible from "./components/componentsJS/Collectible";

const AppRoutes = ({ randomCards, allCards }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home randomCards={randomCards} />} />

        {/* <Route element={<RequireAuth />}> */}
          <Route path="piles" element={<Pile />} />
          <Route path="piles/:pileId" element={<Collectible allCards={allCards} />} />
        {/* </Route> */}

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
