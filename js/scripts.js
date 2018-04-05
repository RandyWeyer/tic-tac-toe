var player1 = true;
var player2 = false;
var arrayPlayer1 = [];
var arrayPlayer2 = [];
var aSpace = false;
var bSpace = false;
var cSpace = false;
var dSpace = false;
var eSpace = false;
var fSpace = false;
var gSpace = false;
var hSpace = false;
var iSpace = false;
var inputCell = "";
var grabCharacter = "";
// var cellName = "";

function checkWin() {
  if (player1==true) {
        if (arrayPlayer1.includes("a") && arrayPlayer1.includes("b") && arrayPlayer1.includes("c")) {
          alert("Player 1 Wins")
        } else if (arrayPlayer1.includes("d") && arrayPlayer1.includes("e") && arrayPlayer1.includes("f")) {
          alert("Player 1 Wins")
        } else if (arrayPlayer1.includes("g") && arrayPlayer1.includes("h") && arrayPlayer1.includes("i")) {
          alert("Player 1 Wins")
        } else if (arrayPlayer1.includes("a") && arrayPlayer1.includes("d") && arrayPlayer1.includes("g")) {
          alert("Player 1 Wins")
        } else if (arrayPlayer1.includes("b") && arrayPlayer1.includes("e") && arrayPlayer1.includes("h")) {
          alert("Player 1 Wins")
        } else if (arrayPlayer1.includes("c") && arrayPlayer1.includes("f") && arrayPlayer1.includes("i")) {
          alert("Player 1 Wins")
        } else if (arrayPlayer1.includes("a") && arrayPlayer1.includes("e") && arrayPlayer1.includes("i")) {
          alert("Player 1 Wins")
        } else if (arrayPlayer1.includes("c") && arrayPlayer1.includes("e") && arrayPlayer1.includes("g")) {
          alert("Player 1 Wins")
        }
  } else if (player2==true) {
        if (arrayPlayer2.includes("a") && arrayPlayer2.includes("b") && arrayPlayer2.includes("c")) {
          alert("Player 2 Wins")
        } else if (arrayPlayer2.includes("d") && arrayPlayer2.includes("e") && arrayPlayer2.includes("f")) {
          alert("Player 2 Wins")
        } else if (arrayPlayer2.includes("g") && arrayPlayer2.includes("h") && arrayPlayer2.includes("i")) {
          alert("Player 2 Wins")
        } else if (arrayPlayer2.includes("a") && arrayPlayer2.includes("d") && arrayPlayer2.includes("g")) {
          alert("Player 2 Wins")
        } else if (arrayPlayer2.includes("b") && arrayPlayer2.includes("e") && arrayPlayer2.includes("h")) {
          alert("Player 2 Wins")
        } else if (arrayPlayer2.includes("c") && arrayPlayer2.includes("f") && arrayPlayer2.includes("i")) {
          alert("Player 2 Wins")
        } else if (arrayPlayer2.includes("a") && arrayPlayer2.includes("e") && arrayPlayer2.includes("i")) {
          alert("Player 2 Wins")
        } else if (arrayPlayer2.includes("c") && arrayPlayer2.includes("e") && arrayPlayer2.includes("g")) {
          alert("Player 2 Wins")
        }
  }
}

function changeTurn() {
  checkWin();
  player1 = !player1;
  player2 = !player2;
}

function markCell(inputCharacter) {
  var cellName = inputCharacter + "Space";
  parsedCellName = eval(cellName);
  if (parsedCellName == false) {
    if (player1 == true) {
      $("#" + inputCharacter + "-space").text("X");
      arrayPlayer1.push(inputCharacter);
      parsedCellName = true;
      changeTurn();
    } else if (player2 == true) {
      $("#" + inputCharacter + "-space").text("O");
      arrayPlayer2.push(inputCharacter);
      parsedCellName = true;
      changeTurn();

    }
  }
}

$(document).ready(function() {
  $("#a-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

  $("#b-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);

  });

  $("#c-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

  $("#d-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

  $("#e-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

  $("#f-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

  $("#g-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

  $("#h-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

  $("#i-space").click(function(event) {
    event.preventDefault();
    inputCell = $(this).attr("id");
    grabCharacter = inputCell[0];
    markCell(grabCharacter);
  });

});
