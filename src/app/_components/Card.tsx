'use client'
import React from 'react'
import { INews } from '@dev/app/_interfaces'
import Link from 'next/link'
interface IProps extends React.PropsWithChildren {
    item?: INews
}

export function Card(props: IProps) {
    const { content, imageUrl, title, _id } = props.item || {}

    return (
        <div className="card card-compact w-96 bg-neutral text-neutral-content">
            <figure><img src={imageUrl} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='truncate'>{content}</p>
                <div className="card-actions justify-end">
                    <Link href={`/detail/${_id}`}>
                        <button className="btn btn-primary">Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
