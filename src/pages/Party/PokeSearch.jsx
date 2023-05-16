import '../../index.css';
import '../../Storage/Assets/PokemonList.json';
import Pokeslot from '../../Storage/Components/Pokeslot.jsx';

export default function Content01() {
	return (
		<div className="PokeSearchSection">
			<section id="c01s01">
				<h1 className="title">
					<strong>Your Pokemon!</strong>
				</h1>
				<div className="pokemonParty-Container">
					<div className="partyGridZone1"><Pokeslot n="01" /></div>
					<div className="partyGridZone2"><Pokeslot n="02" /></div>
					<div className="partyGridZone3"><Pokeslot n="03" /></div>
					<div className="partyGridZone4"></div>
					<div className="partyGridZone5"></div>
					<div className="partyGridZone6"></div>
					<div className="partyGridZone7"><Pokeslot n="04" /></div>
					<div className="partyGridZone8"><Pokeslot n="05" /></div>
					<div className="partyGridZone9"><Pokeslot n="06" /></div>
					<div className="partyGridZone10"></div>
					<div className="partyGridZone11"></div>
					<div className="partyGridZone12"></div>
				</div>
			</section>
		</div>
	);
}
