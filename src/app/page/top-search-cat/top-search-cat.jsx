import { LogoIcons } from '../../components/icons/logo'
import style from './top-search-cat.module.css'
import { getBreedTop } from '../../../services/cat.services'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/loading/loading'

export const TopSearchCat = () => {
  const [breed, setBreed] = useState([])
  useEffect(() => {
    getBreedTop().then((response) => setBreed(response))
  }, [])
  return breed.length ? (
    <div className={style.wrapper}>
      <div className={style.container}>
        <LogoIcons fill={'#291507'} width={128} height={43} />
        <h1>Top 10 most searched breeds</h1>
        <div className={style.top_list}>
          {breed.length
            ? breed.map((item, index) => (
                <div className={style.top_list__item}>
                  <div className={style.top_list__item__img}>
                    <img src={item.image.url} alt={item.name} />
                  </div>
                  <div className={style.top_list__item__info}>
                    <h2>
                      {index + 1}.{item.name}
                    </h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}
