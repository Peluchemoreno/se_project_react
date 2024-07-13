export default class Api {
  constructor(url) {
    this.baseUrl = url;
  }

  checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject((err) => {
        console.error(err);
      });
    }
  }

  fetchData() {
    return fetch(this.baseUrl + "items")
      .then(this.checkServerResponse)
      .then((data) => {
        return data;
      });
  }

  addGarment(garment, token) {
    return fetch(this.baseUrl + "items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: garment.name,
        imageUrl: garment.imageUrl,
        weather: garment.weather,
      }),
    })
      .then(this.checkServerResponse)
      .then((data) => {
        return data;
      });
  }

  deleteGarment(garment, token) {
    return fetch(this.baseUrl + `items/${garment._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
    })
      .then(this.checkServerResponse)
      .then((data) => {
        return data;
      });
  }
}
