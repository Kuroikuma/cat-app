import style from './footer.module.css'
import { LogoIcons } from '../icons/logo'

export const Footer = () => {
  return (
    <div className={style.container}>
      <LogoIcons fill={'#fff'} width={128} height={43} />
      <p>
        © created by <span>Kuroikuma</span> - devChallenge.io 2021
      </p>
    </div>
  )
}
