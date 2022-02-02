import style from './content-description.module.css'

export const CardCharacteristics = ({ name, number }) => {
  return (
    <div className={`${style.cardCharacteristics}`}>
      <p>{name}</p>
      <div className={style.characteristics}>
        <div
          className={
            number > 0
              ? style.characteristics__item__active
              : style.characteristics__item
          }
        ></div>
        <div
          className={
            number > 1
              ? style.characteristics__item__active
              : style.characteristics__item
          }
        ></div>
        <div
          className={
            number > 2
              ? style.characteristics__item__active
              : style.characteristics__item
          }
        ></div>
        <div
          className={
            number > 3
              ? style.characteristics__item__active
              : style.characteristics__item
          }
        ></div>
        <div
          className={
            number > 4
              ? style.characteristics__item__active
              : style.characteristics__item
          }
        ></div>
      </div>
    </div>
  )
}
