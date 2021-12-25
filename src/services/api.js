export const handleError = async () => {};
export const fetchResponse = async (url, Method) => {
  return await fetch(entityURL, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization:
        "api-key 14:2021-12-16:lucas.stenberg@tretton37.com 54447cf099066c8f17404cb936f22c001f82bce1d630b8f9fb8b897fba7c8505",
    },
  })
    .then(async (result) => {
      const response = await result.json().catch(() => {});
      return response;
    })
    .catch(() => {
      return null;
    });
};
export default getQuery = (entityURL, start, end, filter) => {
  if (start) entityURL += `?start=${start}`;
  if (end) entityURL += `&end=${end}`;
  if (filter) entityURL += `?filter=${filter}`;
  return entityURL;
};
export const fetchCoworkerList = async (start, end, filter) => {
  const entityURL = "//api.1337co.de/v3/employees";
  const url = getQuery(entityURL, start, end, filter);
  const Method = "GET";

  try {
    return await fetchResponse(url, Method);
  } catch (e) {
    return e;
  }
};
