import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import Reviews from "./components/reviews/Reviews";

const AppRoutes = ({ card, cards, getCardData, reviews, setReviews }) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home cards={cards} />} />
        <Route path="Login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/Reviews/:cardId" element={<Reviews getCardData={getCardData} card={card} reviews={reviews} setReviews={setReviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
