export default function QuizAnswer({letter, text, answerHandler, selectedItem, correctAnswer}){
  let className = 'quiz-answer quiz-answer_hover'

  if(selectedItem === text){
    className = correctAnswer === text ? 'quiz-answer quiz-answer_anim-correct' : 'quiz-answer quiz-answer_anim-wrong'
  }

  if(selectedItem !== '' && selectedItem !== text){
    className = 'quiz-answer'
  }

  return <button 
  className={className} 
  onClick={answerHandler} 
  disabled={selectedItem}
  >
    <span className='quiz-answer__letter'>{letter}</span>
    <span className='quiz-answer__text'>{text}</span>
  </button>
}