'use client'
import { INews } from '@dev/app/_interfaces'
import { Card } from '@dev/app/_components';
import React, { useRef, useState } from 'react';
import { deleteNews, getAllNews } from '@dev/app/_repositories'
import { useRouter } from 'next/navigation'


interface IProps extends React.PropsWithChildren {
    data?: INews[]
}
export function CardWrapper(props: IProps) {
    const router = useRouter()
    const { data } = props
    const [ids, setIds] = useState<string[]>([])
    const dialogRef = useRef<HTMLDialogElement>(null)

    const onCheckItem = (id?: string) => {
        if (!id) return

        let idArr = [...ids]
        const isInArr = ids?.some(_ => _ === id)
        if (isInArr) {
            idArr = idArr?.filter(_ => _ !== id)
        } else {
            idArr.push(id)
        }
        setIds(idArr)
    }
    const onDelete = async () => {
        if (!ids.length) return

        const data = await deleteNews(ids)
        if (data?.deletedCount > 0) {
            setIds([])
            router.refresh()
        }
    }
    const renderModal = () => {
        return <dialog ref={dialogRef} className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Delete Post</h3>
                <p className="py-4">Do you want to delete {ids.length} posts ?</p>
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                        <button className="btn btn-error ml-3" onClick={onDelete}>Delete</button>
                    </form>
                </div>
            </div>
        </dialog>
    }
    return (
        <main className="preview flex flex-col items-center px-24">
            {<div className="w-[70%] flex justify-end p-3 gap-3 min-h-[72px]">
                {!!ids.length &&
                    <>
                        <button className="btn btn-outline btn-info" onClick={() => setIds([])}>unCheck All</button>
                        <button className="btn btn-error" onClick={() => dialogRef.current?.showModal()}>Delete</button>
                    </>
                }
            </div>}
            <div className="flex flex-wrap gap-3 items-center w-[70%]">
                {!!data?.length && data?.map(d => <Card key={d?._id} item={d} checkItems={ids} onCheckItem={onCheckItem} />)}
            </div>
            {renderModal()}
        </main>
    );
}
