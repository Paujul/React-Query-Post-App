import PostList from '../post/list/PostList'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-center text-3xl font-bold">Search Posts</h1>

      <input
        type="text"
        className="h-12 w-96 rounded-lg border-2 p-2 focus:outline-sky-500"
      />

      <PostList />
    </div>
  )
}

export default HomePage
