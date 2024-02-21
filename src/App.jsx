import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    return (
      <div className='timeline'>
        <div className='header'>
        <h1>Home</h1>
        <img className='top-tweets' src="src/assets/Timeline-Prop.png" alt="top-tweets" />
        </div>

        <div className='tweet-editor '>
      
        <div className='avatar'>
          <img className='avatar' src="src/assets/IMG-20240214-WA0019(1).jpg" alt="avatar" />
        </div>

        <div className='tweet-editor-form'>

          <input className='tweet-editor-input' type='text' placeholder= "what's happening?"/>

          <div className='tweet-editor-buttons'>

            <div className='tweet-editor-actions'>
              <img src="src/assets/Top-Tweets.png" alt="" />
              <img src="src/assets/Top-Tweets-1.png" alt="" />
              <img src="src/assets/Top-Tweets-2.png" alt="" />
              <img src="src/assets/Top-Tweets-3.png" alt="" />
              <img src="src/assets/Top-Tweets-4.png" alt="" />

            </div>
            <div className='button'>Twitter</div>
          </div>

        </div>

        </div>

<div className='tweets'>
  <div className='tweet'>
  <img src="src/assets/image 1.png" alt="" />
  <h1>cnn</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquid. Sit, officiis exercitationem nam nihil laudantium suscipit. Dolor beatae perspiciatis laborum aliquid placeat. Quidem facilis quasi rem assumenda illo dolorum?</p>
  </div>

</div>

      </div>
    );
  }

export default App;