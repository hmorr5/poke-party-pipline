import { useRef, useState } from 'react';
import { ReactComponent as PokeBall } from '../Assets/svg/Pokeball-icon.svg';
import pokemonList from '../Assets/PokemonList.json'
import {SetParty} from '../../pages/Party/PokeSearch.jsx'

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
		if (validPokemon) {ToggleSlot(); SetParty(props.n,pokeValue); return}
		else if (pokeValue === ''){console.info('Pokeballs do not catch empty pokemon')}
		else {alert('That is not a valid Pokemon Ash...')}
		inputRef.current.value = ''; //makes sure the field is empty after submitting
	}
	//#endregion


//#region Pokemon Slot fields
	return (
		<div className={`container_${pn} ${!slotActive ? '' : 'active'}`}>
			<form id={`form-${pn}`} onSubmit={(e) => {
				e.preventDefault();
				onSubmit(e);
				}}>
				<input
					//onFocus={ToggleSlot}
					//onBlur={ToggleSlot}
					placeholder="Search your Pokemon"
					id={`input-${pn}`}
					type={'search'}
					ref={inputRef}
					autoComplete="off"
					className={`${pn}`}
					disabled={!slotActive}
				/>
			</form>
			<PokeBall onClick={ToggleSlot} />
		</div>
	);
//#endregion
}