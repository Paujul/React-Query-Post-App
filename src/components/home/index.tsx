import Navbar from '../layout/Navbar'
import HomePage from './HomePage'

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto min-h-svh pt-16">
        <HomePage />
      </div>
    </>
  )
}

export default Home
