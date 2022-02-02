import style from './search.module.css'
import { useNavigate } from 'react-router-dom'

export const BreedslistItem = ({ name, id }) => {
  let navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/description/${id}`)
  }
  return (
    <div onClick={handleNavigate} className={style.breedListItem}>
      <p>{name}</p>
    </div>
  )
}
