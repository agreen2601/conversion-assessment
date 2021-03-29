const apiManager = {
  getType(type) {
    return fetch(`http://localhost:3001/${type}`).then((response) =>
      response.json()
    );
  },
  addDriver(driver) {
    return fetch(`http://localhost:3001/drivers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(driver),
    });
  }
};

export default apiManager;
