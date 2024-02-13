export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  const arr = new Array(6)
  return <div className="preview flex flex-col items-center">
    <div className="flex flex-wrap gap-3 items-center w-[70%]">
      {[...arr].map((_, i) => {
        return <div key={i} className="flex flex-col gap-4 w-96">
          <div className="skeleton h-[200px] w-full"></div>
          <div className="skeleton h-8 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      })}
    </div>
  </div>
}