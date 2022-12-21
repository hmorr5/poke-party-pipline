import './assets/pages-style.css';
import PokeBall from './assets/Pokeball-icon.svg';
// import './assets/autoFill.js';

function NameField() {
    return (
        <form autoComplete="off">
            <div className="autoComplete">
                <input value={this} type="text" id="pokeSearch" name="pokemonSearch" placeholder="Pokemon Name" />
                <input disabled type="submit" value="Submit" />
            </div>
        </form>
    );
};


export default function Content01() {
    return (
        <div className="PokeSearchSection">
            <section id="c01s01">
                <p>Pokemon Search <br /> Search for your Pokemon!</p>
                <NameField />
            </section>
            <section id="c01s02">
                <p style={{fontWeight:"bold"}}>
                    Your Pokemon!
                </p>
                <div className='Pokemon-slot' id='Pokemon01'>
                    Pokemon01
                </div>
                <div className='Pokemon-slot' id='Pokemon02'>
                    Pokemon02
                </div>
                <div className='Pokemon-slot' id='Pokemon03'>
                    Pokemon03
                </div>
                <div className='Pokemon-slot' id='Pokemon04'>
                    Pokemon04
                </div>
                <div className='Pokemon-slot' id='Pokemon05'>
                    Pokemon05
                </div>
                <div className='Pokemon-slot' id='Pokemon06'>
                    Pokemon06
                </div>
            </section>
        </div>
    );
};