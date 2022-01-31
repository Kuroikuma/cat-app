import style from './main-cat.module.css'
import { Search } from '../search/search'
import background from './../../../assets/HeroImagelg.png'

export const Main = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '100% 100%',
      }}
      className={style.main}
    >
      <Search />
    </div>
  )
}
