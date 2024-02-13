'use client'
import Link from 'next/link';
import React from 'react'
import { logoDaisy } from '@dev/app/_utils/Icons'
interface IProps extends React.PropsWithChildren {

}

export function Header(props: IProps) {

    return (
        <div className="flex justify-center px-24 py-5 ">
            <div className="w-[70%] flex justify-between">
                <Link href={`/`}>
                    <div className="w-[150px]">{logoDaisy}</div>
                </Link>
                <div className="flex justify-end">
                    <Link href={`/create`}>
                        <button className="btn btn-outline btn-success">Create Post</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
