import style from './discover.module.css'
import { fourCats } from '../../../services/four-cats.services'

export const Discover = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <div className={style.top__left}>
          <p>Most Searched Breeds</p>
          <h2>66+ Breeds For you to discover</h2>
        </div>
        <div className={style.top__right}>
          <p>{'SEE MORE =>'}</p>
        </div>
      </div>
      <div className={style.bottom}>
        {fourCats &&
          fourCats.map((item, index) => (
            <div className={style.bottomItem} key={index}>
              <div className={style.bottomItem__Img}>
                <img src={item.url} alt={item.name} />
              </div>
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
