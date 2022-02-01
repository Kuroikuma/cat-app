import style from './information.module.css'
import image1 from '../../../assets/image1.png'
import image2 from '../../../assets/image2.png'
import image3 from '../../../assets/image3.png'
export const Information = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.content__left}>
          <h2>Why should you have a cat?</h2>
          <p>
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <button>READ MORE</button>
        </div>
        <div className={style.content__right}>
          <div className={style.content__right__item}>
            <img src={image2} alt="" />
            <img src={image1} alt="" />
          </div>
          <div className={style.content__right__item}>
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
