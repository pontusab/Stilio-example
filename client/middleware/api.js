export function callApi(path, method = 'GET', body) {
  const fullUrl = API_ENDPOINT + path;

  return fetch(fullUrl, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.status === 204
    ? { json: null, response }
    : response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // if not a GET request just return the response
    if (method !== 'GET') {
      return response;
    }

    return json;
  });
}

export function upload(blob) {
  const uploadUrl = `${API_ENDPOINT}/upload`;

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const image = new FormData();
    image.append('image', blob);

    xhr.open('POST', uploadUrl);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText,
        });
      }
    };

    xhr.send(image);
  });
}
