import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import searchinggif from "./Assets/giphy.webp";
import suprisedpika from "./Assets/Ideas_Surprised_Pikachu_HD.webp";
import "./storageStyle.css";


function GetParty(props){
 console.log('loaded party func');
    const headers =  {
      authorization: 'token 6b931ceb-21fb-49fc-a5c0-9a84c4f6e656'
    }

  /*
  const data = [{
    "Fred001": {
      "PartyName": "Blue",
      "P1" : {
        "Name": "Ditto",
        "PokemonId": "001",
        "Moves" : ["Move1", "Move2"]
      },
      "P2" : {
        "Name": "Weedle",
        "PokemonId": "002",
        "Moves" : ["Move3", "Move4"]
      }
    }
    }];
  
    axios.post('https://jsonbin.org/me/parties',data, {
      headers: {
        authorization: 'token 6b931ceb-21fb-49fc-a5c0-9a84c4f6e656',
      }
    })
    .then(res => res.json()).then(res => {
      console.log(res);
    })
    .catch(function (error) {
      console.log("Response error: ",error);
    });
  
  */
  
  /*
    fetch('https://jsonbin.org/me/users', {
      headers
    }).then(res => res.json()).then(res => {
      console.log(res);
    });
  */

  
  
  
const [PartyId, setPartyId] = useState(props.id);
const [PartyData, setPartyData] = useState("");

axios.get(`https://jsonbin.org/me/parties/0/${PartyId}/`, {
    headers
  }).then((res) => {
  console.log("PArty loaded:", res.data);
  //setPartyData(res.data.PartyList)
  //setPartyError(""); 
  }).catch(function(e){
    console.log(e.response);
    if(e.response.status = "404"){
      //setPartyError(`Unable to find the user: ${searchValue} `);
    }
    });

  /*
  const UserPartyList = UserPartyListData?.map((data,id)=>{
    return <div key={id} data-partyid={data.PartyId}>
      <h4>{data.PartyName}</h4>
    </div>
  })
  */

  /*
  const createParty = () => {
    axios.get(`https://jsonbin.org/me/parties/0/${searchValue}/`, {
      headers
    }).catch(function (error) {
      setPartyError("");
      console.log("Failed to find, so will try create new", error.toJSON());
      let newUser = Object();
      newUser[searchValue] = ({"PartyList": []});
  
      
      // store the user in localStorage
      //setUser(`${searchValue}`);
      //localStorage.setItem("user", `${searchValue}`);   
  
      axios.patch('https://jsonbin.org/me/users/0',newUser, {
      headers: {
        authorization: 'token 6b931ceb-21fb-49fc-a5c0-9a84c4f6e656',
      }
    }).catch(function (error) {
      setPartyError(`Adding new user ${searchValue} failed` , error.toJSON())
    }
  ).then((res)=>{
    fetchData();
  })
    }).then((res) => {
  
    })
  }
  */

  return (
      <div className="GetParty">
        <div className="Results">
              <h3>Party Data</h3>
              
        </div>
      </div>
  
  )
  
  }
  
  
  export default GetParty;