import { getAllNews } from '@dev/app/_repositories'
import { CardWrapper } from '@dev/app/_components';

export default async function Page() {
  const data = await getAllNews()
  return (
    <CardWrapper data={data} />
  );
}
