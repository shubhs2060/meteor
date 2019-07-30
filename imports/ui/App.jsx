import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Rclass from './Rclass.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';

const App = () => (
  <div>
    <Header />
    <Banner />
    <h1>Welcome to Meteor take a detour!</h1>
    <Hello />
    <Info />
    <Rclass />

  </div>
);

export default App;
