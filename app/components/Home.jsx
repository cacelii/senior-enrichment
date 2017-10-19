import React from 'react';
import Campuses from './Campus/Campuses';

const Home = () => (
  <div className="home">
    <div className="container-fluid">
      <div className="col-xs-10">
      <h2>Javascript Academy</h2>
      <h1><small>where you can learn all the javascript your heart desires</small></h1>
      <div className="row">
    <Campuses />
      </div>
      </div>
    </div>
  </div>
);

export default Home;
