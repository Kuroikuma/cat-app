import style from './home.module.css'
import { MainCat } from '../../components/main-cat/main-cat'

export const Home = () => {
  return (
    <>
      <div className={style.container}>
        <MainCat />
      </div>
    </>
  )
}
