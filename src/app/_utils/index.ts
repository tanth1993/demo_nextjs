const api_call = async (method: string, body: any, path: string, headers: any[], isCache: boolean): Promise<any> => {
    let url = path;
    let _headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    if (headers.length > 0) {
        headers.map(header => {
            _headers[header.name] = header.value
        });
    }
    try {
        let rp = await fetch(url, {
            method: method,
            body: body ? JSON.stringify(body) : null,
            //credentials: 'include',
            headers: _headers,
            cache: isCache ? 'force-cache' : 'no-cache'
        });
        if (rp.status == 401) {

        } else if (rp.status == 403) {

        } else if (rp.status == 200 || rp.status == 201 || rp.status == 304) {

            return await rp.json();
        } else {

        }
    }
    catch (e) {
        throw e;
    }
    finally {

    }
}

export const api_call_get = (path: string, headers: any[] = []): Promise<any> => {
    return api_call('GET', null, path, headers, true);
}

export const api_call_post = (path: string, body: any, headers: any[] = []): Promise<any> => {
    return api_call('POST', body, path, headers, true);
}

export const api_call_put = (path: string, body: any, headers: any[] = []): Promise<any> => {
    return api_call('PUT', body, path, headers, true);
}

export const api_call_delete = (path: string, headers: any[] = []): Promise<any> => {
    return api_call('DELETE', null, path, headers, true);
}
// ***************** no-cache ****************
export const api_call_get_no_cache = (path: string, headers: any[] = []): Promise<any> => {
    return api_call('GET', null, path, headers, false);
}

export const api_call_post_no_cache = (path: string, body: any, headers: any[] = []): Promise<any> => {
    return api_call('POST', body, path, headers, false);
}

export const api_call_put_no_cache = (path: string, body: any, headers: any[] = []): Promise<any> => {
    return api_call('PUT', body, path, headers, false);
}

export const api_call_delete_no_cache = (path: string, headers: any[] = []): Promise<any> => {
    return api_call('DELETE', null, path, headers, false);
}
export const PREFIX = 'tan2cang1993 - '
export const trimHTML = (content?: string) => {
    return content?.replace(/(<([^>]+)>)/gi, "")
}
