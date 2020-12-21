interface requestType {
    url: string,
    method: string,
    params?: {[key: string]: any},
    useFormData?: boolean,
    body?: any
}

const isNumberOrString = (params: any) => typeof params === 'string' || typeof params === 'number'

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

const parseFormData = (params: {[key: string]: any}) => {
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

    return () => fetch(nextUrl, {
        method,
        body: nextBody
    })
};

export const request = {
    request: requestData,
    method: {
        GET: 'GET',
        POST: 'POST'
    }
};

export const customPromiseAll = (requests: Array<any>) => new Promise((resolve, reject) => {
    let fetchCount: number = 0;
    let errorCount: number = 0;
    let result: Array<any> = [];

    const checkFinally = () => {
        if (errorCount && errorCount === requests.length){
            return reject(new Error('ошибочка'));
        }
        if (fetchCount === requests.length) {
            return resolve(result)
        }
    };

    requests.forEach(item => item
                // @ts-ignore
        .then(response => response.json())
                // @ts-ignore
        .then(({ data }) => {
            result = [ ...result,...data ];
        })
        .catch(() => {
            ++errorCount
        })
        .finally(() => {
            ++fetchCount;
            checkFinally();
        }))
});
