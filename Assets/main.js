var tolerance = 100
var targetName = "Dad"
var hits = 0
update()

function bored() {
    tolerance--
    hits++
    moodChange()
    update()
}

function call() {
    tolerance -= 5
    hits++
    moodChange()
    update()
}

function dinner() {
    tolerance -= 10
    hits++
    moodChange()
    update()
}

function update() {
    document.getElementById("tolerance").innerText = tolerance.toString();
    document.getElementById("hits").innerText = hits.toString();
    document.getElementById("targetName").innerText = targetName
}

function moodChange() {
    if (tolerance <= 75) {
        targetName = "Annoyed Dad"
    }
    if (tolerance <= 50) {
        targetName = "Not Mad, Just Dissapointed Dad"
    }
    if (tolerance <= 25) {
        targetName = "Angry Dad"
    }
    if (tolerance <= 0) {
        targetName = "Rage Dad"
    }
    update()
}

function takeNap() {
    tolerance = 100
    hits = 0
    targetName = "Dad"
    update()
}