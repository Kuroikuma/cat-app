import style from './search.module.css'
import search from './../../../assets/search.png'
import { citysSupport } from '../../../services/faker'
import { useState } from 'react'

export const Input = () => {
  const [show, setShow] = useState(false)
  const [breeds, setBreeds] = useState([])
  const handlechange = (event) => {
    if (event.target.value) {
      setShow(true)
    } else {
      setShow(false)
    }
    setBreeds(
      citysSupport.filter((element) =>
        element.name.includes(event.target.value)
      )
    )
  }
  return (
    <div className={style.Input}>
      <input
        onChange={handlechange}
        type="text"
        placeholder="Enter your breed"
      />
      <img src={search} alt="search" />
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
              <div className={style.breedListItem} key={index}>
                <p>{item.name}</p>
              </div>
            ))
          ) : (
            <p>no results found for the entered breed</p>
          )}
        </div>
      </div>
    </div>
  )
}
