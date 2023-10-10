const Snakes_And_Ladders = (playersName) => {

    let currentPlayer = 0
    let rank = []

    rank.push("Ranking List")


    const board = []
    for(let i = 1; i <= 100; i++) {
        board.push(i)
    }

    const snake = (head, tail) => {
        head = head,
        tail = tail
    }
    const ladder = (start, end) => {
        start = start,
        end = end
    }

    const snakes = []
    const ladders = []

    //Adding snakes
    snakes.push(snake(28, 10))
    snakes.push(snake(37, 3))
    snakes.push(snake(48, 16))
    snakes.push(snake(75, 32))
    snakes.push(snake(94, 71))
    snakes.push(snake(96, 42))

    //Adding ladders
    ladders.push(ladder(4, 56))
    ladders.push(ladder(12, 50))
    ladders.push(ladder(14, 55))
    ladders.push(ladder(22, 58))
    ladders.push(ladder(41, 79))
    ladders.push(ladder(54, 88))

    const player = (name) => {
        name = name,
        position = 1
    }

    const players = []

    playersName.forEach(player => {
        players.push(player(player))
    });

    function diceRoll(){
        return Math.floor(Math.random() * 6) + 1
    }

    function isGameOver(){
        let count = 0
        players.forEach(player => {
            if(player.position === 100){
                count++
            }
        })
        return count === players.length - 1
    }

    function updatePosition(playerPosition, number){
        players[playerPosition].position += number
        if(players[playerPosition].position > 100){
            players[playerPosition].position -= number
            return
        }
        if(players[playerPosition].position === 100){
            rank.push(players[playerPosition].name)
            players.splice(playerPosition, 1)
            return
        }
        snakes.forEach(snake => {
            if(snake.head === players[playerPosition].position){
                players[playerPosition].position = snake.tail
            }
        })
        ladders.forEach(ladder => {
            if(ladder.start === players[playerPosition].position){
                players[playerPosition].position = ladder.end
            }
        })
    }

    function play(){
        if (isGameOver()) {
            return rank
        }
        let randomNumber = diceRoll()
        updatePosition(currentPlayer, randomNumber)
        currentPlayer = currentPlayer === players.length - 1 ? 0 : currentPlayer + 1
        return rank, players
    }
}