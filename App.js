import React from "react"
import Info from "./info.js";
import axios from "axios";
import Loading from "./Loading";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getAntData = async () => {
    const { data } = await axios.get(
      "http://antserver.hillasen.com:7060/getData?key=password"
    );
    console.log(data);
    this.setState({ isLoading: false, data : data });
  };
  componentDidMount() {
    this.getAntData()
  }
  

  interval = setInterval(() => {
    this.getAntData()
  }, 3000);
  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : <Info data={this.state.data}/>;
  }
}