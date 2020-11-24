import './EndPage.css'
import handOK from '../../img/hand.svg'

export default function EndPage({totalScore, setPage, setQuestionNum}) {
  function buttonHandler() {
    setPage('game')
    setQuestionNum(0)
  }

  return <div className='end-page'>
    <div className='end-page__picture'>
      <img src={handOK} alt='cool pic'></img>
    </div>
    <div className='end-page__summary'>
      <div className='end-page__title'>Total score:</div>
      <div className='end-page__sum'>{totalScore} earned</div>
      <button className='btn end-page__btn' onClick={buttonHandler}>Try again!</button>
    </div>
  </div>
}