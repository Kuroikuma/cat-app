import style from './loading.module.css'
import { LogoIcons } from '../icons/logo'

export const Loading = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.Uploaded}>
        <LogoIcons fill={'#291507'} width="300px" height="108px" />
        <div className={style.bar}>
          <div className={style.Item__bar}></div>
        </div>
      </div>
    </div>
  )
}
