import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CatDescriptionView } from './cat-description.view'
import { useMasonry } from '../../hook/useMasonry'
import { getBreedByID } from '../../../services/cat.services'

export const CatDescription = () => {
  let params = useParams()
  const [breeds, setBreeds] = useState([])
  const [description, setDescription] = useState('')
  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [files, setFiles] = useState([])
  const [characteristics, setCharacteristics] = useState([])
  const [temperament, setTemperament] = useState('')
  const [origin, setOrigin] = useState('')
  const [life_span, setLife_span] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)
  const [isFinished, setIsFinished] = useState(false)
  const [columns, setData] = useMasonry()
  useEffect(() => {
    getBreedByID(params.breed_id).then((response) => {
      setBreeds(response)
      console.log(response)
    })
    setIsFinished(true)
  }, [])
  useEffect(() => {
    if (breeds.length) {
      setDescription(breeds[0].breeds[0].description)
      setFile(breeds[0].url)
      setName(breeds[0].breeds[0].name)
      setTemperament(breeds[0].breeds[0].temperament)
      setOrigin(breeds[0].breeds[0].origin)
      setLife_span(breeds[0].breeds[0].life_span)
      setCharacteristics([
        {
          name: 'adaptability',
          number: breeds[0].breeds[0].adaptability,
        },
        {
          name: 'affection_level',
          number: breeds[0].breeds[0].affection_level,
        },
        {
          name: 'child_friendly',
          number: breeds[0].breeds[0].child_friendly,
        },
        { name: 'grooming', number: breeds[0].breeds[0].grooming },
        {
          name: 'intelligence',
          number: breeds[0].breeds[0].intelligence,
        },
        {
          name: 'health_issues',
          number: breeds[0].breeds[0].health_issues,
        },
        {
          name: 'social_needs',
          number: breeds[0].breeds[0].social_needs,
        },
        {
          name: 'stranger_friendly',
          number: breeds[0].breeds[0].stranger_friendly,
        },
      ])
      for (let index = 1; index < breeds.length; index++) {
        setFiles((prevFiles) => [...prevFiles, breeds[index].url])
        setIsCompleted(true)
      }
    }
  }, [breeds])
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
