import style from './search.module.css'
import search from './../../../assets/search.png'
export const Input = () => {
  return (
    <div className={style.Input}>
      <input type="text" placeholder="Enter your breed" />
      <img src={search} alt="search" />
    </div>
  )
}
