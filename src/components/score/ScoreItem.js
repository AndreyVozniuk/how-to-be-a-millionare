export default function ScoreItem({text, scoreData}) {
  return <div 
  className={`score-item ${scoreData === text ? 'score-item_active' : 'score-item_inactive'}`}
  >
    {text}
  </div>
}