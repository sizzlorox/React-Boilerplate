const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
// Needed for fetch
require('isomorphic-fetch');

Enzyme.configure({ adapter: new Adapter() });