import { useEffect, useState } from 'react'
import styles from './App.module.css'
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

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
  
  const totalFeedback = Object.values(counter).reduce(
    (acc, item) => acc + item,
    0
  );

  const totalPositive = totalFeedback
    ? Math.round((counter.good / totalFeedback) * 100)
    : 100;
  
  const resetCounters = () => { 
     setCounter({
      ...initialState,
    });
  }


  return (
    <div className={styles.container}>
      <Description />
      <div>
        <Options handleClick={updateFeedback} options={counter} totalFeedback={totalFeedback} handleReset={resetCounters}/>
        
      </div>
      
      {totalFeedback ? <Feedback good={counter.good} neutral={counter.neutral} bad={counter.bad} totalFeedback={totalFeedback} totalPositive={totalPositive}/> : <Notification text="No feedback yet"/>}
      
    </div>
  )
}

export default App
