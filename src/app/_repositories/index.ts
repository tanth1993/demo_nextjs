import * as Utils from '@dev/app/_utils'
import * as Interfaces from '@dev/app/_interfaces'

export const getAllNews = async (): Promise<Interfaces.INews[]> => {
    const path = 'http://127.0.0.1:3099/api/news'
    const data = await Utils.api_call_get(path)
    return data
}