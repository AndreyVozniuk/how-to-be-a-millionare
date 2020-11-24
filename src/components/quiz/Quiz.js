import {useState, useEffect} from 'react'
import QuizAnswer from './QuizAnswer'
import './Quiz.css'

export default function Quiz({isOpenScore, quizData, setQuestionNum, setPage}) {
  const {answers, question, correctAnswer} = quizData 

  const [selectedItem, setSelectedItem] = useState('')

  useEffect(_ => {
    if(selectedItem === correctAnswer){
      setTimeout(_ => {
        setQuestionNum(prev => prev + 1)
        setSelectedItem('')
      }, 1500)
    }

    if(selectedItem !== correctAnswer && selectedItem !== ''){
      setTimeout(_ => setPage('game_over'), 2000)
    }
  }, [selectedItem])

  function answerHandler(e) {
    e.target.children.length > 1 ? setSelectedItem(e.target.children[1].textContent) : 
    setSelectedItem(e.target.parentNode.children[1].textContent)
  }

  return <div className={isOpenScore ? 'quiz hide' : 'quiz show'}>
    <div className='quiz-question'>{question}</div>
    <div className='quiz-answers'>
      {answers.map((el, i) => {
        return <QuizAnswer 
          text={el} 
          letter={String.fromCharCode(65 + i)} 
          answerHandler={answerHandler} 
          selectedItem={selectedItem}
          correctAnswer={correctAnswer}
          key={el + i}
        />
      })}
    </div>
  </div>
}