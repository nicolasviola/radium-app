import React from 'react';
import './main-screen.css';
import Header from '../header/header'

class MainScreen extends React.Component {
  render() {
    return (
      <div className="mainContainer">
          <Header title='Hola mundo!!' />
      </div>
    );
  }
  
}

export default MainScreen;