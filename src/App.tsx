import { Route, Routes } from 'react-router'
import Home from './components/home'
import Navbar from './components/layout/Navbar'
import PostPage from './components/post'
import NotFound from './components/error/NotFound'
import UserList from './components/user'
import AboutPage from './components/about'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-svh">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
