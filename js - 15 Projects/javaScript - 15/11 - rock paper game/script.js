
let result_ref =  document.getElementById("result");

let [computer_score,Your_score] = [0,0]

let choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'rock': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
}


function checker(input){
    var choices = ["rock","paper","scissor"];
    var num = Math.floor(Math.random()*3);

    document.getElementById("comp_choice").
    innerHTML = ` computer choose <span>${choices[num]}</span>`

    document.getElementById("user_choice").
    innerHTML = 
    `you choose <span>${input.toUpperCase()}</span>`

    let computer_choice = choices[num];
    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.innerHTML = "YOU WIN";
            Your_score++
            break;
        case 'lose':
            result_ref.innerHTML = "YOU lose";
            computer_score++
            break;
        default:
            result_ref.innerHTML = "DRAW";
            break;


    }
    document.getElementById("computer_score").
    innerHTML = computer_score;
    document.getElementById("Your_score").
    innerHTML = Your_score;
}