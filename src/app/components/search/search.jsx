import style from './search.module.css'
import React, { useState, useEffect } from 'react'
import { Input } from './input'
import { LogoIcons } from '../icons/logo'

export const Search = () => {
  const [width, setWidth] = useState(0)
  const cambiarTamaño = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', cambiarTamaño)
  }, [])
  return (
    <div className={style.container}>
      {width < 425 ? <p>CatWiki</p> : null}
      <div className={style.info}>
        {width > 425 ? (
          <LogoIcons fill={'#fff'} width="300px" height="108px" />
        ) : null}

        <p>Get to know more about your cat breed</p>
      </div>
      <Input width={width} />
    </div>
  )
}
