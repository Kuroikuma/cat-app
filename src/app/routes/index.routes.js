import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../page/home/home'
import { CatDescription } from '../page/cat-description/cat-description'
import { TopSearchCat } from '../page/top-search-cat/top-search-cat'

export function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="description/:breed_id" element={<CatDescription />} />
        <Route path="/top" element={<TopSearchCat />} />
        <Route index element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
