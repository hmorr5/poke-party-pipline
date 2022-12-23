import Axios from "axios";
import axios from "axios";
import { useEffect } from "react";
import { useInsertionEffect } from "react";
import { useState } from "react";

//https://www.npoint.io/docs/70d6b9f336b117c7fa85

function GetUsers(){
   
const [UserPartyList, Party] = useState(null);
const [searchValue, setSearchValue] = useState("");
//userName = "Greg101";
const fetchData = () => {
axios.get("https://api.npoint.io/70d6b9f336b117c7fa85").then((res) => {
console.log(res.data);


var checkExisting = res.data.filter(function(item) {
    if(item.Username == searchValue){
        console.log(item);
        Party(item);
        return "Success"
    }

});


});
};

return (
    <div className="GetUsersContainer">
    <input id="nameCheck" placeholder="Enter username..." onChange={(event) => { 
        setSearchValue(event.target.value);
      }}>
    
      </input>
      <button onClick={fetchData}>Load User Parties</button>
      <br></br>
      
            <div className="Results">
      <h4 id="results">User: {UserPartyList?.Username}</h4>
      {UserPartyList?.Partys.map((Party, index) => {
        return (
          <div key={index}>
            <h2>ID: {Party.PID}</h2>
            <h2>Name: {Party.PName}</h2>

            <hr />
          </div>
        );
      })}
      </div>
     

    </div>

)

}

// <p>Party List: {UserPartyList?.Partys}</p>

export default GetUsers;