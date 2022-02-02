import style from './discover.module.css'
import { DiscoverItem } from './discover-item'
import { useNavigate } from 'react-router-dom'
import { fourCats } from '../../../services/four-cats.services'

export const Discover = () => {
  let navigate = useNavigate()
  const handleNavigate = () => {
    navigate(`/top`)
  }
  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <div className={style.top__left}>
          <p>Most Searched Breeds</p>
          <h2>66+ Breeds For you to discover</h2>
        </div>
        <div className={style.top__right}>
          <p onClick={handleNavigate}>{'SEE MORE =>'}</p>
        </div>
      </div>
      <div className={style.bottom}>
        {fourCats &&
          fourCats.map((item, index) => (
            <DiscoverItem
              key={index}
              name={item.name}
              id={item.id}
              url={item.url}
            />
          ))}
      </div>
    </div>
  )
}
