const React = require('react');
const ReactDOM = require('react-dom');

// Atoms
const Loading = require('../../atoms/loading/Loading');
const Text = require('../../atoms/footer/Text');

class Footer extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ?
      (<Loading />)
      : (
        <div>
          <Text className='four columns offset-by-six'>
            Copyright here.
          </Text>
        </div>
      )
  }
}
module.exports = Footer;