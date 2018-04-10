const React = require('react');
const ReactDOM = require('react-dom');
const Request = require('../../../utils/Request');
const styles = require('../../app.scss');
const $ = require('jquery');

// Atoms
const Loading = require('../../atoms/loading/Loading');

class Home extends React.Component {
  // Should initialize state in constructor instead of getInitialState when using ES6 Classes
  constructor(props) {
    super(props);
    // Locally defined state
    this.state = {
      isLoading: true,
      launches: null
    };
    this.Request = Request;
  }

  componentWillMount() {
    this.setState({ isLoading: true });
  }

  componentDidMount() {
    $('#home').ready(() => {
      $('#home').foundation();
    });
    this.Request.fetchJSON('https://ipeer.auron.co.uk/launchschedule/api/1/launches/',
      {
        method: 'GET'
      })
      .then(res => this.setState({ launches: res.launches }));
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading || !this.state.launches ?
      (<Loading />)
      : (
        <div id='home'>
          <table className={`${styles.table} ${styles.stack}`}>
            <thead>
              <tr>
                <td>
                  Provider
                </td>
                <td>
                  Location
                </td>
                <td>
                  Vehicle
                </td>
                <td>
                  Payload
                </td>
                <td>
                  Launch Time
                </td>
                <td>
                  Delayed
                </td>
              </tr>
            </thead>
            <tbody>
              {
                this.state.launches.map((item, index) => {
                  return <tr key={index}>
                    <td>
                      {item.provider}
                    </td>
                    <td>
                      {item.location}
                    </td>
                    <td>
                      {item.vehicle}
                    </td>
                    <td>
                      {item.payload}
                    </td>
                    <td>
                      {item.launchtime}
                    </td>
                    <td>
                      {item.delayed ? 'No' : 'Yes'}
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      )
  }
}
module.exports = Home;