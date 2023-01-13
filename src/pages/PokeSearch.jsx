import { useRef, useState } from 'react';
import './assets/pages-style.css';
import './assets/GenOnePokemon.json';
import { ReactComponent as PokeBall } from './assets/Pokeball-icon.svg';
import AutoFill from './assets/AutoFill';

export default function Content01() {
	const [Pokemon01, setPokemon01] = useState(['']);
	const [Pokemon02, setPokemon02] = useState(['']);
	const [Pokemon03, setPokemon03] = useState(['']);
	const [Pokemon04, setPokemon04] = useState(['']);
	const [Pokemon05, setPokemon05] = useState(['']);
	const [Pokemon06, setPokemon06] = useState(['']);

	const [slot01Active, setActiveSlot01] = useState('false');
	const [slot02Active, setActiveslot02] = useState('false');
	const [slot03Active, setActiveslot03] = useState('false');
	const [slot04Active, setActiveslot04] = useState('false');
	const [slot05Active, setActiveslot05] = useState('false');
	const [slot06Active, setActiveslot06] = useState('false');

	/*  */ 
	function ActiveCheck() {
		if(slot01Active == false){
			setActiveSlot01(!slot01Active);
		}
		if(slot02Active == false){
			setActiveslot02(!slot02Active);
		}
		if(slot03Active == false){
			setActiveslot03(!slot03Active);
		}
		if(slot04Active == false){
			setActiveslot04(!slot04Active);
		}
		if(slot05Active == false){
			setActiveslot05(!slot05Active);
		}
		if(slot06Active == false){
			setActiveslot06(!slot06Active);
		}
		return
	}
	/* Toggle active class state for Pokemon slot 01 */
	const ToggleSlot01 = () => { 
		ActiveCheck()
		setActiveSlot01(!slot01Active)
	};

	/* Toggle active class state for Pokemon slot 02*/
	const Toggleslot02 = () => {ActiveCheck();setActiveslot02(!slot02Active)};

	/* Toggle active class state for Pokemon slot 03*/
	const Toggleslot03 = () => {ActiveCheck();setActiveslot03(!slot03Active)};
	
	/* Toggle active class state for Pokemon slot 04*/
	const Toggleslot04 = () => {ActiveCheck();setActiveslot04(!slot04Active)};

	/* Toggle active class state for Pokemon slot 05 */
	const Toggleslot05 = () => {ActiveCheck();setActiveslot05(!slot05Active)};

	/* Toggle active class state for Pokemon slot 06 */
	const Toggleslot06 = () => {ActiveCheck();setActiveslot06(!slot06Active)};



	const inputRef = useRef();

	// function SelectSlot(prop){
	// 	console.log('%c'+prop.target.parentElement, 'color:blue;')
	// 	console.log(prop.target.parentElement.id)
	// 	if (prop == undefined){return console.alert('Pokeslot prop is undefined')}
	// 	function slot01(){
			
	// 	}
	// }

	function onSubmit(e) {
		e.preventDefault();
		console.log('onSubmit e value:'+e)
		const value = inputRef.current.value;
		if (value === '') return;
		if (
			document.getElementById('Pokemon01').getAttribute('class') ===
			'Pokemon-slot active'
		) {
			setPokemon01((prev) => {
				return [value];
			});
		}
		if (
			document.getElementById('Pokemon02').getAttribute('class') ===
			'Pokemon-slot active'
		) {
			setPokemon02((prev) => {
				return [value];
			});
		}
		if (
			document.getElementById('Pokemon03').getAttribute('class') ===
			'Pokemon-slot active'
		) {
			setPokemon03((prev) => {
				return [value];
			});
		}
		if (
			document.getElementById('Pokemon04').getAttribute('class') ===
			'Pokemon-slot active'
		) {
			setPokemon04((prev) => {
				return [value];
			});
		}
		if (
			document.getElementById('Pokemon05').getAttribute('class') ===
			'Pokemon-slot active'
		) {
			setPokemon05((prev) => {
				return [value];
			});
		}
		if (
			document.getElementById('Pokemon06').getAttribute('class') ===
			'Pokemon-slot active'
		) {
			setPokemon06((prev) => {
				return [value];
			});
		}
		inputRef.current.value = '';
	}

	return (
		<div className="PokeSearchSection">
			<section id="c01s01">
				<p>
					Pokemon Search <br /> Search for your Pokemon!
				</p>
				<form onSubmit={onSubmit}>
					<input
						onChange={AutoFill}
						placeholder="Search for your Pokemon"
						id="pokeSearch"
						type={'search'}
						ref={inputRef}
					/>
					<button className="submit-button" type="submit">
						Add
					</button>
				</form>
			</section>

			<section id="c01s02">
				<div className="title">
					<p style={{ fontWeight: 'bold' }}>Your Pokemon!</p>
				</div>
				<div className={`Pokemon-slot ${slot01Active ? '' : 'active'}`} id='Pokemon01'>
					<div onClick={ToggleSlot01} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon01.map((Pokemon01) => (
						<div>{Pokemon01 || 'Pokemon slot 1'}</div>
					))}
				</div>
				<div className={`Pokemon-slot ${slot02Active ? '' : 'active'}`} id="Pokemon02">
					<div onClick={Toggleslot02} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon02.map((Pokemon02) => (
						<div>{Pokemon02 || 'Pokemon slot 2'}</div>
					))}
				</div>
				<div className={`Pokemon-slot ${slot03Active ? '' : 'active'}`} id="Pokemon03">
					<div onClick={Toggleslot03} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon03.map((Pokemon03) => (
						<div>{Pokemon03 || 'Pokemon slot 3'}</div>
					))}
				</div>
				<div className={`Pokemon-slot ${slot04Active ? '' : 'active'}`} id="Pokemon04">
					<div onClick={Toggleslot04} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon04.map((Pokemon04) => (
						<div>{Pokemon04 || 'Pokemon slot 4'}</div>
					))}
				</div>
				<div className={`Pokemon-slot ${slot05Active ? '' : 'active'}`} id="Pokemon05">
					<div onClick={Toggleslot05} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon05.map((Pokemon05) => (
						<div>{Pokemon05 || 'Pokemon slot 5'}</div>
					))}
				</div>
				<div className={`Pokemon-slot ${slot06Active ? '' : 'active'}`} id="Pokemon06">
					<div onClick={Toggleslot06} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon06.map((Pokemon06) => (
						<div>{Pokemon06 || 'Pokemon slot 6'}</div>
					))}
				</div>
			</section>
		</div>
	);
}
