export function FetchPostData(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) =>
    response.json().catch((error) => this.handleError(error))
  );
}

export function FetchPostToken(url, data) {
  return fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${data}`,
    },
    body: "",
  }).then((response) =>
    response.json().catch((error) => this.handleError(error))
  );
}

export function FetchPutData(url, data, token) {
  return fetch(url, {
    method: "PUT",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((response) =>
    response.json().catch((error) => this.handleError(error))
  );
}
