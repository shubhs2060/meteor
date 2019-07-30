import React from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import Rclass from './Rclass.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import List from './List.jsx';

const App = () => (
  <div>
    <Header />
    <Banner />
    <h1>Welcome to Meteor take a detour!</h1>
    <Hello />
    <Info />
    <Rclass />
    <List name="Raj" />
    <List name="Madhouse" />
    <List name="poner" />

  </div>
);

export default App;
