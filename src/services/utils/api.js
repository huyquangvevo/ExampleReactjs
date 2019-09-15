function getApiUrl(path?:String){
    const baseUrl = 'http://localhost:5000';
    return path ? `${baseUrl}${path}`:`${baseUrl}/`;

}

function pareseRespone(response){
    if(response.status >= 200 && response.status < 300){
        return response.json();
    } else {
        throw new Error('Server error');
    }
}


function fetchJson(urlPath:String,options?:Object):Promise<any>{
    return fetch(getApiUrl(urlPath),options).then(pareseRespone);
}

export function fetchPost(urlPath:String,body:Object = {}):Promise<any>{
    return fetchJson(urlPath, {
        method: 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(body)
    });
}

export function fetchGet(urlPath:String):Promise<any> {
    return fetchJson(urlPath);
}