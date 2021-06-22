const button = document.getElementById("flip-btn");
const coin = document.querySelector("#coin");
const resetBtn = document.getElementById("reset-btn");

var heads = 0;
var tails = 0;

function deferFn(callback, ms) { // callbacks are related to async functions - forces callback function to be called after current function
    setTimeout(callback, ms); // forces animation to run - even twice in a row
  }
  

    button.addEventListener("click", function() {
        coin.setAttribute("class", "");
        const random = Math.random();
        if (random < 0.5) {
            deferFn(function() {
                coin.setAttribute('class',  "coin animate-heads");
                heads++;
                setTimeout(function(){
                        document.querySelector(".left-text").innerHTML = "Heads: "+heads;
                        }, 3000);
            }, 100);
        }
        else {
            deferFn(function() {
                    coin.setAttribute('class',  "coin animate-tails");
                    tails++;
                    setTimeout(function(){
                            document.querySelector(".right-text").innerHTML = "Tails: "+tails;
                            }, 3000);
                }, 100);
        }
    });



    resetBtn.addEventListener("click", function() {
        coin.setAttribute("class", "coin"); 
        heads = 0;
        tails = 0;
        document.querySelector(".left-text").innerHTML = "Heads: "+heads;
        document.querySelector(".right-text").innerHTML = "Tails: "+tails;
    });