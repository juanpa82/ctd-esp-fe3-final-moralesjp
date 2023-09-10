import React, { Component } from 'react';

class ValidarEmail extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailValido: false,
    };
  }

  handleEmailChange = (e) => {
    const email = e.target.value;
    // Expresión regular para validar el formato de correo electrónico
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const esValido = regex.test(email);
    this.setState({
      email: email,
      emailValido: esValido,
    });
  };

  render() {
    return (
      <div>
        <label htmlFor="email">email:</label>
        <input
          type="text"
          id="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        {this.state.emailValido ? (
          <p>Correo electrónico válido.</p>
        ) : (
          <p>Correo electrónico inválido.</p>
        )}
      </div>
    );
  }
}

export default ValidarEmail;