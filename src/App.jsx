import { useState } from 'react'
import './App.css'
import Card from './components/Card';

const App = () => {

  const cards  = [
    {question:"What is the supreme law of the land?", answer: "the Constitution"},
    {question: "What do we call the first ten amendments to the Constitution?", answer: "the Bill of Rights"},
    {question: "How many amendments does the Constitution have?", answer: "27"},
    {question: "Who is in charge of the executive branch?", answer: "the President"}, 
    {question: "What is freedom of religion?", answer: "You can practice any religion, or not practice any religion"}
  ];

  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [showCardAnswer, setShowCardAnswer] = useState(false);

  const toggleAnswer = (e) => {
    setShowCardAnswer(!showCardAnswer);
    const selectedDiv = e.currentTarget;
    selectedDiv.style.transform == 'rotateX(360deg)' ? 'rotateX(0deg)' : 'rotateX(360deg)';
  }

  const showNextCard = () => {
    setCurrentCardIdx((prevIdx) => (prevIdx + 1) % cards.length);
    setShowCardAnswer(false);
  }
 

  return (
    <div className="App">
      <div className="title">
        <h3>United States Citizenship Test</h3>
        <h4>Are you ready?</h4>
        <Card 
          card={cards[currentCardIdx]} 
          toggleCardAnswer = {toggleAnswer}
          showCardAnswer={showCardAnswer} 
        />
        <button onClick={showNextCard}>&#8594;</button>
      </div>

    </div>
  )
}

export default App
