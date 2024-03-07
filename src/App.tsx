import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
