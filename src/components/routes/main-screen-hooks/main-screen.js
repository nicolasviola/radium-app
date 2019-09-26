import React, { useState, useEffect } from "react";
import { useBattery } from "react-use";
import "./main-screen.css";

const MainScreen = props => {
  //Destructuring
  const [name, setName] = useState(0);
  //console.log("state", state);
  const batteryState = useBattery();

  useEffect(() => console.log("Render"));
  useEffect(() => console.log("El nombre cambio!"), [name]);

  useEffect(() => {
    //componentDidMount
    fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(myJson => setName(myJson.results[0].name.first));
    return () => {
      //componentWillUnMount
      console.log("Componente se desmontó");
    };
  }, []);

  if (!batteryState.isSupported) {
    return (
      <div>
        <strong>Battery sensor</strong>: <span>not supported</span>
      </div>
    );
  }

  return (
    <div className="mainContainer">{`Mi nombre es:${name} y la bateria de mi dispositivo es ${batteryState.level}`}</div>
  );
};

export default MainScreen;
