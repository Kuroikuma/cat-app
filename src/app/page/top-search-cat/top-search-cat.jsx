import { LogoIcons } from '../../components/icons/logo'
import style from './top-search-cat.module.css'
import { FakerTop } from '../../../services/faker-top'

export const TopSearchCat = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <LogoIcons fill={'#291507'} width={128} height={43} />
        <h1>Top 10 most searched breeds</h1>
        <div className={style.top_list}>
          {FakerTop.length
            ? FakerTop.map((item, index) => (
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
  )
}
