import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

export default function routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-point" element={<CreatePoint />} />
    </Routes>
  )
}
