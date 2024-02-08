export interface INews {
    _id?: string
    title?: string
    content?: string
    imageUrl?: string
    createdAt?: Date
    updatedAt?: Date
}

export interface IServerSideProp<P, S = undefined> {
    params: P;
    searchParams: S;
}
export interface IPaginationQuery {
    text?: string
    page?: number
    pageSize?: number
}