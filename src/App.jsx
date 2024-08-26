import { useEffect, useState } from 'react'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

const initialState = {
      good: 0,
      neutral: 0,
      bad: 0
}

function App() {
  const [counter, setCounter] = useState(  
    () => {return window.localStorage.getItem('counter') ? JSON.parse(window.localStorage.getItem('counter')) : initialState }
  )

  useEffect(() => { 
    window.localStorage.setItem('counter', JSON.stringify(counter))
  }, [counter])
    

  const updateFeedback = (feedbackType) => { 
    setCounter(
        {...counter, [feedbackType]: counter[feedbackType] + 1}
      )
   }

  return (
    <>
      <Description />
      <Options handleClick={updateFeedback} options={counter}/>
      <Feedback good={counter.good} neutral={counter.neutral} bad={counter.bad}/>
    </>
  )
}

export default App
