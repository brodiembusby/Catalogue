import "./../componentsCSS/Player.css"
import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
const Player = ({ collectibles }) => {

  return (
    <div className='collectibles-carousel-container'>
      <Carousel>
        {
          collectibles?.map((collectibles) => {
            return (
              <Paper key={collectibles.name}>
                <div className='collectibles-container'>
                  <div className='player-collectibles'>
                    <div className='collectibles-bio'>
                      <div className='collectibles-image'>
                        <img src={collectibles.image} alt="" />
                      </div>
                      <div className='collectibles-title'>
                        <h4>{collectibles.name}</h4>
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