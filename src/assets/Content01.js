// import logo from './logo.svg';
import { getByDisplayValue } from '@testing-library/react';


function NameField(){
    return (
        <div>
            <label name="name">
                <input type="text" name="name" placeholder="Pokemon Name"/>
            </label>
        <input type="submit" value="Submit" />
    </div>
    );
}


function Content01() {
    return (
        <div className="body">
            <p>
                Search for your Pokemon!
            </p>
            <div>
                <form>
                    <NameField/>
                </form>
            </div>
        </div>
    );
}

export default Content01;