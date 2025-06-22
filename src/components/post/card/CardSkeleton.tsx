function CardSkeleton() {
  return (
    <div className="flex min-w-96 flex-1 animate-pulse flex-col rounded-lg border p-3">
      <div className="mb-3 flex justify-between">
        {/* Title skeleton */}
        <div className="h-4 w-full rounded bg-gray-200" />
      </div>

      <div className="flex flex-1 flex-col">
        {/* Body text skeleton - 3 lines */}
        <div className="mb-2 space-y-2">
          <div className="h-3 w-full rounded bg-gray-200"></div>
          <div className="h-3 w-4/5 rounded bg-gray-200"></div>
          <div className="h-3 w-3/5 rounded bg-gray-200"></div>
        </div>

        {/* Button skeleton */}
        <div className="flex h-full flex-1 items-center justify-center gap-2 self-end px-2">
          <div className="h-4 w-16 rounded bg-gray-200"></div>
          <div className="h-5 w-5 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  )
}

export default CardSkeleton
