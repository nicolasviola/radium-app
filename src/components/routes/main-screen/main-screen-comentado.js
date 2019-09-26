import React from "react";
import "./main-screen.css";

class MainScreen extends React.Component {
  // ------------------------------------  FASE DE MONTADO ----------------------------------------------
  constructor(props) {
    console.log("constructor(props) {}");
    super(props);
    // NO llamar a this.setState() aca, usar:
    this.state = { name: "Jorge" };
    // NO hacer esto:
    // this.state = { name: props.name };

    // En el constructor tambien debemos hacer esto para cada método de clase propio que codeemos.
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {

  // }

  /*
  ES RARO USAR ESTE MÉTODO.

  getDerivedStateFromProps se invoca justo antes de llamar al método de render, tanto en la montura inicial 
  como en las actualizaciones posteriores. Debes devolver un objeto para actualizar el estado, o nulo para actualizar nada.
  Este método existe para casos de uso raros donde el estado depende de los cambios en props con el tiempo. 
  */
  // static getDerivedStateFromProps(props, state) {}

  componentDidMount() {
    // componentDidMount() se ejecuta inmediatamente despues de que el componente se monta (insertar en el DOM).
    // Aca sí podemos llamar a setState (va a triggerear un render extra)
    // this.setState({ name: "Horacio" });
    // Acá si podemos hacer un llamado HTTP

    window.addEventListener();
    fetch("https://randomuser.me/api")
      .then(response => response.json())
      .then(myJson => this.setState({ name: myJson.results[0].name.first }));

    console.log("componentDidMount() {}");
  }

  // --------------------------------------------------------------------------------------------------------------

  // --------------------------------------------- FASE DE RE-RENDERIZADO ------------------------------------------

  // getDerivedStateFromProps tambien se ejecuta en cada re renderizado

  // Es raro usarlo
  shouldComponentUpdate(nextProps, nextState) {
    /*
      Este método sólo existe como optimización de rendimiento. No confíes en él para “prevenir” un renderizado, 
      ya que esto puede conducir a errores. Considere usar el componente integrado PureComponent en lugar de escribir 
      shouldComponentUpdate() a mano. PureComponent realiza una comparación superficial de props y estado, y reduce la 
      posibilidad de saltar una actualización necesaria.
    */
    // Por ejemplo
    if (nextState.name !== this.state.name) {
      return true;
    } else {
      return false;
    }
  }

  // NO ES COMUN USAR ESTE MÉTODO
  //getSnapshotBeforeUpdate(prevProps, prevState) {}
  /*
    getSnapshotBeforeUpdate() se invoca justo antes de que la salida renderizada más reciente se entregue, por ejemplo, al DOM. 
    Permite al componente capturar cierta información del DOM (por ejemplo, la posición del scroll) 
    antes de que se cambie potencialmente. 
  */

  componentDidUpdate(prevProps, prevState) {
    /*
      componentDidUpdate() se invoca inmediatamente después de que la actualización ocurra. Este método no es llamado para el renderizador inicial.
      Use esto como una oportunidad para operar en DOM cuando el componente se haya actualizado. Este es también un buen lugar para hacer solicitudes 
      de red siempre y cuando compare los accesorios actuales con los anteriores (por ejemplo, una solicitud de red puede no ser necesaria si los props no han cambiado).
    */
    // Requests HTTP
    // setState()

    // this.setState({ name: "pepito" });
    console.log("componentDidUpdate(prevProps, prevState) {}");
  }
  // --------------------------------------------------------------------------------------------------------------

  // ------------------------------------ FASE DE DESMONTADO -----------------------------------------------------
  componentWillUnmount() {
    /*
      componentWillUnmount() se invoca inmediatamente antes de desmontar y destruir un componente. 
      Realiza las tareas de limpieza necesarias en este método, como la invalidación de temporizadores, 
      la cancelación de solicitudes de red o la eliminación de las suscripciones que se crearon en componentDidMount().
    */
    console.log("componentWillUnmount(){}");
  }
  // -------------------------------------------------------------------------------------------------------------
  render() {
    console.log("render(){} and this.state:", this.state);
    return (
      <div className="mainContainer">{`Mi nombre es:${this.state.name}`}</div>
    );
  }
}

export default MainScreen;
