import axios from "axios";
import { useState } from "react";

//https://www.npoint.io/docs/70d6b9f336b117c7fa85

function GetUsers(){
 
  const headers =  {
    authorization: 'token 6b931ceb-21fb-49fc-a5c0-9a84c4f6e656',
  }

/*
  const data = [{
  "Fred": {
    "PartyList": [
      {
        "PartyName": "Blue",
        "PartyId": "Fred001"
      },
      {
        "PartyName": "Red",
        "PartyId": "Fred002"
      }
    ]
  },
  "Sad_Dodge": {
    "PartyList": [
      {
        "PartyName": "Blue",
        "PartyId": "Sad_Dodge001"
      },
      {
        "PartyName": "Red",
        "PartyId": "Sad_Dodge002"
      }
    ]
  }
  }];




  axios.post('https://jsonbin.org/me/users',data, {
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



  fetch('https://jsonbin.org/me/users', {
    headers
  }).then(res => res.json()).then(res => {
    //console.log(res);
  });

const [UserPartyListData, Party] = useState(null);
const [searchValue, setSearchValue] = useState("");
const fetchData = () => {
axios.get(`https://jsonbin.org/me/users/0/${searchValue}/`, {
  headers
}).then((res) => {
console.log(res.data.PartyList);
Party(res.data.PartyList)
});
};

const UserPartyList = UserPartyListData?.map((data,id)=>{
  return <div key={id} data-partyid={data.PartyId}>
    <h4>{data.PartyName}</h4>
  </div>
})

const createUser = () => {
  axios.get(`https://jsonbin.org/me/users/0/${searchValue}/`, {
    headers
  }).catch(function (error) {
    console.log("Failed to find, so will try create new", error.toJSON());
    let newUser = Object();
    newUser[searchValue] = ({"PartyList": []});
    axios.patch('https://jsonbin.org/me/users/0',newUser, {
    headers: {
      authorization: 'token 6b931ceb-21fb-49fc-a5c0-9a84c4f6e656',
    }
  }).catch(function (error) {
console.log("adding new user failed" , error.toJSON())
  }
)
  }).then((res) => {

  })
}

return (
    <div className="GetUsersContainer">
    <input id="nameCheck" placeholder="Enter username..." onChange={(event) => { 
        setSearchValue(event.target.value);
      }}>
    
      </input>
      <button onClick={fetchData}>Load User Parties</button><button id="createParty" onClick={createUser}>Click here to create</button>
      <br></br>
      
            <div className="Results">
            <h3> Party List</h3>
            {UserPartyList?.length > 0 && UserPartyList}
              {UserPartyList?.length < 1 && 
              <p> You've not got any parties yet</p>}
      </div>
    </div>

)

}

// <p>Party List: {UserPartyList?.Partys}</p>

export default GetUsers;