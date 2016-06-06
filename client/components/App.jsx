import React from 'react';
import Navbar from './layout/Navbar';

const App = (props) => (
  <div>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
