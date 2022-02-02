import style from './discover.module.css'
import { useNavigate } from 'react-router-dom'

export const DiscoverItem = ({ url, name, id }) => {
  let navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/description/${id}`)
  }

  return (
    <div className={style.bottomItem}>
      <div onClick={handleNavigate} className={style.bottomItem__Img}>
        <img src={url} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  )
}
