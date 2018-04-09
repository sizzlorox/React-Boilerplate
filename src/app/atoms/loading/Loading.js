const React = require('react');
const ReactLoading = require('react-loading');

class Loading extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Loading...
      </div>
    )
  }
}
module.exports = Loading;