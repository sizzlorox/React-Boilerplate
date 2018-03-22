const React = require('react');
const ReactDOM = require('react-dom');

// Atoms
const Text = require('../../atoms/Text');

class Footer extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true
    };
  }

  render() {
    return (
      <div>
        <Text className='four columns offset-by-six'>
          Copyright here.
        </Text>
      </div>
    )
  }
}
module.exports = Footer;