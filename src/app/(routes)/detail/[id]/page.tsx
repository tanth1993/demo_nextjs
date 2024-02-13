import { Form } from '@dev/app/_components';
import { IServerSideProp } from '@dev/app/_interfaces'
import { getDetailNews } from '@dev/app/_repositories';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next'
import { trimHTML, PREFIX } from '@dev/app/_utils';

export async function generateMetadata(props: IServerSideProp<{ id: string }>, parent: ResolvingMetadata): Promise<Metadata> {
    const { params } = props
    // read route params
    const id = params.id

    // fetch data
    const data = await getDetailNews(id)

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: PREFIX + data?.title,
        description: PREFIX + trimHTML(data?.content),
        openGraph: {
            images: [...previousImages],
        },
    }
}


export default async function Page(props: IServerSideProp<{ id: string }>) {
    const { id } = props.params
    const data = await getDetailNews(id)
    if (!data)
        notFound()

    return (
        <main className="flex items-center flex-col p-5">
            <div className="w-3/6 is-detail">
                <Form item={data} isReadOnly />
            </div>
        </main>
    );
}
