const upgradesCount = 5
const game = {
    "numbers": {
        "getOne": function() {return 1},
        "getTwo": function() {return 2},
        "getThree": function() {return 3},
        "getFour": function() {return 4},
        "getFive": function() {return 5},
        "getSix": function() {return 6},
        "getSeven": function() {return 7},
        "getEight": function() {return 8},
        "getNine": function() {return 9},
        "getTen": function() {return 10},
        "getTwenty": function() {return 20},
        "getThirty": function() {return 30},
        "getFourty": function() {return 40},
        "getFifty": function() {return 50},
        "getHundred": function() {return 100},
        "getThousand": function() {return 1000},
        "getPowerTwo": function(num) {return Math.pow(2, num)},
        "getPowerTen": function(num) {return Math.pow(10, num)},
        "getPI": function() {return Math.PI},
        "getEuler": function() {return Math.E},
    },
    omegas: {
        number: new Decimal(0),
        omegaUpdate: null
    },
    tabIds: null,
    upgrades: {
        level: new Array(upgradesCount),
        cost: new Array(upgradesCount),
        amount: [new Decimal(0)],
        displayMultipler: ["x"]
    }
}