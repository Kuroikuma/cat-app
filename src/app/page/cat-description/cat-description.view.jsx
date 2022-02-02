import { Logo } from './logo'
import style from './cat-description.module.css'
import { ContentDescription } from '../../components/content-description/content-description'
import { OtherPhotes } from '../../components/other-photos/other-photos'
export const CatDescriptionView = (props) => {
  const {
    description,
    name,
    file,
    columns,
    characteristics,
    temperament,
    origin,
    life_span,
  } = props
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.logo}>
          <Logo />
        </div>
        <ContentDescription
          description={description}
          name={name}
          file={file}
          characteristics={characteristics}
          temperament={temperament}
          origin={origin}
          life_span={life_span}
        />
        <OtherPhotes columns={columns} />
      </div>
    </div>
  )
}
