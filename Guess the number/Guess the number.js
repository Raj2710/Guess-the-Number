var guess = Math.floor(Math.random()*100);
console.log(guess)
var attempt=10;
function response()
{
  var n = document.getElementById("in").value;
  attempt--;
  if(attempt!==0)
  {  
    if(n==guess)
    {
      document.getElementById("out").innerHTML="Congrats! You win";
      document.getElementById("atm").innerHTML="";
    }
    else if(n>guess){
      document.getElementById("out").innerHTML="Guess a smaller number";
      document.getElementById("atm").innerHTML="Attempts left:"+attempt;
    }
    else{
      document.getElementById("out").innerHTML="Guess a larger number";
      document.getElementById("atm").innerHTML="Attempts left:"+attempt;
    }
  }
  else
  {
    document.getElementById("out").innerHTML="Total attempts exceeded! Better Luck Next time!"
    document.getElementById("atm").innerHTML="Attempts left:"+attempt;
  }
}