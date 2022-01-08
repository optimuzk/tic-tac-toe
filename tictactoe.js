const gameSpace = document.getElementById("gameSpace")

let tableValues = ["","","","","","","","",""]

var table = (function(){
    
    function create() {
        for (let i = 0; i < tableValues.length; i++){
            let square = document.createElement("button")
            square.className = "square"
            square.id = i
            square.setAttribute('onclick', 'table.mark('+i+')')
            square.innerHTML = tableValues[i]
            gameSpace.appendChild(square)
            player = "X"
        }
    }

    function mark(id) {
        let square = document.getElementById(id)
        if(tableValues[id] == ""){
            square.innerHTML = player
            tableValues[id] = player
            checkWinnner()
            changePlayer()
            nowPlaying()
        }
    }

    function changePlayer(){
        if(player == "X"){
            player = "O"
        }
        else player = "X"
    }

    function nowPlaying(){
        let playerOn = document.getElementById("playerOn")
        playerOn.innerHTML = ""
        playerOn.innerHTML = "Player "+player+" turn"
    }

    function checkWinnner(){
        // Horizontal line
        if(tableValues[0] == tableValues[1] && tableValues[1] == tableValues[2] && tableValues[0] != "") announceWinner(tableValues[0])
        if(tableValues[3] == tableValues[4] && tableValues[4] == tableValues[5] && tableValues[3] != "") announceWinner(tableValues[3])
        if(tableValues[6] == tableValues[7] && tableValues[7] == tableValues[8] && tableValues[6] != "") announceWinner(tableValues[6])
        // Vertical line
        if(tableValues[0] == tableValues[3] && tableValues[3] == tableValues[6] && tableValues[6] != "") announceWinner(tableValues[0])
        if(tableValues[1] == tableValues[4] && tableValues[4] == tableValues[7] && tableValues[7] != "") announceWinner(tableValues[1])
        if(tableValues[2] == tableValues[5] && tableValues[5] == tableValues[8] && tableValues[8] != "") announceWinner(tableValues[2])
        // Diagonal line
        if(tableValues[0] == tableValues[4] && tableValues[4] == tableValues[8] && tableValues[8] != "") announceWinner(tableValues[0])
        if(tableValues[2] == tableValues[4] && tableValues[4] == tableValues[6] && tableValues[6] != "") announceWinner(tableValues[2])
        // Tie
        
    }

    function announceWinner(symbol){
        // Creating message and button for restart game
        let endGame = document.getElementById("endGame")
        let winner = document.createElement("div")
        winner.className = "messages"
        winner.innerHTML = "Player "+symbol+" wins!"
        endGame.appendChild(winner)

        let restartBtn = document.createElement("button")
        restartBtn.innerHTML = "Restart"
        restartBtn.setAttribute('onclick', 'table.restart()')
        endGame.appendChild(restartBtn)

        // Disabled onclick from squares cause game is over
        let squares = document.querySelectorAll('button.square')
        console.log(squares)
        squares.forEach(element => {
            element.removeAttribute("onclick");
        });
    }

    function restart(){
        let endGame = document.getElementById("endGame")
        endGame.innerHTML = ""
        gameSpace.innerHTML = ""
        for(let i = 0; i<tableValues.length; i++){
            tableValues[i] = ""
        }
        create()
        nowPlaying()
    }

    return {create, mark, restart}
})();

table.create()

const btns = document.querySelectorAll("square")
