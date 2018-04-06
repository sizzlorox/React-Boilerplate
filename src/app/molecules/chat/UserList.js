const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('../../app.scss');

// Atoms
const Loading = require('../../atoms/loading/Loading');

class UserList extends React.Component {
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
        <div className={`${styles.cell} ${styles.small4} ${styles.userListTable}`}>
          <table className={styles.table}>
            <tbody>
              {
                this.props.users ? this.props.users.map((user, i) => {
                  return (
                    <tr key={i}>
                      <td>{user}</td>
                    </tr>
                  );
                }) : null
              }
            </tbody>
          </table>
        </div>
      )
  }
}
module.exports = UserList;