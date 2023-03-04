import './assets/pages-style.css';
import './assets/GenOnePokemon.json';
import Pokeslot from './assets/Pokeslot';

export default function Content01() {
	return (
		<div className="PokeSearchSection">
			<section id="c01s01">
				<button className="submit-button" type="submit">
					Add
				</button>
			</section>

			<section id="c01s02">
				<div className="title">
					<p style={{ fontWeight: 'bold' }}>Your Pokemon!</p>
				</div>
				<Pokeslot n="01" />
				{/* <div className={`Pokemon-slot ${slot01Active ? '' : 'active'}`} id="Pokemon01">
					<div onClick={ToggleSlot01} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon01.map((Pokemon01) => (<div className="setPokemon">{Pokemon01 || 'Pokemon slot 1'}</div>))}
				</div>
				<div
					className={`Pokemon-slot ${slot02Active ? '' : 'active'}`}
					id="Pokemon02"
				>
					<div onClick={Toggleslot02} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon02.map((Pokemon02) => (
						<div className="setPokemon">{Pokemon02 || 'Pokemon slot 2'}</div>
					))}
				</div>
				<div
					className={`Pokemon-slot ${slot03Active ? '' : 'active'}`}
					id="Pokemon03"
				>
					<div onClick={Toggleslot03} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon03.map((Pokemon03) => (
						<div className="setPokemon">{Pokemon03 || 'Pokemon slot 3'}</div>
					))}
				</div>
				<div
					className={`Pokemon-slot ${slot04Active ? '' : 'active'}`}
					id="Pokemon04"
				>
					<div onClick={Toggleslot04} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon04.map((Pokemon04) => (
						<div className="setPokemon">{Pokemon04 || 'Pokemon slot 4'}</div>
					))}
				</div>
				<div
					className={`Pokemon-slot ${slot05Active ? '' : 'active'}`}
					id="Pokemon05"
				>
					<div onClick={Toggleslot05} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon05.map((Pokemon05) => (
						<div className="setPokemon">{Pokemon05 || 'Pokemon slot 5'}</div>
					))}
				</div>
				<div
					className={`Pokemon-slot ${slot06Active ? '' : 'active'}`}
					id="Pokemon06"
				>
					<div onClick={Toggleslot06} className="selectorSpace"></div>
					<PokeBall />
					{Pokemon06.map((Pokemon06) => (
						<div className="setPokemon">{Pokemon06 || 'Pokemon slot 6'}</div>
					))}
				</div> */}
			</section>
		</div>
	);
}
