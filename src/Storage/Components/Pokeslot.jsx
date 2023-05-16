import { useRef, useState } from 'react';
import { ReactComponent as PokeBall } from '../Assets/svg/Pokeball-icon.svg';
import pokemonList from '../../Storage/Assets/PokemonList.json'

//#region functions for adding the submitted values to the pokemon slots

//-----------------------------------

export default function Pokeslot(props) {
	//#region Variables
	const [slotActive, setActiveSlot] = useState('false');
	const inputRef = useRef();
	const pn = 'pokeSlot' + props.n.toString();
	//#endregion

	//#region Check if active, then toggle off any currently active slots
	function ActiveCheck() {
		if (slotActive === false) {
			setActiveSlot(!slotActive);
		}
		return;
	}
	//#endregion

	//#region Toggle the state of the PokeSlot
	const ToggleSlot = () => {
		ActiveCheck();
		setActiveSlot(!slotActive);
	};
	//#endregion

	//#region Toggle all PokeSlots to false on submit
	function onSubmit(e) {
		e.preventDefault();
		const pokeValue = inputRef.current.value;
		const pokemons = Object.values(pokemonList.pokemon.Gen1);
		const validPokemon = pokemons.find(pokemon => pokemon === pokeValue);
		if (validPokemon) {console.log(pokeValue+' entered')}
		else if (pokeValue === ''){return console.warn('Pokeballs do not catch empty pokemon')}
		else {return console.error('Not a Pokemon')}
		inputRef.current.value = ''; //makes sure the field is empty after submitting
	}
	//#endregion

//#region Pokemon Slot fields
	return (
		<div className={`container_${pn} ${slotActive ? '' : 'active'}`}>
			<form id={`form-${pn}`} onSubmit={onSubmit}>
				<input
					onFocus={ToggleSlot}
					onBlur={ToggleSlot}
					placeholder="Search your Pokemon"
					id={`input-${pn}`}
					type={'search'}
					ref={inputRef}
					autoComplete="off"
					className={`${pn}`}
				/>
			</form>
			<PokeBall />
		</div>
	);
//#endregion
}