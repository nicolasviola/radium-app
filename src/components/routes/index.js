import React from 'react';
import App from '../app/app.js'
import MainScreen from './main-screen/main-screen.js'

class Route extends React.Component {
  render() {
    return (
      <App>
        <MainScreen />
      </App>
    );
  }
  
}

export default Route;