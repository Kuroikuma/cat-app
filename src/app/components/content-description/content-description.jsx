import style from './content-description.module.css'
import { CardCharacteristics } from './card-charesterics'

export const ContentDescription = (props) => {
  const {
    description,
    name,
    file,
    characteristics,
    temperament,
    origin,
    life_span,
  } = props
  return (
    <div className={style.content}>
      <div className={style.img}>
        <img
          src="https://cdn2.thecatapi.com/images/unPP08xOZ.jpg"
          alt="profile_Photo"
        />
      </div>
      <div className={style.description}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>
          <span>Temperament: </span>
          {temperament}
        </p>
        <p>
          <span>Origin: </span>
          {origin}
        </p>
        <p>
          <span>Life Span: </span>
          {life_span} years
        </p>
        {characteristics.length
          ? characteristics.map((item, index) => (
              <CardCharacteristics
                name={item.name}
                number={item.number}
                key={index}
              />
            ))
          : null}
      </div>
    </div>
  )
}
