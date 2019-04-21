import React from 'react';
import Top from './Top';
import Middle from './Middle';
import Bottom from './Bottom';

const App = () => (
  <div className="main">
    <div className="row">
      <div className="col-12">
        <Top />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Middle />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Bottom />
      </div>
    </div>
  </div>
);

export default App;
