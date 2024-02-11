'use client'
import { Form } from "@dev/app/_components";
import { INews } from '@dev/app/_interfaces'
import { createNews } from "@dev/app/_repositories";
import { useRef, useState } from "react";

export default function Page(props) {
    const counter = useRef(1)
    const [newsItems, setNewsItems] = useState<INews[]>([{ idGen: crypto.randomUUID(), counter: counter.current }])

    const onSubmit = async () => {
        const data = await createNews(newsItems)
        console.log(data)
    }
    const onAdd = () => {
        const items = [...newsItems]
        counter.current++
        items.push({ idGen: crypto.randomUUID(), counter: counter.current })

        setNewsItems(items)
    }
    const onRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id?: string) => {
        e.stopPropagation()
        if (newsItems?.length === 1) return
        const items = [...newsItems]?.filter(_ => _?.idGen !== id)
        setNewsItems(items)
    }
    const onChangeItemTemp = (item: INews) => {
        const items = [...newsItems]
        let indexItem = items?.findIndex(_ => _?.idGen === item?.idGen)
        items[indexItem] = { ...item }

        setNewsItems(items)
    }
    // ********************** render  ************************
    const renderItemCollapse = (newsItem: INews) => {
        return <div key={newsItem?.idGen} className="collapse bg-base-200 m-3">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium ">
                <div className="flex justify-between items-center">
                    <span>{`New Post ${newsItem.counter}`}</span>
                    <button className="btn btn-square btn-outline relative z-10" onClick={(e) => onRemove(e, newsItem?.idGen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>

            <div className="collapse-content">
                <div className="divider m-0 mb-2"></div>
                <Form item={newsItem} onChangeItemTemp={onChangeItemTemp} />
            </div>
        </div>
    }
    const renderButtons = () => {
        return <div className="w-3/6 flex justify-between items-center">
            <div className="" onClick={onAdd}>
                <button className="btn btn-circle btn-outline rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
            <div className="flex gap-2 p-5">
                <button className="btn btn-success" onClick={onSubmit}>Submit</button>
                <button className="btn btn-outline">Cancel</button>
            </div>
        </div>
    }
    return (
        <main className="flex items-center flex-col p-5">
            {renderButtons()}
            <div className="w-3/6">
                <div className="">
                    {newsItems?.map((item) => renderItemCollapse(item))}
                </div>
            </div>
        </main>
    );
}
