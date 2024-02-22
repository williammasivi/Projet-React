import tweets from '../assets/image 1.png'
import Tweets1 from '../assets/The New York Times.png'
import Tweets2 from '../assets/Name.png'
import Tweets3 from '../assets/Name-1.png'

 
function Tweets(){
    return(
       <div className='tweets'>
       <div className='tweet'>
       <img className='tweets' src={tweets} alt="top-tweets" />
       <img className='tweets 1' src={Tweets1} alt="top-tweets" />
       <img className='tweets 2' src={Tweets2} alt="top-tweets" />
       <img className='tweets 3' src={Tweets3} alt="top-tweets" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquid. Sit, officiis exercitationem nam nihil laudantium suscipit. Dolor beatae perspiciatis laborum aliquid placeat. Quidem facilis quasi rem assumenda illo dolorum?</p>
     </div>
  
     </div>
  
    )
  }
  export default Tweets
  