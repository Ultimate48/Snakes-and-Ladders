const Sanke_And_Ladders = (players) => {

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

    let player = (name) => {
        name = name,
        position = 1
    }

    const players = []

    players.forEach(player => {
        players.push(player(player))
    });

}