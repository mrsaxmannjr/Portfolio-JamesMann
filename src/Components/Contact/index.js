import React from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import logo from "./js.png";

const Contact = () => (
  <TheContact>
    <span>
      <Overdrive id="img" duration="700">
        <img src={logo} />
      </Overdrive>
    </span>
    <div>
      <h1>CONTACT</h1>
      <p>Don't be a stranger, go ahead and drop me a message, I'd love to hear from you!</p>
      <form method="post" encType="text/plain">
        <input type="text" name="name" placeholder="Your name" required="" />
        <input type="email" name="email" placeholder="Your email" required="" />
        <textarea rows="5" name="message" placeholder="Your message" required="" />
        <button type="submit" id="submit">Send</button>
      </form>
    </div>
  </TheContact>
);

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
  margin-bottom: 30px;
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

  input {
    width: 425px;
    height: 50px;
    margin: 10px;
    font-size:24px;
  }

  textarea {
    width: 425px;
    margin: 10px;
    font-size:24px;
  }

  button {
    margin: 10px;
    margin-bottom: 6px;
    height: 30px;
    width: 150px;
    border-radius: 2%;
    font-size:20px;
  }
}
`;
