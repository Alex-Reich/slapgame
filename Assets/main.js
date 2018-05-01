// var tolerance = 100
// var targetName = "Dad"


//this should be on your dad object
var hits = 0

function Target(name, tolerance) {
    this.name = name
    this.tolerance = tolerance
    this.items = []
}

var dad = new Target("Dad", 100)


function item(itemName, modifier, description) {
    this.itemName = itemName
    this.modifier = modifier
    this.description = description
}

var items = {
    smartphone: new item("Smartphone", .5, "What? Did you say something?"),
    oddsmell: new item("OddSmell", 2, "Hold on, what's that smell?"),
    megaphone: new item("Megaphone", 5, "Volume to 11. 'Can you hear me now? Good.'")
}

//how could you combine these to just 'giveItem' *see below
function givePhone() {
    dad.items.push(items.smartphone)
}

function giveSmell() {
    dad.items.push(items.oddsmell)
}

function giveMegaphone() {
    dad.items.push(items.megaphone)
}

function addMods() {
    var totalMod = 0
for (var i=0; i<dad.items.length; i++) {
    var item = dad.items[i]
   totalMod += item.modifier
}
//this can be simplified to just if(totalMod) because with JavaScript 0 is false
if (totalMod == 0) {
    totalMod = 1
}
return totalMod
}

//how could you combine these three functions into one? Something like function annoy(type){  dad.tolerance -= dad.annoy[type] * addmods() ...}
function bored() {
    dad.tolerance -= 1*addMods()
    hits++
    moodChange()
    update()
}

function call() {
    dad.tolerance -= 5*addMods()
    hits++
    moodChange()
    update()
}

function dinner() {
    dad.tolerance -= 10*addMods()
    hits++
    moodChange()
    update()
}

function update() {
    document.getElementById("targetName").innerText = dad.name;
    document.getElementById("tolerance").innerText = dad.tolerance.toString();
    document.getElementById("hits").innerText = hits.toString();
}

// think of how we handled cat lady and perhaps handle this on the dad object for tierd annoyances
function moodChange() {
    if (dad.tolerance <= 75) {
        dad.name = "Annoyed Dad"
    }
    if (dad.tolerance <= 50) {
        dad.name = "Not Mad, Just Dissapointed Dad"
    }
    if (dad.tolerance <= 25) {
        dad.name = "Angry Dad"
    }
    if (dad.tolerance <= 0) {
        dad.name = "Rage Dad"
        alert("That's enough! You're grounded!")
    }
    update()
}

function takeNap() {
    dad.tolerance = 100
    hits = 0
    dad.name = "Dad"
    dad.items = []
    update()
}



update()