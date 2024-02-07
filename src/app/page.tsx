import { getAllNews } from '@dev/app/_repositories'
import { INews } from '@dev/app/_interfaces'
import { Card } from '@dev/app/_components';

export default async function Page() {
  const data = await getAllNews()
  // console.log(data)
  return (
    <main className="preview flex justify-center p-24">
      <div className="flex flex-wrap gap-3 items-center w-[70%]">
        {!!data?.length && data?.map(d => <Card key={d?._id} item={d} />)}
      </div>
    </main>
  );
}
