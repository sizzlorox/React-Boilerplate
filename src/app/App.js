const React = require('react');
const { Route, Switch } = require('react-router-dom');
const Loading = require('./atoms/loading/Loading');

require('./app.scss');

// Pages
const HomePage = require('./pages/home/Home');
const FaqPage = require('./pages/faq/Faq');

class App extends React.Component {
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
          <Route exact path='/' component={HomePage} />
          <Route exact path='/faq' component={FaqPage} />
          <Route component={HomePage} />
        </Switch>
      )
  }
}
module.exports = App;