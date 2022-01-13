import Config from "../config";

export const handleError = async (e) => {
  // this part should complete by error handling in all posible cases
  return console.log(e);
};
export const fetchResponse = async (url, Method) => {
  return await fetch(url, {
    method: Method,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: Config.api_key,
    },
  })
    .then(async (result) => {
      const response = await result.json().catch(() => {
        handleError();
      });
      return response;
    })
    .catch((e) => {
      handleError(e);
    });
};
export const getQuery = (entityURL, start, end, filter) => {
  // if any backend search is enabled
  if (start) entityURL += `?start=${start || 0}`;
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
    handleError(e);
  }
};
