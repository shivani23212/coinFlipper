const button = document.getElementById("flip-btn");
const coin = document.querySelector(".coin");
const resetBtn = document.getElementById("reset-btn");


    button.addEventListener("click", function() {
        const random = Math.random();
        if (random < 0.5) {
            coin.setAttribute("class", "coin animate-heads");
        }
        else {
            coin.setAttribute("class", "coin animate-tails");
        }
    });


    resetBtn.addEventListener("click", function() {
        coin.setAttribute("class", "coin");        
    });