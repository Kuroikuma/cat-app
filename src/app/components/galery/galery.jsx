import { GaleryColumn } from './galery-column'
import style from './galery.module.css'

export const Galery = ({ columns }) => {
  return (
    <div className={style.container}>
      {columns &&
        columns.map((item, index) => <GaleryColumn key={index} item={item} />)}
    </div>
  )
}
