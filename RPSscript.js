function PlayRPS() {
  var choices = new Array("rock", "paper", "scissors");
  var computer_choice = choices[Math.floor(Math.random() * 3)];
  var user_choice = document.getElementById("userin").value;
  
  document.getElementById("computerChoice").innerHTML = "Computer: " + computer_choice;
  document.getElementById("playerChoice").innerHTML = "Player: " + user_choice;
  
  switch(user_choice) {
    case "rock":
	  if (computer_choice == "rock") { document.getElementById("Winner").innerHTML = "Its a Tie"; }
	  else if (computer_choice == "paper") { document.getElementById("Winner").innerHTML = "Computer Wins"; }
	  else if (computer_choice == "scissors") { document.getElementById("Winner").innerHTML = "Player Wins"; }
	  break;
	case "paper":
	  if (computer_choice == "paper") { document.getElementById("Winner").innerHTML = "Its a Tie"; }
	  else if (computer_choice == "scissors") { document.getElementById("Winner").innerHTML = "Computer Wins"; }
	  else if (computer_choice == "rock") { document.getElementById("Winner").innerHTML = "Player Wins"; }
	  break;
	case "scissors":
	  if (computer_choice == "scissors") { document.getElementById("Winner").innerHTML = "Its a Tie"; }
	  else if (computer_choice == "rock") { document.getElementById("Winner").innerHTML = "Computer Wins"; }
	  else if (computer_choice == "paper") { document.getElementById("Winner").innerHTML = "Player Wins"; }
	  break;
	default:
	  document.getElementById("computerChoice").innerHTML = "";
	  document.getElementById("playerChoice").innerHTML = "";
	  document.getElementById("Winner").innerHTML = 
	  "Please enter your answer correctly and in lowercase. (rock/paper/scissors)";
  }
}