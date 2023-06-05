//#region Imports
import { useRef, useState } from 'react';
import { ReactComponent as PokeBall } from '../Assets/svg/Pokeball-icon.svg';
import pokemonList from '../Assets/PokemonList.json'
import { SetParty } from '../../pages/Party/PokeSearch.jsx'
//#endregion

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

	//#region Function to submit value in the PokeSlot field.
	function onSubmit(e) {
		e.preventDefault(); //prevents the function from reloading the DOM
		const pokeValue = inputRef.current.value;
		const pokemons = Object.values(pokemonList.pokemon.Gen1);
		const validPokemon = pokemons.find(pokemon => pokemon.toLocaleLowerCase() === pokeValue.toLocaleLowerCase());
		if (validPokemon) { ToggleSlot(); SetParty(props.n, pokeValue); return }//If pokemon matches a pokemon in the json file, return the pokemon.
		else if (pokeValue === '') { console.info('Pokeballs do not catch empty pokemon') }//If field is empty then console log "Pokeballs do not catch empty pokemon".
		else { alert('That is not a valid Pokemon Ash...') }//If the value in the field does not match a pokemon in the json file, then show an alert.
		inputRef.current.value = '';//makes sure the field is empty after submitting.
	}
	//#endregion


	//#region Pokemon Slot HTML JSX of the field.
	return (
		<div className={`container_${pn} ${!slotActive ? '' : 'active'}`}>
			<form id={`form-${pn}`} onSubmit={(e) => {
				e.preventDefault();//Prevents the DOM from reloading.
				onSubmit(e);
			}}>
				<input
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