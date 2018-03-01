import React, { Component } from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";

function postData(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *omit
    headers: {
      "user-agent": "Mozilla/4.0 MDN Example",
      "content-type": "application/json",
    },
    method: "POST", // *GET, PUT, DELETE, etc.
    mode: "cors", // no-cors, *same-origin
    redirect: "follow", // *manual, error
    referrer: "no-referrer", // *client
  })
    .then(response => response.json()); // parses response to JSON
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    postData("http://example.com/answer", { answer: 42 })
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <TheContact>
        <div id="header-background">
          <p id="placeholder">placeholder</p>
        </div>
        <span>
          {/* Logo animation */}
          <Overdrive id="img" duration="700">
            <img src={logo} alt="JM Logo" />
          </Overdrive>
        </span>
        <div>
          <h1>CONTACT</h1>
          <p>Don&#39;t be a stranger, go ahead and drop me a message.  I&#39;d love to hear from you!</p>

          {/* Contact Form */}

          <form method="post" encType="text/plain" onSubmit={this.handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
            <textarea rows="5" name="message" placeholder="Your message" value={this.state.message} onChange={this.handleChange} />
            <button type="submit" id="submit">Send</button>
          </form>
        </div>
      </TheContact>
    );
  }
}

export default Contact;

const TheContact = styled.div`
max-width: 960px;
margin: 45px auto;
margin-top: 0px;
margin-bottom: 0px;
min-height: 70vh;
padding: 80px 5% 0px;
padding-top: 130px;

img {
  height: 127px;
}

span {
  position: fixed;
  top: 0px;
  right: 14px;
}

h1 {
  font-size: 38px;
  margin-bottom: 20px;
  font-weight: 900;
  -webkit-letter-spacing: 5px;
  -moz-letter-spacing: 5px;
  -ms-letter-spacing: 5px;
  letter-spacing: 5px;
  text-align: center;
}

form {
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 50px;

  input {
    width: 425px;
    height: 50px;
    margin: 10px;
    padding-left: 10px;
    font-size: 24px;
    border: solid var(--JS-yellow);
  }

  textarea {
    width: 425px;
    margin: 10px;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 24px;
    border: solid var(--JS-yellow);
  }

  button {
    margin: 10px;
    margin-bottom: 6px;
    height: 30px;
    width: 150px;
    border-radius: 2%;
    font-size:20px;
    border: solid var(--JS-yellow);
    background: var(--JS-yellow);
  }
}

#header-background {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-between;
  -webkit-justify-content: space-between;
  -ms-flex-pack: space-between;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  height: 127px;
  position: fixed;
  background: #111;
}

#placeholder {
  visibility: hidden;
}
`;
