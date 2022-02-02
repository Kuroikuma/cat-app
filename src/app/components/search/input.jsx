import style from './search.module.css'
import search from './../../../assets/search.png'
import { citysSupport } from '../../../services/faker'
import { getListBreed } from '../../../services/cat.services'
import { useEffect, useState } from 'react'
import { Breedslist } from './breeds-list'

export const Input = ({ width }) => {
  const [show, setShow] = useState(false)
  const [breeds, setBreeds] = useState([])
  const [keyboard, setKeyboard] = useState('')
  const [breedsFilter, setBreedsFilter] = useState([])
  useEffect(() => {
    getListBreed().then((response) => setBreeds(response))
  }, [])
  const handlechange = (event) => {
    setKeyboard(event.target.value)
    if (event.target.value) {
      setShow(true)
    } else {
      setShow(false)
    }
    setBreedsFilter(
      breeds.filter((element) =>
        element.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
  }
  const handleClose = () => {
    setShow(false)
  }
  return (
    <div className={style.Input}>
      <input
        onChange={handlechange}
        type="text"
        value={keyboard}
        placeholder={width > 425 ? 'Enter your breed' : 'search'}
      />
      <img src={search} alt="search" />
      <Breedslist
        breeds={breedsFilter}
        show={show}
        width={width}
        handlechange={handlechange}
        keyboard={keyboard}
        handleClose={handleClose}
      />
    </div>
  )
}
