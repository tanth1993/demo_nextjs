export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <div className="flex items-center flex-col p-5">
    <div className="w-[600px] flex flex-col gap-4">
      <div className="skeleton h-[500px] w-full"></div>
      <div className="skeleton h-12 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  </div>
}