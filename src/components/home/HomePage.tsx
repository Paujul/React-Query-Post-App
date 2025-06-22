function HomePage() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 p-5">
      <h1 className="text-center text-4xl font-bold">Welcome to Posts App</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600">
        Discover and explore posts from our community. Search through posts,
        view detailed information, and read comments from other users.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/posts"
          className="rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-600"
        >
          Browse Posts
        </a>
        <a
          href="/users"
          className="rounded-lg border border-sky-500 px-6 py-3 font-semibold text-sky-500 transition-colors hover:bg-sky-50"
        >
          View Users
        </a>
      </div>
    </div>
  )
}

export default HomePage
