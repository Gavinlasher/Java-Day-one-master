
let teamOneScore = 0
let teamTwoScore = 0
let players = []



function shoot(number, team) {
if(team == 34){
  teamOneScore += number
}
else{
  teamTwoScore += number

}
draw()
}

function reset(team){
  if(team == "team1"){
    teamOneScore = 0
  }
  else{
  teamTwoScore = 0
  }
  draw()
}
function draw(){
  let one = document.getElementById("teamOneScore")
  let two = document.getElementById("teamTwoScore")
  one.innerText = teamOneScore
  two.innerText = teamTwoScore
}
function addPlayer(event){
  event.preventDefault()
  let form = event.target
  let player = {
    name:form.name.value
}
  if(players.some(player => player.name == form.name.value)){
     alert("choose a differnt name")
     return
  }
  players.push(player)
  
  form.reset()
}


function savePlayer(){
  window.localStorage.setItem("name", JSON.stringify(players))
}
