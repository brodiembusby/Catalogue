import './Player.css';
import { Paper } from '@mui/material';
import { Button } from 'react-bootstrap';
import Carousel from 'react-material-ui-carousel';
import { useNavigate } from 'react-router-dom';

const Player = ({ cards }) => {
  
  const navigate = useNavigate();

  function reviews(cardId){
    navigate(`/Reviews/${cardId}`);
  }
  
  
  return (
    <div className='card-carousel-container'>
      <Carousel>
        {
          cards?.map((card) => {
            return (
              <Paper key={card.name}>
                <div className='card-container'>
                  <div className='player-card'>
                    <div className='card-bio'>
                      <div className='card-image'>
                        <img src={card.image} alt="" />
                      </div>
                      <div className='card-title'>
                        <h4>{card.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>

              </Paper>

            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Player;