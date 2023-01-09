import { useRef, useState } from 'react';
import './assets/pages-style.css';
import './assets/GenOnePokemon.json';
import { ReactComponent as PokeBall } from './assets/Pokeball-icon.svg';
import { ReactComponent as ClosedPokeBall } from './assets/Pokeball-icon-closed.svg';

export default function Content01() {

    const [Pokemon01, setPokemon01] = useState([''])
	const [Pokemon02, setPokemon02] = useState(['']);
	const [Pokemon03, setPokemon03] = useState(['']);
	const [Pokemon04, setPokemon04] = useState(['']);
	const [Pokemon05, setPokemon05] = useState(['']);
	const [Pokemon06, setPokemon06] = useState(['']);

	const inputRef = useRef();

	function onSubmit(e) {
        e.preventDefault();
        const value = inputRef.current.value;
        if (value === '') return;
		if (document.getElementById('Pokemon01').getAttribute("class") === 'Pokemon-slot active') {
			setPokemon01((prev) => {
				return [value];
			});
		}
		if (document.getElementById('Pokemon02').getAttribute("class") === 'Pokemon-slot active') {
			setPokemon02((prev) => {
				return [value];
			});
		}
        if (document.getElementById('Pokemon03').getAttribute("class") === 'Pokemon-slot active') {
			setPokemon03((prev) => {
				return [value];
			});
		}
        if (document.getElementById('Pokemon04').getAttribute("class") === 'Pokemon-slot active') {
			setPokemon04((prev) => {
				return [value];
			});
		}
        if (document.getElementById('Pokemon05').getAttribute("class") === 'Pokemon-slot active') {
			setPokemon05((prev) => {
				return [value];
			});
		}
        if (document.getElementById('Pokemon06').getAttribute("class") === 'Pokemon-slot active') {
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
					<input placeholder='Search for your Pokemon' type={'search'} ref={inputRef} />
					<button className="submit-button" type="submit">
						Add
					</button>
				</form>
			</section>

			<section id="c01s02">
				<div className="title">
					<p style={{ fontWeight: 'bold' }}>Your Pokemon!</p>
				</div>
				<div className="Pokemon-slot" id="Pokemon01">
					<ClosedPokeBall />
					{Pokemon01.map((Pokemon01) => (
						<div>{Pokemon01 || 'Pokemon slot 1'}</div>
					))}
				</div>
				<div className="Pokemon-slot active" id="Pokemon02">
					<PokeBall />
					{Pokemon02.map((Pokemon02) => (
						<div>{Pokemon02 || 'Pokemon slot 2'}</div>
					))}
				</div>
				<div className="Pokemon-slot" id="Pokemon03">
					<ClosedPokeBall />
					{Pokemon03.map((Pokemon03) => (
						<div>{Pokemon03 || 'Pokemon slot 3'}</div>
					))}
				</div>
				<div className="Pokemon-slot" id="Pokemon04">
					<ClosedPokeBall />
					{Pokemon04.map((Pokemon04) => (
						<div>{Pokemon04 || 'Pokemon slot 4'}</div>
					))}
				</div>
				<div className="Pokemon-slot" id="Pokemon05">
					<ClosedPokeBall />
					{Pokemon05.map((Pokemon05) => (
						<div>{Pokemon05 || 'Pokemon slot 5'}</div>
					))}
				</div>
				<div className="Pokemon-slot" id="Pokemon06">
					<ClosedPokeBall />
					{Pokemon06.map((Pokemon06) => (
						<div>{Pokemon06 || 'Pokemon slot 6'}</div>
					))}
				</div>
			</section>
		</div>
	);
}
