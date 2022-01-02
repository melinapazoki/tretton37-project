import Config from '../config'

export const handleError = async () => {
};
export const fetchResponse = async (url, Method) => {
    return await fetch(url, {
        method: Method,
        headers: {
            //"Access-Control-Allow-Origin": "*",
            Authorization: Config.api_key,
        },
    })
        .then(async (result) => {
            const response = await result.json().catch(() => {
            });
            return response;
        })
        .catch(() => {
            return null;
        });
};
export const getQuery = (entityURL, start, end, filter) => {
    if (start) entityURL += `?start=${start}`;
    if (end) entityURL += `&end=${end}`;
    if (filter) entityURL += `?filter=${filter}`;
    return entityURL;
};
export const fetchCoworkerList = async (start, end, filter) => {
    const url = getQuery(Config.api_url, start, end, filter);
    const Method = "GET";

    try {
        return await fetchResponse(url, Method);
    } catch (e) {
        return e;
    }
};
