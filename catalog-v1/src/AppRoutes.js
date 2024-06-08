import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import UserCollection from "./components/userCollection/UserCollection";
import UserCollectionReview from "./components/usercollectionreview/UserCollectionReview";
// WOrk for the day started at 2:20pm
const AppRoutes = ({ card, cards, getCardData, reviews, setReviews }) => {
  const cardCollection = cards.map(card => ({
    id: card._id,
    name: card.name,
    image: card.image
  }));

  const handleCreateNewCollection = () => {
    // Logic to create a new collection
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home cards={cards} />} />
        <Route path="Login" element={<Login />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="User" element={<UserCollection cardCollection={cardCollection} onCreateNewCollection={handleCreateNewCollection} />} />
        <Route path="/collection/:collectionId" element={<UserCollectionReview getCardData={getCardData} card={card} reviews={reviews} setReviews={setReviews} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
