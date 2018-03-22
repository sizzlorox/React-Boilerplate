const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

class Content extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
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
    return (
      <div className={this.props.className} style={{ display: this.props.active ? 'block' : 'none' }} data-tab-content>
        {this.props.children}
      </div>
    );
  }
}
module.exports = Content;