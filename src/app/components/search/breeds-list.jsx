import style from './search.module.css'
import search from './../../../assets/search.png'
import { BreedslistItem } from './breeds-list-item'

export const Breedslist = ({
  show,
  breeds,
  width,
  handlechange,
  keyboard,
  handleClose,
}) => {
  return (
    <div
      className={
        show
          ? `${style.breedListWraper} ${style.show}`
          : `${style.breedListWraper}`
      }
    >
      {width < 425 ? (
        <>
          <div onClick={handleClose} className={style.icon}>
            <div className={style.line}></div>
            <div className={style.line2}></div>
          </div>
          <div className={style.inputModal}>
            <input
              onChange={handlechange}
              type="text"
              value={keyboard}
              placeholder={width > 425 ? 'Enter your breed' : 'search'}
            />
            <img src={search} alt="search" />
          </div>
        </>
      ) : null}

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
