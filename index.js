
//------------------------ Game Project---------------------------
//All right we have been learning a lot of things. Now it is time to create something fun.
// Do you know the game battleship? Yes? well, we are going to create something similar.
//Battleship is a war-themed game for two players in which the opponents try to guess the
// location of their opponent's warships and sink them.
//Players take turns calling out row (x) and column (y), those are coordinates (x,y)
// identify a cell that contains a ship.
// As we are creating our own version, all of our ships are located in random 
//cells of the gameBoard (each one in a cell). To make this possible you need to initialized 
//the player's gameBoard (4x4) with zeros and to create the random positions of the warships
// 4 different coordinates x and y (one random number for 'x' between 0-3, one random number
// for 'y' between 0-3) need to be generated to indicate that there is going to be a ship and 
//it is representated by a number 1 in the gameboard.
//On each turn, the player has to enter two numbers that identify a row (x) and column 
//(Y) of the opponent target grid. if the coordinate "hit" a ship (find a number 1 in the 
//gameBoard) the opponent has one less ship and an alert should be shown saying "you hit a 
//warship"
//the winner is the first player that eliminates all the four ships of the oponent (ships=0)
//In order to store data we want you to:
//create two Players objects (one for each player). The Player object has the following 
//properties: name (ask to the users) {string}, ships {number} (we are goin to play with 4)
// and gameBoard {number} (matrix 4x4) initialized with zeros
//so in general the game is a loop that takes a player turn and asks for the cordinates 
//for the oponent's ships. loop is over when one of the players has 0 ships.
//return value contains a string with the winner name


battleship = (board_dimension) => {
  var the_number  = board_dimension
  //this is a function to create empty game board
  function create_game_board(number){
    var game_board_list= [];
    for (var i = 0; i < number; i++){
      dummy_list = []
       for (var j = 0; j < number; j++){
         dummy_list.push(0)
       }
       game_board_list.push(dummy_list)
    }
    return game_board_list
  }
  //a function to get total ship amount on game_board
    function get_total_ship_amount(board,number){
      total_ships = 0
      for (var i = 0; i < number; i++){
        
         for (var j = 0; j < number; j++){
          total_ships += board[i][j]
         }
         
      }
      return total_ships
    }

    // Generate $ Ships with random values and into gameboard
    function fill_board_with_ships(game_board, number){
      dummy_list = game_board
    do
    {
      dummy_list[Math.floor(Math.random() * number)][Math.floor(Math.random() * number)] = 1
      
    }while( get_total_ship_amount(dummy_list,the_number) < number);
    return dummy_list
  }

    //function to check players shoot
    function shoot(board,x,y){
      if (board[x][y] == 1){
        alert("you hit the ship")
        board[x][y] = 0
      }else{
        alert("you missed bro")
      }
      return board
    }

  //create players emty borads
  emty_player_1_board = create_game_board(the_number)
  emty_player_2_board = create_game_board(the_number)
  console.log(emty_player_1_board)
  console.log(emty_player_2_board)
  console.log("sinan")
  console.log("cengiz")
  //fill boards with ships
  player_1_board = fill_board_with_ships(emty_player_1_board, the_number)
  player_2_board = fill_board_with_ships(emty_player_2_board, the_number)
  console.log(player_1_board)
  console.log(player_2_board)
  //craete player objects
  player_object ={
    name : "",
    ships: 0
  };
  //create players
  player_1 = player_object
  player_2 = player_object

  //get names from user
  player_1_name = prompt("Player 1 Enter Your Name:" )
  player_2_name = prompt("Player 2 Enter Your Name:" )

  //update players pbjects with name value and ships numbers
  player_1.name = player_1_name
  player_1.ships = get_total_ship_amount(player_1_board,the_number)
  player_2.name = player_2_name
  player_2.ships = get_total_ship_amount(player_2_board,the_number)
  
  //while loop runs until no players have 0 ship
  while ( get_total_ship_amount(player_1_board,the_number) > 0 && get_total_ship_amount(player_2_board,the_number) > 0){
        //player 1 turn
        alert("Player 1 turn")
        var x = prompt("Chose X Coordinate:" )
        var y = prompt("Choose Y Coordinate:" )
        player_2_board = shoot(player_2_board,x,y)
        if (get_total_ship_amount(player_1_board,the_number) == 0){
          alert(player_2_name + " winn the game")
          var winner = player_2_name
          break;
        }
        //player 2 turn
        alert("Player 2 turn")
        var x = prompt("Chose X Coordinate:" )
        var y = prompt("Choose Y Coordinate:" )
        player_1_board = shoot(player_1_board,x,y)
        if (get_total_ship_amount(player_2_board, the_number) == 0){
          alert(player_1_name + " winn the game")
          var winner = player_1_name
          break;
        }

  }

 return winner + "  You are the greatest player ever in the Wold"
}


const game = battleship(4)

const htmlTarget = document.getElementById('a')
htmlTarget.innerHTML = game
