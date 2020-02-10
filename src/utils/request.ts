interface requestType {
    url: string,
    method: string,
    params?: {[key: string]: any},
    useFormData?: boolean,
    body?: any
}

const requestData = ({
    url,
    method,
    params,
    useFormData,
    body
}: requestType) => {
    let nextUrl = url;
    let nextBody = body;

    if (method === 'GET' && params) {
        nextUrl += parseQueryParams(params);
    }

    if (useFormData) {
        nextBody = parseFormData(body)
    }

    return fetch(nextUrl, {
        method,
        body: nextBody
    })
        .then(response => response.json())
        .catch(error => error);
};


function parseQueryParams (params: {[key: string]: any}) {
    let queryString: string = '?';

    for (let par in params) {
        if (isNumberOrString(params[par])){
            queryString += `${par}=${params[par]}&`;
        }
        if (Array.isArray(params[par])){
            params[par].forEach((item: string) => {
                queryString += `${par}=${item}&`;
            })
        }
    }

    return queryString.substr( 0, queryString.length - 1);
}

function parseFormData (params: {[key: string]: any}) {
    const formData = new FormData();

    for (let par in params) {
        if (isNumberOrString(params[par])){
            formData.append(par, params[par]);
        }
        if (Array.isArray(params[par])){
            params[par].forEach((item: string) => {
                formData.append(par, item);
            })
        }
    }

    return formData;
}

function isNumberOrString(params: any) {
    return typeof params === 'string' || typeof params === 'number';
}

export const request = {
    request: requestData,
    method: {
        GET: 'GET',
        POST: 'POST'
    }
};
