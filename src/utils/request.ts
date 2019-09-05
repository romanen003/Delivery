
interface requestType {
    url: string,
    method: string,
    params?: {[key: string]: any},
    useFormData?: boolean
}

const requestData = ({url, method, params, useFormData}: requestType) => {
    let nextUrl = url;

    if (method === request.method.GET && params) {
        nextUrl += parseQueryParams(params)
    }

    return fetch(nextUrl, {
        method
    }).then(response => response.json())
        .catch(error => error)
};


function parseQueryParams (params: {[key: string]: any}) {
    let queryString: string = '?';

    for (let par in params) {
        if (typeof params[par] === ('string' || 'number')){
            queryString += `${par}=${params[par]}&`
        }
        if (Array.isArray(params[par])){
            params[par].forEach((item: string) => {
                queryString += `${par}=${item}&`
            })
        }
    }

    return queryString.substr( 0, queryString.length - 1);
}
export const request = {
    request: requestData,
    method: {
        GET: 'GET',
        POST: 'POST'
    }
};
