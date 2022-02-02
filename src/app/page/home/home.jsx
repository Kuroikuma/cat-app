import style from './home.module.css'
import { MainCat } from '../../components/main-cat/main-cat'
import { Information } from '../../components/information/information'
import { Footer } from '../../components/footer/footer'
import { Loading } from '../../components/loading/loading'

export const Home = () => {
  return (
    <>
      <div className={style.container}>
        <MainCat />
        <Information />
        <Footer />
      </div>
    </>
  )
}
