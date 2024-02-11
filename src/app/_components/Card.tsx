'use client'
import React from 'react'
import { INews } from '@dev/app/_interfaces'
import Link from 'next/link'
interface IProps extends React.PropsWithChildren {
    item?: INews
    checkItems?: string[]
    onCheckItem?: (id?: string) => void
}

export function Card(props: IProps) {
    const { onCheckItem, item, checkItems } = props
    const { content, imageUrl, title, _id } = item || {}

    const renderCheckbox = () => {
        return <div className="form-control absolute top-2 right-2 ">
            <label className="cursor-pointer label" >
                <input type="checkbox" checked={checkItems?.some(_ => _ === _id)} className="checkbox checkbox-accent bg-[#00cdb7]" onChange={(e) => {
                    onCheckItem && onCheckItem(_id)
                }} />
            </label>
        </div>
    }
    return (
        <div className="card card-compact w-96 bg-neutral text-neutral-content self-stretch">
            <figure className='w-[100%] h-[200px] '><img className='w-[100%]' src={imageUrl} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='truncate'>{content}</p>
                <div className="card-actions justify-end">
                    <Link href={`/detail/${_id}`}>
                        <button className="btn btn-info">Detail</button>
                    </Link>
                </div>
            </div>
            {renderCheckbox()}
        </div>
    );
}
