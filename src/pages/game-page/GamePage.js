import './GamePage.css'

export default function GamePage({children, setIsOpenScore, isOpenScore}) {
  return <div className='game-page'>
    <button className='game-page__menu' 
    onClick={_ => setIsOpenScore(value => !value)} 
    style={{top: isOpenScore ? '5px' : '20px'}}
    >
      {
        isOpenScore ? <span>&times;</span> : 
        <>
          <div className='game-page__line'></div>
          <div className='game-page__line'></div>
          <div className='game-page__line'></div>
        </>
      }
    </button>
    {children}
  </div>
}
