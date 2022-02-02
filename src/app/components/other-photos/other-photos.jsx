import style from './other-photos.module.css'
import { Galery } from '../galery/galery'
import { Footer } from '../footer/footer'
export const OtherPhotes = ({ columns }) => {
  return (
    <div className={style.container}>
      <h2>Other photos</h2>
      <Galery columns={columns} />
      <Footer />
    </div>
  )
}
