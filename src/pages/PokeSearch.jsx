import './assets/pages-style.css';
import './assets/GenOnePokemon.json';
import Pokeslot from './assets/components/Pokeslot';

export default function Content01() {
	return (
		<div className="PokeSearchSection">
			<section id="c01s01">
				<h1 className="title">
					<strong>Your Pokemon!</strong>
				</h1>
				<div class="pokemonParty-Container">
					<div class="partyGridZone1"><Pokeslot n="01" /></div>
					<div class="partyGridZone2"><Pokeslot n="02" /></div>
					<div class="partyGridZone3"><Pokeslot n="03" /></div>
					<div class="partyGridZone4"></div>
					<div class="partyGridZone5"></div>
					<div class="partyGridZone6"></div>
					<div class="partyGridZone7"><Pokeslot n="04" /></div>
					<div class="partyGridZone8"><Pokeslot n="05" /></div>
					<div class="partyGridZone9"><Pokeslot n="06" /></div>
					<div class="partyGridZone10"></div>
					<div class="partyGridZone11"></div>
					<div class="partyGridZone12"></div>
				</div>
			</section>
		</div>
	);
}
