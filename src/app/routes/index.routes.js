import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../page/home/home'

export function IndexRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
        <Route index element={Home} />
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
