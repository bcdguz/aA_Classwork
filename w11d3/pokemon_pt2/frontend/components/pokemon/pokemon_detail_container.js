import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, props) => {
    return({
        poke: state.pokemon[props.match.params.id]
    })
}


export default connect(mapStateToProps, null)(PokemonDetail)