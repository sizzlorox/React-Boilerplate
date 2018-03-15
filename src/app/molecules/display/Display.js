const React = require('react');
const { Route, Switch } = require('react-router-dom');

// Views
const Home = require('../../templates/home/Home');
const About = require('../../templates/about/About');
const Faq = require('../../templates/faq/Faq');

// Components
const Loading = require('../loading/Loading');

class Display extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar',
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/faq' component={() => <Faq styles={this.props.styles} />} />
          <Route component={Home} />
        </Switch>
      )
  }
}
module.exports = Display;