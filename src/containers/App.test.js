import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App } from './App.js';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
//
it('renders without crashing', () => {
  shallow(<App />);
});
//
// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h2>Welcome to Movie App iTeam</h2>;
//   expect(wrapper.contains(welcome)).toEqual(true);
// });
