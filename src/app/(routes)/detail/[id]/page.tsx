import { IServerSideProp } from '@dev/app/_interfaces'
import { getDetailNews } from '@dev/app/_repositories';
import { notFound } from 'next/navigation';

export default async function Page(props: IServerSideProp<{ id: string }>) {
    const { id } = props.params
    const data = await getDetailNews(id)
    if (!data)
        notFound()

    const { content, title, imageUrl } = data || {}

    return (
        <main className="flex justify-center p-24">
            <div className="w-3/6 card-compact">
                <div className="max-h-[500px] overflow-hidden">
                    <img src={imageUrl} alt={title} />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className=''>{content}</p>
                </div>
            </div>
        </main>
    );
}
