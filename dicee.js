 function throwdice()
{
  var n1=Math.random();
  n1=Math.floor(n1*6);
  var n2=Math.random();
  n2=Math.floor(n2*6);
  var diceimge=[];
  diceimge.push("images/dice1.png");
  diceimge.push("images/dice2.png");
  diceimge.push("images/dice3.png");
  diceimge.push("images/dice4.png");
  diceimge.push("images/dice5.png");
  diceimge.push("images/dice6.png");
  document.getElementsByClassName("img1")[0].setAttribute("src",diceimge[n1]);
  document.getElementsByClassName("img2")[0].setAttribute("src",diceimge[n2]);
  if(n1==n2)
  {
    document.getElementsByTagName("h3")[0].innerHTML="Draw";
  }
  else if(n1>n2)
  {
    document.getElementsByTagName("h3")[0].innerHTML="🚩 Player 1 Wins";
  }
  else
  {
    document.getElementsByTagName("h3")[0].innerHTML="Player 2 Wins 🚩";
  }
}
