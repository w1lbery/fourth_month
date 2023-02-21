import React from "react";

class Button extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({name: "Geeks", age: 15})
  }

  render() {
    return(
      <div className="block">
        <p className="p">Имя: {this.state.name}, Возраст: {this.state.age}</p>
        <button onClick={this.handleClick} className="btn">ЖИМАЙ СЮДА</button>
      </div>
      
    )
  }
}



export default Button;