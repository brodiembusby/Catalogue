import "./../componentsCSS/Player.css"
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
const Player = ({ cards }) => {

  return (
    <div className='collectibles-carousel-container'>
      <Carousel>
        {
          cards?.map((cards) => {
            return (
              <Paper key={cards.name}>
                <div className='cards-container'>
                  <div className='player-cards'>
                    <div className='cards-bio'>
                      <div className='cards-image'>
                        <img src={cards.image} alt="" />
                      </div>
                      <div className='cards-title'>
                        <h4>{cards.name}</h4>
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