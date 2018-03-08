const React = require('react');
const { Route, Switch } = require('react-router-dom');
const Home = require('./Home');
const About = require('./About');

class Display extends React.Component {
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      foo: 'bar'
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route component={Home}/>
      </Switch>
    )
  }
}
module.exports = Display;