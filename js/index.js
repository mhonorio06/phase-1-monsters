const monsterCollection = document.getElementById("monster-container") 
const monsterForm = document.getElementById("monster-form")
let monsterList = []

fetch("http://localhost:3000/monsters")
.then(resp => resp.json())
.then(json => {
    monsterList = json
    renderMonsters()
})

function renderMonsters() {
    monsterCollection.innerHTML = " "
    monsterList.forEach(renderMonster);
}
function renderMonster(monster) {
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `<h2>${monster.name}</h2>
        <h4>Age:${monster.age}</h4>
        <p>Bio:${monster.description}</p>`
    
    monsterCollection.append(card)
}
function addMonster(event) {
    event.preventDefault()
    const form = event.target;
    const newMonster = {
    name: form.name.value,
    age:  form.age.value,
    description: form.description.value,
    };

fetch("http://localhost:3000/monsters", {
    method: "POST",
    header: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(newMonster)
    })
}

    

monsterForm.addEventListener("click", addMonster)

