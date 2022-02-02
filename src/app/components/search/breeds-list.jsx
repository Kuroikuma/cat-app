import style from './search.module.css'
import { BreedslistItem } from './breeds-list-item'

export const Breedslist = ({ show, breeds }) => {
  return (
    <div
      className={
        show
          ? `${style.breedListWraper} ${style.show}`
          : `${style.breedListWraper}`
      }
    >
      <div className={style.breedList}>
        {breeds.length ? (
          breeds.map((item, index) => (
            <BreedslistItem key={index} name={item.name} id={item.id} />
          ))
        ) : (
          <p>no results found for the entered breed</p>
        )}
      </div>
    </div>
  )
}
