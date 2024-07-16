import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/Layout";
import UserPile from "./components/userPile/UserPile";
import UserCollectibleReview from "./components/usercollectiblereview/UserCollectibleReview";
// Pages 
import Verification from "./pages/Verification";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfile from "./pages/UserProfile";

const AppRoutes = ({ collectible, collectibles, getCollectibleData, reviews, setReviews }) => {
  // For pile might be more understandable later to change to collectionId
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home collectibles={collectibles} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<UserPile 
              collectibles = {collectibles}  />} />
        <Route path="/collectibles/:collectibleId" element={<UserCollectibleReview 
              getCollectibleData={getCollectibleData} 
              collectible={collectible} 
              reviews={reviews} 
              setReviews={setReviews} />} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
