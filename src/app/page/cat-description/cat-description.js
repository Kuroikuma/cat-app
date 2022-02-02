import { useEffect, useState } from 'react'
import { descriptionData } from '../../../services/faker-description'
import { CatDescriptionView } from './cat-description.view'
import { useMasonry } from '../../hook/useMasonry'
export const CatDescription = () => {
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [files, setFiles] = useState([])
  const [characteristics, setCharacteristics] = useState([])
  const [temperament, setTemperament] = useState('')
  const [origin, setOrigin] = useState('')
  const [life_span, setLife_span] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [columns, setData] = useMasonry()

  useEffect(() => {
    setDescription(descriptionData[0].breeds[0].description)
    setFile(descriptionData[0].url)
    setName(descriptionData[0].breeds[0].name)
    setTemperament(descriptionData[0].breeds[0].temperament)
    setOrigin(descriptionData[0].breeds[0].origin)
    setLife_span(descriptionData[0].breeds[0].life_span)
    setCharacteristics([
      {
        name: 'adaptability',
        number: descriptionData[0].breeds[0].adaptability,
      },
      {
        name: 'affection_level',
        number: descriptionData[0].breeds[0].affection_level,
      },
      {
        name: 'child_friendly',
        number: descriptionData[0].breeds[0].child_friendly,
      },
      { name: 'grooming', number: descriptionData[0].breeds[0].grooming },
      {
        name: 'intelligence',
        number: descriptionData[0].breeds[0].intelligence,
      },
      {
        name: 'health_issues',
        number: descriptionData[0].breeds[0].health_issues,
      },
      {
        name: 'social_needs',
        number: descriptionData[0].breeds[0].social_needs,
      },
      {
        name: 'stranger_friendly',
        number: descriptionData[0].breeds[0].stranger_friendly,
      },
    ])
    for (let index = 1; index < descriptionData.length; index++) {
      setFiles((prevFiles) => [...prevFiles, descriptionData[index].url])
      setIsCompleted(true)
    }
  }, [])
  useEffect(() => {
    setData(files)
  }, [isCompleted])

  return (
    <CatDescriptionView
      description={description}
      name={name}
      file={file}
      columns={columns}
      characteristics={characteristics}
      temperament={temperament}
      origin={origin}
      life_span={life_span}
    />
  )
}
