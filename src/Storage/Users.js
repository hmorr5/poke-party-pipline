import Axios from "axios";
import axios from "axios";
import { useEffect } from "react";
import { useInsertionEffect } from "react";
import { useState } from "react";

//https://www.npoint.io/docs/70d6b9f336b117c7fa85

function GetUsers(userName){
const [UserPartyList, Party] = useState("");
//userName = "Greg101";
useEffect(() => {
axios.get("https://api.npoint.io/70d6b9f336b117c7fa85").then((res) => {
//console.log(res.data);

var results = res.data.filter(function(item) {
    console.log(userName);
    return item.Username == userName;
});

if(results.length > 0){
    Party(res.data.Parties);
    console.log(UserPartyList);
    return UserPartyList;
} else{
    console.log("No User Found");
    return "No User Found";
}

});
}, []);


}

export default GetUsers;