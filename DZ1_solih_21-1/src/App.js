import React from "react";

function Welcome(props) {
  return (
    <h1>Hi, {props.name}</h1>
  );
}

function App() {
  return(
    <div>
      <Welcome name="Sara"/>
      <Welcome name="Marlen"/>
      <Welcome name="Eric"/>
    </div>
  )
}

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hi, {this.props.name}</h1>
//   }
// }

export default App;
