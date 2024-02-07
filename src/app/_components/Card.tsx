'use client'
import React from 'react'
import { INews } from '@dev/app/_interfaces'
interface IProps extends React.PropsWithChildren {
    item?: INews
}

export function Card(props: IProps) {
    const { content, imageUrl, title } = props.item || {}

    return (
        <div className="basis-3/12 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={imageUrl} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='truncate'>{content}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Detail</button>
                </div>
            </div>
        </div>
    );
}
