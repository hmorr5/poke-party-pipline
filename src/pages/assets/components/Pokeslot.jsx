import { useRef, useState } from 'react';
import { ReactComponent as PokeBall } from '../Images/Pokeball-icon.svg';

//#region functions for adding the submitted values to the pokemon slots

//-----------------------------------

export default function Pokeslot(props) {
	//#region Variables
	const [setPokemon] = useState(['']);
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
		const value = inputRef.current.value;
		if (value === '') return;
		if (
			document.getElementById(`input-${pn}`).getAttribute('class') ===
			`${pn} active`
		) {
			setPokemon((prev) => {
				return [value];
			});
		}
		ActiveCheck(); //this makes all slots in-active after submission
		inputRef.current.value = ''; //makes sure the field is empty after submitting
	}

	//#endregion

	return (
		<div className={`container_${pn}`}>
			<form id={`form-${pn}`} onSubmit={onSubmit}>
				<input
					onSelect={ToggleSlot}
					placeholder="Search your Pokemon"
					id={`input-${pn}`}
					type={'search'}
					ref={inputRef}
					autocomplete="off"
					className={`${pn} ${slotActive ? '' : 'active'}`}
				/>
			</form>
			<PokeBall />
		</div>
	);
}