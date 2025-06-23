import { Route, Routes } from 'react-router'
import Home from './components/home'
import Navbar from './components/layout/Navbar'
import PostPage from './components/post'
import NotFound from './components/error/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-svh pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
