document.getElementById("button1").addEventListener("click", searchByTeam);


function toUpperCas(str) {
 return  str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1) ).join(" ");
}


function searchByTeam() {




var team_input = document.getElementById("team-search").value;
var team = toUpperCas(team_input);


  let link ='https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+ team;

fetch(link)
.then(function(response) {
return response.json();
})
.then(function(data) {

  let arr = data.player;

let newArr = arr.filter(player => player.strTeam === team).map(player =>{
    return {playerInfo: player.strPlayer, playerImg: player.strCutout}});

let object = {};

newArr.map( element => {
  object = element;


  var row1 = document.getElementById('myTable').insertRow(0);
  var x = row1.insertCell(0);
  var y = row1.insertCell(1);
  if(object.playerImg !== null)  {
  x.innerHTML = "<img id=\"resize\" src=\""+object.playerImg+"\">";
}
else {
  x.innerHTML = "<img id=\"resize\" src=\"../images/football_player.jpg\">";
}
  y.innerHTML = object.playerInfo;



});


})
.catch(function(error) {
console.log(error);
})


};



// function(){ alert("Hello World!"); }

document.getElementById("button2").addEventListener("click", searchByPlayer);

function searchByPlayer() {

  var player_input = document.getElementById("player-search").value;
  var playerName = toUpperCas(player_input);

  let link ='https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p='+ playerName;

fetch(link)
.then(function(response) {
return response.json();
})
.then(function(data) {

let arr = data.player;


 let playerObject = arr.filter(player => player.strPlayer === playerName).reduce((acc, player, index, arr) =>
  {acc = player;
     return acc;}, {});


if(playerObject.strPlayer !== null) {
document.getElementById("p-name").innerText = playerObject.strPlayer;
}

if( playerObject.idPlayer !== null) {
document.getElementById("p-num").innerText = playerObject.idPlayer;
}

if(playerObject.strTeam !== null) {
document.getElementById("p-teamName").innerText = playerObject.strTeam;
}

if(playerObject.strWage !== null) {
document.getElementById("p-price").innerText = playerObject.strWage;
}

if(playerObject.strNationality !== null) {
document.getElementById("p-nationality").innerText = playerObject.strNationality;
}


document.getElementById("p-img1").src = playerObject.strThumb;



})
.catch(function(error) {
console.log(error);
})
};
