import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      form: {
        nome: '',
        email: '',
        senha: '',
        sexo: '',
      }
    };
    
    this.validarForm = this.validarForm.bind(this);
  }
  
  validarForm(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState(form);
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td>Nome:</td>
            <td>
              <input 
                type="text"
                name="nome" 
                placeholder="Digite seu nome" 
                value={this.state.form.nome}
                onChange={this.validarForm} />
            </td>
          </tr>
          <tr>
            <td>User:</td>
            <td>
              <input 
                type="email"
                name="email" 
                placeholder="Digite seu e-mail" 
                value={this.state.form.email}
                onChange={this.validarForm} />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
              <td>
              <input 
                type="password"
                name="senha" 
                placeholder="Digite sua senha" 
                value={this.state.form.senha}
                onChange={this.validarForm} />
              </td>
          </tr>
          <tr>
            <td>Servidor:</td>
            <td>
              <select name="sexo" value={this.state.form.sexo} onChange={this.validarForm} >
                <option value="f">Feminino</option>
                <option value="m">Masculino</option>
              </select>
            </td>
          </tr>
        </table>                
      </div>
      );
  }
}
  
export default Formulario;