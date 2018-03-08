const ReactDOM = require('react-dom');
const { BrowserRouter } = require('react-router-dom');
const App = require('./components/App');

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'), (err) => console.log(err));