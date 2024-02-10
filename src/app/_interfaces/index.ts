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
export interface ICloudImage {
    asset_id?: string
    public_id?: string
    version: number,
    version_id?: string
    signature?: string
    width: number,
    height: number,
    format?: string
    resource_type?: string
    created_at?: string
    tags: string[],
    bytes: number
    type?: string
    etag?: string
    placeholder: false,
    url?: string
    secure_url?: string
    folder?: string
    access_mode?: string
    existing: false,
    original_filename?: string
}