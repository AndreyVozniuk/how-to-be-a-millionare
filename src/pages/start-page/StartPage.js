import './StartPage.css'
import handOK from '../../img/hand.svg'

export default function StartPage({setPage}) {
  return <div className='start-page'>
    <div className='start-page__content'>
      <div className='start-page__picture'>
        <img src={handOK} alt='cool pic'></img>
      </div>
      <div className='start-page__text'>
        <div className='start-page__title'>Who wants to be <br /> a millionaire?</div>
        <button className='start-page__btn btn' onClick={_ => setPage('game')}>Start</button>
      </div>
    </div>
  </div>
}