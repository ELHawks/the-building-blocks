function Start(){
console.log("Start() started");
document.getElementById("startButton").disabled = true;
document.getElementById("stopButton").disabled = false;
document.getElementById("data").rows["seconds"].innerHTML = "Reading Data....";
index = 0;
timer = setInterval(updateDisplay, time_interval );
}

function Stop(){
    console.log("Stop() started");
   clearInterval(timer);
document.getElementById("startButton").disabled = false;
document.getElementById("stopButton").disabled = true;
    }

// for this assignment count down from 50 to 0 by 5's 
function blastOffTimer(){
  console.log("blastOffTimer() started");
    var currTime = 50;
    var i = 5
    var timeMulti =2500
    document.getElementById("blastOffText").innerHTML = currTime;
    currTime= currTime -i;
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 2*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 3*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 4*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 5*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 6*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 7*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 8*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = currTime;
        currTime= currTime -i;
    }, 9*timeMulti);
    setTimeout(function(){
        console.log(currTime);
        document.getElementById("blastOffText").innerHTML = "Blastoff!!!";
        currTime= currTime -i;
    }, 10*timeMulti); 
}
function betterCoutDown(){
    console.log("testCountDown() started");
    currTime=50
    for(var i =0; i<10; i++){
        console.log(i);
        setTimeout(function(){
            document,getElementById("blastOffText").innerHTML=currTime;
            if(currTime == 0){
                document.getElementById("blastOffText").innerHTML ="BlastOff" 
            }
            currTime = currTime-5;
        },5000*i);
    }
}
function playCraps(){
    console.log("playCraps() started");
    var Die1= Math.ceil(6 * Math.random());
    var Die2= Math.ceil(6 * Math.random());
    var Sum = Die1 + Die2;
    document.getElementById("Die1results").innerHTML= Die1;
    document.getElementById("Die2results").innerHTML= Die2;
    document.getElementById("Sumresults").innerHTML= Sum;
    if(Sum ==7 || Sum ==11){
        document.getElementById("Crapsresults").innerHTML= "Craps, you Lose!!!";
    }else{
        document.getElementById("Crapsresults").innerHTML= "Tie please play again";
    }
}
// comments for the following 

// the function class is what the object is going to do 
function play() {
    // this is the first dice that gets multiplied by 6 to make the dice have 6 sides
    //it also takes a number and multiplies a number by 6 in ordr to be able to get a number
 // this is the first varable. A varable is an object at which the function feature is goint to tell it what it is going to do  
    var die1 =Math.ceil(Math.random()*6);
    
    // this is the second varable or the second dice each one is getting multiplied by 6 in order to get a number that is a multiple of 6
    var die2 =Math.ceil(Math.random()*6);
    // this is the first dice plus the second one in order to be able to get the sum.To get the sum each of the varables must first be multiples by 6 then added together 
    var sum = die1+die2
    //this selection is what the user sees on the screen when they are playing the game. The user will see Dice1 pluse Dice 2 in order to be able to get the sum which the 2 dies are added together.
  // die equalls what ever the number that has been multiplies by 6.
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    //this is a statement that says if the sum of the 2 dice equals 7 or 11 then the screen with say you lose
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    document.write("<br/>")
    }
    // this is a else statement which means if you have any doubles the person playing the game of craps will win the game. 
   //this statement also says that if the If statement above comes back false then cthis statement will be true.
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    
    }
    function playStation(){
        console.log ("playStation() started");
        mySound=new sound("us-lab-background.mp3");
        mySound.play();
        
        }
        function playTheBells(){
            console.log("playTheBells() started");
            ACDCsound= new sound("AcDc - Hells Bells.mp3")
            ACDCsound.play();
        }

    function sound(srcFile){
        this.sound = document.createElement("audio");
        this.sound.src = srcFile;
        this.sound.setAttribute("preload", "audio");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display ="none";
        document.body.appendChild(this.sound);
        this.play=function(){
            this.sound.play();
        }
        this.stop = function(){
            this.sound.pause();
        }
    }
    