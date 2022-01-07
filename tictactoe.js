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
        }
    }

    function mark(id) {
        let square = document.getElementById(id)
        square.innerHTML = "O" // De ejemplo la X, luego por cada jugador
    }

    return {create, mark}
})();

table.create()

const btns = document.querySelectorAll("square")

