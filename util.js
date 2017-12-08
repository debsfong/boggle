export const generateBoard = (gridSize = 5) => {
    let dice = shuffleDice();
    let grid = [];
    
    for (let i = 0; i < gridSize; i++) {
        grid.push([]);
        for(let j = 0; j < gridSize; j++) {
            let value = dice[i*5 + j][Math.floor(Math.random() * 6)].toUpperCase();
            if (value == "Q") {
                value = "Qu"
            }
            const tile = {value: value, pos: [i, j], selected: false, recent: false}
            grid[i].push(tile);
        }
    }
    return grid;
}
    
export const shuffleDice = () => {
    let dice = ["aaafrs", "aaeeee", "aafirs", "adennn", "aeeeem", 
                "aeegmu", "aegmnn", "afirsy", "bjkqxz", "ccenst", 
                "ceiilt", "ceilpt", "ceipst", "ddhnot", "dhhlor", 
                "dhlnor", "dhlnor", "eiiitt", "emottt", "ensssu", 
                "fiprsy", "gorrvw", "iprrry", "nootuw", "ooottu"]
    
    let currentIndex = dice.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        temporaryValue = dice[currentIndex];
        dice[currentIndex] = dice[randomIndex];
        dice[randomIndex] = temporaryValue;
    }

    return dice;
}

export const adjacentPos = (curPos, pos) => {
    if (curPos == null) {
        return true
    }
    
    let row = pos[0]
    let col = pos[1]
    
    if ( (Math.abs(curPos[0] - row) <= 1) && (Math.abs(curPos[1] - col) <= 1) ) {
        return true
    } else {
        return false
    }
}

export const getScore = (word) => {
    switch(true) {
        case (word.length < 3):
            return 0
            break;
        case (word.length < 5):
            return 1
            break;
        case (word.length < 6):
            return 2
            break;
        case (word.length < 7):
            return 3
            break;
        case (word.length < 8):
            return 5
            break;
        default:
            return 11
    }
}
