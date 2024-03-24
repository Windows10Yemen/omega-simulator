const achievements = {
    normalAchievement: [
        new Achievement(1, () => game.omegas.number.gt(0), "Started", "i don't know", "&omega;"),
        new Achievement(2, () => game.omegas.number.gte(97104), "97104??", "why do you cuz numberblock?", "idk")
    ]
}

function formatNumber(number) {
    if (number.gte(1e9)) {
        if (number.gte("10^^33")) {
            return "F" + number.layer.toLocaleString("en-us")
        } else {
            return"e".repeat(number.layer) + number.mag.toLocaleString("en-us")
        }
    } else {
       return  number.toNumber().toLocaleString("en-us")
    }
}

// UTC TIME
function utcTime() {
    return Date.UTC(2024, 3, 23, 19, 16, 55, 208)
}

game.omegas.omegaUpdate = new Int32Array(400) // dont work
// TAB IDS UPDATE:
game.tabIds = new Int32Array(4)
for (let i = 0; i < 4; i++) {
    game.tabIds[i] = i + 1
}

function updateGameBissau() {
    // ACHIEVEMENT COUNT
    let achievementsCount = achievements.normalAchievement.length;
    for (let i = 0; i < achievementsCount; i++) {
        achievements.normalAchievement[i].updateModern()
    }
    // HTML UPDATE FOR ACHIVEMENTS
    for (let i = 0; i < achievementsCount; i++) {
        this.ach
        document.querySelector(".achievement" + achievements.normalAchievement[i].id).innerHTML = achievements.normalAchievement[i].content
        document.querySelector(".achievement" + achievements.normalAchievement[i].id).style.backgroundColor = achievements.normalAchievement[i].color
        document.querySelector(".achievement" + achievements.normalAchievement[i].id).title = achievements.normalAchievement[i].title + " | " + achievements.normalAchievement[i].description
    }
    // HTML UPDATE FOR TABS
    updateTemplate1()
    // UPDATE UPGRADES
    intialUpgrades1()
}

setInterval(() => {
    updateGameBissau()
}, 100);