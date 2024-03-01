import Tweet from "./tweet"
import { data } from "../data"

function Tweets(){
    return(
      <div className='tweets'>

      {
        data.map((para,index) =>{
          
          return <Tweet key={index} param={para}/>
        })
      }
      </div>
  
    )
  }
  export default Tweets
  