import style from './search.module.css'

export const BreedslistItem = ({ name }) => {
  return (
    <div className={style.breedListItem}>
      <p>{name}</p>
    </div>
  )
}
