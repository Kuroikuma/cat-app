const apiUrl = 'https://protected-hamlet-95234.herokuapp.com/'

export const getListBreed = () => {
  const baseUrl = `${apiUrl}api/breeds`
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response])
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}
export const getBreedByID = (breed_id = 'abys', limit = 10) => {
  const baseUrl = `${apiUrl}api/breeds/search/${breed_id}/${limit}`
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response])
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}
export const getBreedTop = (limit = 10) => {
  const baseUrl = `${apiUrl}api/breeds/top/${limit}`
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((response) => {
      const data = ([] = [...response])
      return data
    })
    .catch((error) => {
      console.log(error)
    })
}
