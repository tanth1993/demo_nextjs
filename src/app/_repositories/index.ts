import * as Utils from '@dev/app/_utils'
import * as Interfaces from '@dev/app/_interfaces'

const domainUrl = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3099/api' : 'https://report-server-api.vercel.app/api/'


export const getAllNews = async (): Promise<Interfaces.INews[]> => {
    const path = `${domainUrl}/news`
    const data = await Utils.api_call_get(path)
    return data
}

export const getDetailNews = async (id: string): Promise<Interfaces.INews> => {
    const path = `${domainUrl}/news/${id}`
    const data = await Utils.api_call_get(path)
    return data
}

export const createNews = async (body: Interfaces.INews[]): Promise<Interfaces.INews[]> => {
    const path = `${domainUrl}/news-create`
    const data = await Utils.api_call_post(path, body)
    return data
}

export const updateNews = async (id: string, body: Interfaces.INews): Promise<Interfaces.INews> => {
    const path = `${domainUrl}/news-update/${id}`
    const data = await Utils.api_call_put(path, body)
    return data
}

export const deleteNews = async (ids: string[]): Promise<any> => {
    const path = `${domainUrl}/news-delete?ids=${ids}`
    const data = await Utils.api_call_delete(path)
    return data
}