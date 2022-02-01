import style from './main-cat.module.css'
import { Logo } from './logo'
import { Main } from './main'
import { Discover } from '../discover/discover'

export const MainCat = () => {
  return (
    <>
      <div className={style.container}>
        <Logo />
        <Main />
        <Discover />
      </div>
    </>
  )
}
