import { Routes, Route } from "react-router-dom";
// Components
import Layout from "./components/componentsJS/Layout.js";
import Pile from "./components/componentsJS/Pile.js";
import UserProfile from "./components/componentsJS/UserProfile.js";
import Review from "./components/componentsJS/Review.js";

// Pages 
import Verification from "./pages/Verification";
import Confirmation from "./pages/Confirmation";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

// import RequireAuth from "./components/componentsJS/RequireAuth.js"
import  RequireAuth  from './components/componentsJS/RequireAuth';
const AppRoutes = ({ collectible, collectibles, getCollectibleData, reviews, setReviews }) => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        
        <Route index element={<Home collectibles={collectibles} />} />


        <Route element={<RequireAuth /> }>
          <Route path="/profile" element={<UserProfile/>} />  
          <Route path="/user" element={<Pile 
              collectibles = {collectibles}  />} />
          <Route path="/collectibles/:collectibleId" element={<Review 
              getCollectibleData={getCollectibleData} 
              collectible={collectible} 
              reviews={reviews} 
              setReviews={setReviews} />} />

        </Route>
        
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/confirmation" element={<Confirmation/>} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
