import React from 'react';
import './header.css';

class Header extends React.Component {
  state={
    titleState: 'hola mundo desde el state',
  }

  render() {
    return (
      <div className="mainHeader">
          {this.state.titleState}
          <button className="buttonHeader" onClick={() => {
            this.setState({
              titleState: 'hola mundo se cambia y el componente se renderiza de nuevo',
            })
          }}>
            Apreta aca y cambia el state
          </button>
      </div>
    );
  }
  
}

export default Header;