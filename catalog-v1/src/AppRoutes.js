import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import UserCollection from "./components/userCollection/UserCollection";
import UserCollectionReview from "./components/usercollectionreview/UserCollectionReview";
const AppRoutes = ({ card, cards, getCardData, reviews, setReviews }) => {
  // For collection might be more understandable later to change to collectionId
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home cards={cards} />} />
        <Route path="Login" element={<Login />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="User" element={<UserCollection cards = {cards} />} />
        <Route path="/cards/:cardId" element={<UserCollectionReview getCardData= {getCardData} card={card} reviews={reviews} setReviews={setReviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
