class Bolders {
    constructor(dimensions = [5, 15], position = [0, 4], speed = 1) {
        //dimensions [width,height]
        this.dimensions = dimensions
        this.word = this.createArray(dimensions)
        this.speed = speed * 5000
        this.players = {}
        this.startPlay()
    }

    startPlay() {
        setInterval(() => { this.play() }, this.speed)
    }



    play() {
        console.clear()
        const newLine = new Array(this.dimensions[0]);
        this.word.unshift(this.createObstacles(newLine))
        this.word.pop()
        //chec new state and see if i colide
        // do tomorrow 
        console.log(this.word)
    }

    createArray(dimensions) {
        var matrix = [];
        for (var i = 0; i < dimensions[1]; i++) {
            matrix[i] = new Array(dimensions[0]);
            this.createObstacles(matrix[i])
        }
        return matrix
    }

    createObstacles(array) {
        for (let i = 0; i < array.length; i++) {
            const rand = Math.random()
            if (rand > 0.5) {
                array[i] = 0
                continue
            }
            array[i] = 1
        }
        return array

    }


    addPLayer(player) {
        this.players[player] = { position: [0, this.getRandomizer(0, this.dimensions[0])], color: '#' + Math.floor(Math.random() * 16777215).toString(16) }
    }

    playCMD(CMD, player) {
        const getPos = this.players[player].position[0]

        if (CMD === 1) {
            ///going  to the left
            if (getPos > 0) {
                this.players[player].position[0] = getPos - 1
            }
        }
        else {
            // going to th right
            if (getPos < this.dimensions[0]) {
                this.players[player].position[0] = getPos + 1
            }
        }
    }

    getRandomizer(bottom, top) {
        return function () {
            return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
        }
    }
}


class Controler {
    constructor(name = "Computer", game) {
        this.name = name
        this.LEFT = 1
        this.RIGHT = 0
        this.game = game
        this.game.addPLayer(this.name)
    }

    left() {
        this.game.playCMD(this.LEFT, this.name)
    }

    right() {
        this.game.playCMD(this.RIGHT, this.name)
    }

}

const bolders = new Bolders()
const machine = new Controler()