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


$(document).ready(function() {
  $("#a-space").click(function(event) {
    event.preventDefault();
    if (aSpace == false) {
      if (player1 == true) {
        $("#a-space").text("X");
        arrayPlayer1.push("a");
        console.log(arrayPlayer1);
        aSpace = true;
        changeTurn();
      } else if (player2 == true) {
        $("#a-space").text("O");
        arrayPlayer2.push("a");
        aSpace = true;
        changeTurn();
      }
    }
  });

  $("#b-space").click(function(event) {
    event.preventDefault();
    if (bSpace == false) {
      if (player1 == true) {
        $("#b-space").text("X");
        arrayPlayer1.push("b");
        bSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#b-space").text("O");
        arrayPlayer2.push("b");
        bSpace = true;
        changeTurn();
      }
    }
  });

  $("#c-space").click(function(event) {
    event.preventDefault();
    if (cSpace == false) {
      if (player1 == true) {
        $("#c-space").text("X");
        arrayPlayer1.push("c");
        cSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#c-space").text("O");
        arrayPlayer2.push("c");
        cSpace = true;
        changeTurn();
      }
    }
  });

  $("#d-space").click(function(event) {
    event.preventDefault();
    if (dSpace == false) {
      if (player1 == true) {
        $("#d-space").text("X");
        arrayPlayer1.push("d");
        dSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#d-space").text("O");
        arrayPlayer2.push("d");
        dSpace = true;
        changeTurn();
      }
    }
  });

  $("#e-space").click(function(event) {
    event.preventDefault();
    if (eSpace == false) {
      if (player1 == true) {
        $("#e-space").text("X");
        arrayPlayer1.push("e");
        eSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#e-space").text("O");
        arrayPlayer2.push("e");
        eSpace = true;
        changeTurn();
      }
    }
  });

  $("#f-space").click(function(event) {
    event.preventDefault();
    if (fSpace == false) {
      if (player1 == true) {
        $("#f-space").text("X");
        arrayPlayer1.push("f");
        fSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#f-space").text("O");
        arrayPlayer2.push("f");
        fSpace = true;
        changeTurn();
      }
    }
  });

  $("#g-space").click(function(event) {
    event.preventDefault();
    if (gSpace == false) {
      if (player1 == true) {
        $("#g-space").text("X");
        arrayPlayer1.push("g");
        gSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#g-space").text("O");
        arrayPlayer2.push("g");
        gSpace = true;
        changeTurn();
      }
    }
  });

  $("#h-space").click(function(event) {
    event.preventDefault();
    if (hSpace == false) {
      if (player1 == true) {
        $("#h-space").text("X");
        arrayPlayer1.push("h");
        hSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#h-space").text("O");
        arrayPlayer2.push("h");
        hSpace = true;
        changeTurn();
      }
    }
  });

  $("#i-space").click(function(event) {
    event.preventDefault();
    if (iSpace == false) {
      if (player1 == true) {
        $("#i-space").text("X");
        arrayPlayer1.push("i");
        iSpace = true;
        console.log(arrayPlayer1);
        changeTurn();
      } else if (player2 == true) {
        $("#i-space").text("O");
        arrayPlayer2.push("i");
        iSpace = true;
        changeTurn();
      }
    }
  });

});
