var z;
var click = 0;
var unclick = 0;
var a = "X";
var b = "O";
var turn = 0;
var i;
var arr = [];
var parr = [];
var total_click;

for(i=0; i<9; i++)
{
    arr[i] = 0;
    parr[i] =" ";
}
var arrylen = arr.length;


function myFunction() {
    var x = document.getElementById("two");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} 

function disableButton(){
   document.getElementById("button1").disabled = true;
}

function enableButton(){
    document.getElementById("button1").disabled = false;
}

function clicked(clicked_id){
    for(i = 0; i < 9; i++){
        if(clicked_id == i && arr[i] == 0 && wincheck() != true && winchekfor_O() != true)
        {
            z = playerTurn();
           
            document.getElementById(i).innerHTML= z;
            
            arr [i] = z;
            parr[i] = document.getElementById(i).innerHTML;

            if(parr[i]=="X")
            {
                parr[i] = document.getElementById(i).style.backgroundColor="lightcoral";     
            }
            else
            {
               parr[i] = document.getElementById(i).style.backgroundColor ="mediumorchid";
                
            }

            document.getElementById("a"+i).innerHTML= ("On "+(i) + "  position " +" : "+ parr[i]); 
            click_Check();
            if(z == 'X'){
                wincheck();
            } else {
                winchekfor_O();
            }       
        }
    }
}

function playerTurn(){
   if(turn == 0)
   { 
    turn = 1;
    return a;
}
else
{
    turn = 0;
    return b;
}
}

function click_Check(){
    for(i=0; i<arrylen; i++)
    {
        if(arr[i] == 0)
        {
            unclick++;
        }
        else
        {
            click++;
        }
    }
    document.getElementById("a9").innerHTML= ("Click :  "+ click +"<br>" + "Unclick :  "+  unclick);
    total_click = click;
    click = 0;
    unclick = 0;
}

function wincheck(){
    if(parr[0] == "lightcoral" && parr[1] == "lightcoral" && parr[2] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(parr[3] == "lightcoral" && parr[4] == "lightcoral" && parr[5] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(parr[6] == "lightcoral" && parr[7] == "lightcoral" && parr[8] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(parr[0] == "lightcoral" && parr[3] == "lightcoral" && parr[6] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(parr[1] == "lightcoral" && parr[4] == "lightcoral" && parr[7] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(parr[2] == "lightcoral" && parr[5] == "lightcoral" && parr[8] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(parr[0] == "lightcoral" && parr[4] == "lightcoral" && parr[8] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(parr[2] == "lightcoral" && parr[4] == "lightcoral" && parr[6] == "lightcoral")
    {
        alert("player lightcoral win!!");
        return true;
    }
    else if(total_click == 9 )
    { 
        alert("Tie Game!"); 

        return true;          
    }

}

function winchekfor_O(){

    if(parr[0] == "mediumorchid" && parr[1] == "mediumorchid" && parr[2] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
        return true;
    }
    else if(parr[3] == "mediumorchid" && parr[4] == "mediumorchid" && parr[5] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
        return true;
    }
    else if(parr[6] == "mediumorchid" && parr[7] == "mediumorchid" && parr[8] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
    }
    else if(parr[0] == "mediumorchid" && parr[3] == "mediumorchid" && parr[6] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
        return true;
    }
    else if(parr[1] == "mediumorchid" && parr[4] == "mediumorchid" && parr[7] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
        return true;
    }
    else if(parr[2] == "mediumorchid" && parr[5] == "mediumorchid" && parr[8] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
        return true;
    }
    else if(parr[0] == "mediumorchid" && parr[4] == "mediumorchid" && parr[8] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
        return true;
    }
    else if(parr[2] == "mediumorchid" && parr[4] == "mediumorchid" && parr[6] == "mediumorchid")
    {
        alert("player mediumorchid win!!");
        return true;
    }
    else if(total_click == 9 )
    { 
        alert("Tie Game!"); 

        return true;          
    }
}

function computerWinPossibility(){
    if(parr[0] == "O" && parr[1] == "O" && parr[2] == " " && turn == 0)
    {
        arrp[2] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[1] == "O" && parr[2] == "O" && parr[0] == " " && turn == 0)
    {
        arrp[0] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[3] == "O" && parr[4] == "O" && parr[5] == " " && turn == 0)
    {
        arrp[5] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[4] == "O" && parr[5] == "O" && parr[3] == " " && turn == 0)
    {
        arrp[3] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[6] == "O" && parr[7] == "O" && parr[8] == " " && turn == 0)
    {
        arrp[8] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[7] == "O" && parr[8] == "O" && parr[6] == " " && turn == 0)
    {
        arrp[6] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[4] == "O" && parr[8] == " " && turn == 0)
    {
        arrp[8] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[4] == "O" && parr[8] == "O" && parr[0] == " " && turn == 0)
    {
        arrp[0] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[2] == "O" && parr[4] == "O" && parr[6] == " " && turn == 0)
    {
        arrp[6] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[6] == "O" && parr[4] == "O" && parr[2] == " " && turn == 0)
    {
        arrp[2] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[2] == "O" && parr[1] == " " && turn == 0)
    {
        arrp[1] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[3] == "O" && parr[5] == "O" && parr[4] == " " && turn == 0)
    {
        arrp[4] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[6] == "O" && parr[8] == "O" && parr[7] == " " && turn == 0)
    {
        arrp[7] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[6] == "O" && parr[3] == " " && turn == 0)
    {
        arrp[3] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[1] == "O" && parr[7] == "O" && parr[4] == " " && turn == 0)
    {
        arrp[4] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[2] == "O" && parr[8] == "O" && parr[5] == " " && turn == 0)
    {
        arrp[5] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[4] == "O" && parr[8] == " " && turn == 0)
    {
        arrp[8] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[3] == "O" && parr[6] == "O" && parr[0] == " " && turn == 0)
    {
        arrp[0] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[1] == "O" && parr[2] == " " && turn == 0)
    {
        arrp[2] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[1] == "O" && parr[2] == " " && turn == 0)
    {
        arrp[2] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[1] == "O" && parr[2] == " " && turn == 0)
    {
        arrp[2] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[1] == "O" && parr[2] == " " && turn == 0)
    {
        arrp[2] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
    else if(parr[0] == "O" && parr[1] == "O" && parr[2] == " " && turn == 0)
    {
        arrp[2] = document.getElementById("2").innerHTML = "O";
        turn = 1;
    }
}

function playAgain(){
    for(i=0; i<9; i++)
    {
        arr[i] = 0;
        parr[i] =" ";          
        click = 0;
        unclick = 0;  
        total_click = 0;  
        document.getElementById("a9").innerHTML= ("Click :  "+ click +"<br>" + "Unclick :  "+  unclick);
        document.getElementById("a"+i).innerHTML= ("On "+(i) + "  position " +" : "+ parr[i]);
        parr[i] = document.getElementById(i).style.backgroundColor="white";
        document.getElementById("b"+i).innerHTML = " ";
        document.getElementById(i).innerHTML= " ";

    }
}

