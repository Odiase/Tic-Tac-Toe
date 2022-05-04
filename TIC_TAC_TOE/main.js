const start_button = document.getElementById("start-button");
const info_submit_button = document.querySelector(".player-info-submit");
const player_form = document.querySelector(".player-form");
let error_field = document.querySelector(".error");
const game_boxes = document.querySelectorAll(".game-box");
let status = document.querySelector(".status");

// [player info variables]

let player1_name = ""
let player1_avatar =""
let player2_name =""
let player2_avatar =""


// functions

function get_info(){
    player1_name = document.getElementById("player1-name").value
    player1_avatar = document.getElementById("player1-avatar").value
    player2_name = document.getElementById("player2-name").value
    player2_avatar = document.getElementById("player2-avatar").value

    // validate the players inputs

    if(player1_avatar != "X" && player1_avatar != "O"){
        error_field.textContent = player1_name + " You Have Entered a value that is neither 'X' nor 'O' "
        error_field.style.display = "block"
    }
    else if(player2_avatar != "X" && player2_avatar != "O"){
        error_field.textContent = player2_name + " You Have Entered a value that is neither 'X' nor 'O' "
        error_field.style.display = "block"
    }
    else{
        error_field.style.display = "none"
        start_game()
    }
}


function player1(){
    status.textContent = player1_name+" Your Turn"
    status.style.display = "block"

    // player one game plays

    for(let i = 0; i < game_boxes.length; i++){
        game_boxes[i].addEventListener("click",function(){
            this.textContent = player1_avatar
            if(check_winner() == true){

            }
            else{
                player2()
            } 
        })
    }

}


function player2(){
    status.textContent = player2_name+" Your Turn"
    status.style.display = "block"

    // player two game plays

    for(let i = 0; i < game_boxes.length; i++){
        game_boxes[i].addEventListener("click",function(){
            this.textContent = player2_avatar
            if(check_winner() == true){
                
            }else{
                player1()
            }
            
        })
    }

}


function check_winner(){
    /************************************************************Player One checks******************************************************************/

    //player 1 horizontal checks

    if(game_boxes[0].textContent == player1_avatar && game_boxes[1].textContent == player1_avatar && game_boxes[2].textContent == player1_avatar || game_boxes[3].textContent == player1_avatar && game_boxes[4].textContent == player1_avatar && game_boxes[5].textContent == player1_avatar || game_boxes[6].textContent == player1_avatar && game_boxes[7].textContent == player1_avatar && game_boxes[8].textContent == player1_avatar){
        status.textContent = player1_name + " Wins"
        return  true
    }

    // player1 vertical checks

    else if(game_boxes[0].textContent == player1_avatar && game_boxes[3].textContent == player1_avatar && game_boxes[6].textContent == player1_avatar || game_boxes[1].textContent == player1_avatar && game_boxes[4].textContent == player1_avatar && game_boxes[7].textContent == player1_avatar || game_boxes[2].textContent == player1_avatar && game_boxes[5].textContent == player1_avatar && game_boxes[8].textContent == player1_avatar){
        status.textContent = player1_name + " Wins"
        return  true
    }

    // diagonal checks

    else if(game_boxes[0].textContent == player1_avatar && game_boxes[4].textContent == player1_avatar && game_boxes[8].textContent == player1_avatar || game_boxes[2].textContent == player1_avatar && game_boxes[4].textContent == player1_avatar && game_boxes[6].textContent == player1_avatar){
        status.textContent = player1_name + " Wins"
        return  true
    }


    /************************************************************Player Two checks******************************************************************/

    //player 1 horizontal checks

    if(game_boxes[0].textContent == player2_avatar && game_boxes[1].textContent == player2_avatar && game_boxes[2].textContent == player2_avatar || game_boxes[3].textContent == player2_avatar && game_boxes[4].textContent == player2_avatar && game_boxes[5].textContent == player2_avatar || game_boxes[6].textContent == player2_avatar && game_boxes[7].textContent == player2_avatar && game_boxes[8].textContent == player2_avatar){
        status.textContent = player2_name + " Wins"
        return  true
    }

    // player2 vertical checks

    else if(game_boxes[0].textContent == player2_avatar && game_boxes[3].textContent == player2_avatar && game_boxes[6].textContent == player2_avatar || game_boxes[1].textContent == player2_avatar && game_boxes[4].textContent == player2_avatar && game_boxes[7].textContent == player2_avatar || game_boxes[2].textContent == player2_avatar && game_boxes[5].textContent == player2_avatar && game_boxes[8].textContent == player2_avatar){
        status.textContent = player2_name + " Wins"
        return  true
    }

    // diagonal checks

    else if(game_boxes[0].textContent == player2_avatar && game_boxes[4].textContent == player2_avatar && game_boxes[8].textContent == player2_avatar || game_boxes[2].textContent == player2_avatar && game_boxes[4].textContent == player2_avatar && game_boxes[6].textContent == player2_avatar){
        status.textContent = player2_name + " Wins"
        return  true
    }

    else{
        return false
    }

    
}



function start_game(){
    for(let i = 0; i < game_boxes.length; i++){
        game_boxes[i].textContent = ""
    }
    player_form.style.display = "none"
    player1()
}


// event listeners

start_button.addEventListener("click",function(){
    player_form.style.display = "block"
    start_button.style.display = "none"
})

info_submit_button.addEventListener("click",get_info)