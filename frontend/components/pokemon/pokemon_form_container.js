import PokemonForm from './pokemon_form';
import { connect } from 'react-redux';
import { createPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  createPokemon: (pokeParams) => dispatch(createPokemon(pokeParams))
});
export default connect(
  mapStateToProps
)(PokemonForm);
