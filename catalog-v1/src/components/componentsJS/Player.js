import "./../componentsCSS/Player.css"
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
const Player = ({ randomCards }) => {

  return (
    <div className='collectibles-carousel-container'>
      <Carousel>
        {
          randomCards?.map((randomCards) => {
            return (
              <Paper key={randomCards.name}>
                <div className='cards-container'>
                  <div className='player-cards'>
                    <div className='cards-bio'>
                      <div className='cards-image'>
                        <img src={randomCards.image} alt="" />
                      </div>
                      <div className='cards-title'>
                        <h4>{randomCards.name}</h4>
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