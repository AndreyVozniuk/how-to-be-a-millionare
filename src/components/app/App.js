import {useState} from 'react'

import StartPage from '../../pages/start-page/StartPage'
import EndPage from '../../pages/end-page/EndPage'
import GamePage from '../../pages/game-page/GamePage'

import Score from '../../components/score/Score'
import Quiz from '../../components/quiz/Quiz'

import {questions} from '../../config.json'

import './App.css'

function App() {
  const [page, setPage] = useState('')
  const [isOpenScore, setIsOpenScore] = useState(false)
  const [questionNum, setQuestionNum] = useState(0)
  
  function getStartPage() {
    return <StartPage setPage={setPage}/>
  }

  function getGamePage() {
    return <GamePage 
    setIsOpenScore={setIsOpenScore} 
    isOpenScore={isOpenScore} 
    >
      <Quiz 
      isOpenScore={isOpenScore}
      quizData={questions[questionNum]}
      setQuestionNum={setQuestionNum}
      setPage={setPage}
      />
      <Score 
      isOpenScore={isOpenScore}
      scoreData={questions[questionNum].amount}
      />
    </GamePage>
  }

  function getEndPage() {
    const  questionIndex = questionNum === questions.length ? questionNum - 1 : questionNum
    return <EndPage 
    totalScore={questionNum !== 0 ? questions[questionIndex].amount : '0$'} 
    setPage={setPage}
    setQuestionNum={setQuestionNum}
    />
  }

  if(questionNum === questions.length && page !== 'game_over'){
    setPage('game_over')
  }
  
  return <div className='App'>
    {
      page === '' ? getStartPage() :
      page === 'game' && questions[questionNum] ? getGamePage() :
      page === 'game_over' ? getEndPage() :
      'Page not found =('
    }
  </div>
}

export default App
