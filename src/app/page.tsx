import { getAllNews } from '@dev/app/_repositories'
import { INews } from '@dev/app/_interfaces'
import { Card, CardWrapper } from '@dev/app/_components';

export default async function Page() {
  const data = await getAllNews()
  return (
    <CardWrapper data={data} />
  );
}
