import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = ({pokemonDetail}) => ({
  poke: pokemonDetail
});

const mapDispatchToProps = () => ({


});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
