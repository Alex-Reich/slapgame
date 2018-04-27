// var tolerance = 100
// var targetName = "Dad"
var hits = 0
update()

function Target(name, tolerance) {
    this.name = name,
    this.tolerance = tolerance
}

var dad = new Target ("Dad", 100)

function bored() {
    dad.tolerance--
    hits++
    moodChange()
    update()
}

function call() {
    dad.tolerance -= 5
    hits++
    moodChange()
    update()
}

function dinner() {
    dad.tolerance -= 10
    hits++
    moodChange()
    update()
}

function update() {
    document.getElementById("targetName").innerText = dad.name
    document.getElementById("tolerance").innerText = dad.tolerance.toString();
    document.getElementById("hits").innerText = hits.toString();
}

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
    }
    update()
}

function takeNap() {
    dad.tolerance = 100
    hits = 0
    dad.name = "Dad"
    update()
}