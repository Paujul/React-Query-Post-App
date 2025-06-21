import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useGetPosts } from './services/posts'
import { LoadingSpinner } from './LoadingSpinner'
import type { Post } from './types/post'

function App() {
  const {
    data: posts,
    isLoading,
    // error,
    // isError,
    // refetch,
    // isRefetching,
  } = useGetPosts()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="">
          {posts?.data?.map((post: Post) => (
            <div key={post.id} className="CC">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default App
