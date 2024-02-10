'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import { INews, ICloudImage } from '@dev/app/_interfaces'
import { cloud } from '@dev/app/_utils/Icons'
import { api_call_post_no_cache } from '@dev/app/_utils'
interface IProps extends React.PropsWithChildren {
    item?: INews
    onChangeItemTemp?: (item: INews) => void
}

const Editor = dynamic(() => {
    return import('@dev/app/_components/CKEditor');
}, { ssr: false });

const cloudName = 'dgjalonkb'
const cloudURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

export function Form(props: IProps) {
    const { item, onChangeItemTemp } = props
    const { content, imageUrl, title, _id } = item || {}

    const [imgTemp, setImgTemp] = useState<string>(imageUrl || '')
    const [titleTemp, setTitleTemp] = useState<string>(title || '')
    const [contentTemp, setContentTemp] = useState<string>(content || '')

    useEffect(() => {
        const newItem: INews = {
            _id,
            title: titleTemp,
            imageUrl: imgTemp,
            content: contentTemp
        }
        onChangeItemTemp && onChangeItemTemp(newItem)
    }, [imgTemp, titleTemp, contentTemp])

    const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const [file] = e.target.files || []
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', 'spc164om')

        const data: ICloudImage = await fetch(cloudURL, {
            method: 'POST',
            body: formData
        }).then(r => r.json());

        setImgTemp(data?.url || '')
    }
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setTitleTemp(value)
    }
    const onChangeContent = (data: string) => {
        setContentTemp(data)
    }
    // ************************* render ************************
    const renderImg = () => {
        return <div className="flex items-center justify-center w-full">
            <img src={imgTemp} alt={titleTemp} />
        </div>
    }
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
                onChange={onChangeTitle}
            />
        </div>
    }
    const renderEditor = () => {
        return <div className="">
            <Editor
                data={contentTemp}
                onChange={onChangeContent}
                placeHolder='tan2cang'
            />
        </div>
    }
    return (
        <div className="card-compact">
            <div className="max-h-[500px] overflow-hidden">
                {!!imgTemp.length ? renderImg() : renderImageUpload()}
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
