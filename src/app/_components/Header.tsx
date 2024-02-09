'use client'
import Link from 'next/link';
import React from 'react'
interface IProps extends React.PropsWithChildren {

}

export function Header(props: IProps) {

    return (
        <div className="flex justify-center">
            <div className="flex justify-end px-24 py-5 w-[70%]">
                <Link href={`/create`}>
                    <button className="btn btn-outline btn-success">Create Post</button>
                </Link>
            </div>
        </div>
    );
}
