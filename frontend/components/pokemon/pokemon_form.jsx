import React from 'react';

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      attack: "",
      defense: "",
      poke_type: "",
      moves: "",
      image_url: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPokemon({pokeParams: this.state});
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <label> Name:
          <input type='text' onChange={this.update(name)}></input>
        </label>
      <br/>
        <label> Name:
          <input type='text' onChange={this.update(name)}></input>
        </label>
      <br/>
        <label> Name:
          <input type='text' onChange={this.update(name)}></input>
        </label>
      <br/>
        <label> Name:
          <input type='text' onChange={this.update(name)}></input>
        </label>
      <br/>
        <label> Name:
          <input type='text' onChange={this.update(name)}></input>
        </label>
      <br/>
        <label> Name:
          <input type='text' onChange={this.update(name)}></input>
        </label>
      <br/>
      </form>
    );
  }

}
