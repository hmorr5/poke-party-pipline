import { useRef, useState } from 'react';
import { ReactComponent as PokeBall } from '../assets/Pokeball-icon.svg';
import AutoFill from './AutoFill';

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
			document.querySelector('[id^="pokeSlot"]').getAttribute('class') ===
			`Pokemon-slot ${pn} active`
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
				<div className="selectorSpace"></div>
				<input
					onSelect={ToggleSlot}
					onChange={AutoFill}
					placeholder="Search your Pokemon"
					id={`input-${pn}`}
					type={'search'}
					ref={inputRef}
					className={`autoComplete-items Pokemon-slot ${pn} ${slotActive ? '' : 'active'}`}
				/>
			</form>
			<PokeBall />
		</div>
	);
}

/*
<div className={`Pokemon-slot ${slot01Active ? '' : 'active'}`} id="Pokemon01">
	<div onClick={ToggleSlot01} className="selectorSpace"></div>
	<PokeBall />
	{Pokemon01.map((Pokemon01) => (<div className="setPokemon">{Pokemon01 || 'Pokemon slot 1'}</div>))}
</div>
*/
