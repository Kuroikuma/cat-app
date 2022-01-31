import style from './search.module.css'
import { Input } from './input'
import { LogoIcons } from '../icons/logo'

export const Search = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <LogoIcons fill={'#fff'} width="300px" height="108px" />
        <p>Get to know more about your cat breed</p>
      </div>
      <Input />
    </div>
  )
}
