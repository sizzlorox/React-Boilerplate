class Request extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
  }

  fetchJSON(...args) {
    return fetch(...args)
      .then((res) => res.json())
      .catch(err => console.log);
  }

}
module.exports = new Request();