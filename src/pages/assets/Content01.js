import './AutoFill.js';
// import { NameField } from './NameField.js';

// const pokeApi = (mon) => {
//     const pokeUrl="https://pokeapi.co/api/v2/pokemon/";
//     mon = document.getValueById("pokeSearch");
//     console.log(pokeUrl+mon+"/")
// };

function NameField() {
    return (
        <form autoComplete="off">
            <div className="autoComplete">
                <input type="text" id="pokeSearch" name="pokemonSearch" placeholder="Pokemon Name" style={{margin:"0px 0px 0px 0px"}} />
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
                <h4>
                    Your Pokemon!
                </h4>
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