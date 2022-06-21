import Picker from 'emoji-picker-react'
import React, { useState } from 'react'
import Animation from './Animation'
import './App.css'
import YoutubeForm from './components/YoutubeForm'

function App () {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  }
  return (
    <div className='App'>
      {/* <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '70%' }} /> */}
      <YoutubeForm />
      {/* <Animation /> */}
    </div>
  )
}

export default App
