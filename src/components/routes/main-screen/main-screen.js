import React from "react";
import "./main-screen.css";
class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Jorge" };
    console.log("constructor(props) {}");
  }

  componentDidMount() {
    fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(myJson => this.setState({ name: myJson.results[0].name.first }));

    console.log("componentDidMount() {}");
  }

  // getDerivedStateFromProps

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name !== this.state.name) {
      return true;
    } else {
      return false;
    }
  }

  //NO ES COMUN USAR ESTE MÉTODO
  //getSnapshotBeforeUpdate(prevProps, prevState) {}

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate(prevProps, prevState) {}");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount(){}");
  }
  render() {
    console.log("render(){} and this.state:", this.state);
    return (
      <div className="mainContainer">{`Mi nombre es:${this.state.name}`}</div>
    );
  }
}

export default MainScreen;
