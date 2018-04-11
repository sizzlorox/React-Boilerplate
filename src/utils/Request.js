class Request {

  fetchJSON(...args) {
    return fetch(...args)
      .then((res) => res.json())
      .catch(err => console.log);
  }

}
module.exports = new Request();