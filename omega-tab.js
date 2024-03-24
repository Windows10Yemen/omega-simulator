const intialUpgrades1 = () => {
    game.upgrades.level[0] = 0
    game.upgrades.cost[0] = 1 + (game.upgrades.level[0]*0.096)
    game.upgrades.amount[0] = new Decimal(game.upgrades.level[0]).add(1)
}

const omegaTab = {
    template: () => {return "You have " + formatNumber(game.omegas.number) + " omegas.\n<h3>Upgrades:</h3><button onclick=\"omegaClicker()\">+1</button><button onclick=\"buyUpgrade.omega.multiplyupgrade()\">Multiply Upgrade | Level  " + game.upgrades.level[0] + " | Cost: " + formatNumber(new Decimal(10).pow(game.upgrades.cost[0])) + " | You've got " + game.upgrades.displayMultipler[0] + game.upgrades.amount[0]},
}

const buyUpgrade = {
    omega: {
        multiplyupgrade: () => {
            if (game.omegas.number.gte(game.upgrades.cost[0])) {
                new AlertNotification("BUYED!")
                game.omegas.number = game.omegas.number.sub(new Decimal(10).pow(game.upgrades.cost[0]))
            }
        }
    }
}

const omegaClicker = () => {
    game.omegas.number = game.omegas.number.add(1)
    //game.omegas.omegaUpdate.push(Math.ramdom * 2147483647)
}

// DON'T CHANGE. IF YOU CHANGE IT. OWNER WILL BE RAGE.
var className = []
className.push("omega-tab")
const updateTemplate1 = () => {
    document.querySelector("." + className[0]).innerHTML = omegaTab.template()
}