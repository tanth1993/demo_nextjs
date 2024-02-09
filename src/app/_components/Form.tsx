'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import { INews } from '@dev/app/_interfaces'
import { cloud } from '@dev/app/_utils/Icons'

interface IProps extends React.PropsWithChildren {
    item?: INews
}
const Editor = dynamic(() => {
    return import('@dev/app/_components/CKEditor');
}, { ssr: false });

export function Form(props: IProps) {
    const { content, imageUrl, title, _id } = props.item || {}


    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [file] = e.target.files || []
        console.log(file)
    }
    // ************************* render ************************
    const renderImageUpload = () => {
        return <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    {cloud}
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" onChange={onFileChange} />
            </label>
        </div>
    }
    const renderTitle = () => {
        return <div className="my-3 ">
            <input
                type="text"
                placeholder="Title"
                className="input input-bordered w-full text-xl"
            />
        </div>
    }
    const renderEditor = () => {
        return <div className="">
            <Editor
                placeHolder='tan2cang'
            />
        </div>
    }
    return (
        <div className="card-compact">
            <div className="max-h-[500px] overflow-hidden">
                {renderImageUpload()}
            </div>
            <div className="mt-3">
                <>
                    {renderTitle()}
                    {renderEditor()}
                </>
            </div>
        </div>
    );
}
