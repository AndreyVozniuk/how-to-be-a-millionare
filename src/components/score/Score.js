import {amounts} from '../../config.json'
import ScoreItem from './ScoreItem'
import './Score.css'

export default function Score({isOpenScore, scoreData}) {
  return <div className={isOpenScore ? 'score show' : 'score hide'} id='score'>
    <div className='score__wrap'>
      {amounts.map(el => <ScoreItem text={el} scoreData={scoreData} key={el+scoreData}/>)}
    </div>
  </div>
}