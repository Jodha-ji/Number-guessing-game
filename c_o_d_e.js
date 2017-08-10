function guessing_game(){
	var random=Math.floor(Math.random()*100);
	var turns=1;
    
	while(1){
        var guess=prompt("Okay now, think a number smaller than 100, you win if we are on same number...");
        
		if(guess > 99 || guess <1)
	        alert("Number should be between 1 and 100, this turn won't be counted");
			turns--;
		else if(guess>random)
			alert("Sorry, the number is not that big..");
	    else if(guess<random)
            alert("Sorry, the number is bigger..");
        
		else{
			myBody=document.getElementsByTagName("body")[0];
		    myBody.style.background=gray;
			alert("Congratulations! You have guessed the number!\nIt took you " +turns+ " turns to guess the number!");
			break;
        }
        
		turns++;
	}
}