// Object to keep track of scores
      const score = { win: 0, lose: 0, tie: 0 };

      // Function to update the score display on the page
      // PlayerMove & computerMove are optional (so it can show moves too)
      function updateScore(PlayerMove, computerMove) {
        document.querySelector('.js-score').innerText = 
          `Player move: ${PlayerMove || '-'} | Computer move: ${computerMove || '-'} 
Player: ${score.win} | Computer: ${score.lose} | Tie: ${score.tie}`;
      }

      // Function to reset score back to zero
      function resetScore() {
        score.win = 0;
        score.lose = 0;
        score.tie = 0;
        updateScore(null, null);  // refresh display
      }

      // Main game function, runs when player clicks Rock/Paper/Scissors
      function Check(PlayerMove) {
        let computerMove;

        // Random computer choice using Math.random()
        let computer_choice = Math.random();
        if (computer_choice < 1 / 3) {
          computerMove = "Rock";
        } else if (computer_choice < 2 / 3) {
          computerMove = "Paper";
        } else {
          computerMove = "Scissors";
        }

        // Decide the winner
        if (PlayerMove === computerMove) {
          // Case: tie
          score.tie++;
        } else if (
          (PlayerMove === "Rock" && computerMove === "Scissors") ||
          (PlayerMove === "Paper" && computerMove === "Rock") ||
          (PlayerMove === "Scissors" && computerMove === "Paper")
        ) {
          // Case: player wins
          score.win++;
        } else {
          // Case: computer wins
          score.lose++;
        }

        // Update the score and moves on screen
        updateScore(PlayerMove, computerMove);
      }

      // Initialize display when page loads
      updateScore(null, null);