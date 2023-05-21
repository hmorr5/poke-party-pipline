import '../../index.css';
import '../../Storage/Assets/PokemonList.json';
import Pokeslot from '../../Storage/Components/Pokeslot.jsx';
import PokemonParty from '../../Storage/Assets/SelectedParty.json'

let Party = [];
Object.values(PokemonParty).forEach((pokemon) => (Party.push(pokemon)));
console.info("Party "+Party)

export function SetParty(Slot, Pokemon){
	Party[Slot-1] = Pokemon;
	console.log(Party)
	
};

export default function Content01() {
	return (
		<div className="PokeSearchSection">
			<section id="c01s01">
				<h1 className="title">
					<strong>Your Pokemon!</strong>
				</h1>
				<div className="pokemonParty-Container">
					<div id="partyGridZone1"><Pokeslot n="01" /></div>
					<div id="partyGridZone2"><Pokeslot n="02" /></div>
					<div id="partyGridZone3"><Pokeslot n="03" /></div>
					<div id="partyGridZone4" hidden={true}><p>{Party[0]}</p></div>
					<div id="partyGridZone5" hidden={true}><p>{Party[1]}</p></div>
					<div id="partyGridZone6" hidden={true}><p>{Party[3]}</p></div>
					<div id="partyGridZone7"><Pokeslot n="04" /></div>
					<div id="partyGridZone8"><Pokeslot n="05" /></div>
					<div id="partyGridZone9"><Pokeslot n="06" /></div>
					<div id="partyGridZone10" hidden={true}><p>{}</p></div>
					<div id="partyGridZone11" hidden={true}><p>{}</p></div>
					<div id="partyGridZone12" hidden={true}><p>{}</p></div>
				</div>
			</section>
		</div>
	);
}
