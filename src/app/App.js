require('foundation-sites');
require('./app.scss');

const React = require('react');
const { Route, Switch } = require('react-router-dom');
const Loading = require('./atoms/loading/Loading');

// Organisms
const HeaderOrganism = require('./organisms/header/Header');
const FooterOrganism = require('./organisms/footer/Footer');

// Pages
const HomePage = require('./pages/home/Home');
const AboutPage = require('./pages/about/About');
const FaqPage = require('./pages/faq/Faq');
const ProfilePage = require('./pages/profile/Profile');
const ChatroomPage = require('./pages/chat/Chat');

class App extends React.Component {
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
          <HeaderOrganism />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/faq' component={FaqPage} />
            <Route exact path='/profile' component={ProfilePage} />
            <Route exact path='/chatroom' component={ChatroomPage} />
            <Route component={HomePage} />
          </Switch>
          <FooterOrganism />
        </div>
      )
  }
}
module.exports = App;