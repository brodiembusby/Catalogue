import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
// To run npm start

function App() {
  
  const [cards, setCards] = useState();
  // Async helps with the user experience
  const getCards = async () =>{
   
    try{
      // TODO:
      // Could add https checks as well
      const response = await api.get("/api/v1/cards");
      console.log(response.data);
      setCards(response.data);

    } catch(err){
      console.log(err);
    }

  }
  
  // getCards when AppComponent first loads
  useEffect(() => {
    getCards();
  },[])
  return (


// This is what displays on screen I think
<div className='App'>

    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>} ></Route>
        </Route>
    </Routes>

</div>
  );
}

export default App;
