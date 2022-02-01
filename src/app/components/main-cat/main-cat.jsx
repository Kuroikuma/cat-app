import style from './main-cat.module.css'
import { Logo } from './logo'
import { Main } from './main'

export const MainCat = () => {
  return (
    <>
      <div className={style.container}>
        <Logo />
        <Main />
      </div>
    </>
  )
}
