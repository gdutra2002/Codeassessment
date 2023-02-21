function printHighscores() {
      // either get scores from localstorage or set to empty array
      var codeassess = JSON.parse(window.localStorage.getItem('codeassess')) || [];
    
      // sort highscores by score property in descending order
      codeassess.sort(function (a, b) {
        return b.score - a.score;
      });
    
      for (var i = 0; i < codeassess.length; i += 1) {
        // create li tag for each high score
        var liTag = document.createElement('li');
        liTag.textContent = codeassess[i].fullname + ' - ' + codeassess[i].score;
    
        // display on page
        var olEl = document.getElementById('codeassess');
        olEl.appendChild(liTag);
      }
    }
    
    function clearHighscores() {
      window.localStorage.removeItem('codeassess');
      window.location.reload();
    }
    
    document.getElementById('clear').onclick = clearHighscores;
    
    // run function when page loads
    printHighscores();
    