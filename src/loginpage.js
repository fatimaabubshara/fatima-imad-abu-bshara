import React, { Component } from "react";
import "./style.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  fetchData = async () => {
    const responce = await fetch(
      "https://traineer-064a.restdb.io/rest/accounts",
      {
        async: true,
        crossDomain: true,
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-apikey": "5f81fab25799e648a5a8eec6",
          "cache-control": "no-cache",
        },
      }
    ).then((responce) => responce.json());

    if (
      this.state.email === responce[0].email &&
      this.state.password === responce[0].password
    ) {
      this.props.history.push("/App");
    } else {
      alert("in valid Log in !!!!!!!!!!!");
    }
    //console.log(responce);
  };
  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handlepassword(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    return (
      <div class="logcontainer">
        <p>The Login Page</p>
        <input
          className="inputs"
          name="email"
          placeholder="Email"
          id="email"
          type="text"
          value={this.state.email}
          onChange={this.handleEmail.bind(this)}
        />
        <input
          className="inputs"
          type="password"
          name="password"
          id="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handlepassword.bind(this)}
        />
        <button id="login" onClick={() => this.fetchData()}>
          LOG_IN
        </button>
      </div>
    );
  }
}
