const boxes = document.querySelectorAll('.boxes');
const iks = 'X';
const circle = 'O';
let arrayMark = [];
let arrayBoxes = [...boxes];
const winningArray = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

let   horizontal0 =  winningArray[0];
let   horizontal1 =  winningArray[1];
let   horizontal2 =  winningArray[2];
let   horizontal3 =  winningArray[3];
let   horizontal4 =  winningArray[4];
let   horizontal5 =  winningArray[5];
let   horizontal6 =  winningArray[6];
let   horizontal7 =  winningArray[7];




function checkBoxes(){

//for(let i=0;i<8;i++){
  let foreachmapa0 =   winningArray[0].map(e => arrayBoxes[e].innerText);
  let foreachmapa1 =   winningArray[1].map(e => arrayBoxes[e].innerText);
    let foreachmapa2 = winningArray[2].map(e => arrayBoxes[e].innerText);
    let foreachmapa3 = winningArray[3].map(e => arrayBoxes[e].innerText);
    let foreachmapa4 = winningArray[4].map(e => arrayBoxes[e].innerText);
    let foreachmapa5 = winningArray[5].map(e => arrayBoxes[e].innerText);
    let foreachmapa6 = winningArray[6].map(e => arrayBoxes[e].innerText);
    let foreachmapa7 = winningArray[7].map(e => arrayBoxes[e].innerText);
    
    //  }
let every0x =    foreachmapa0.every(a => a === iks);
let every0o =    foreachmapa0.every(a => a === circle);
let every1x =    foreachmapa1.every(a => a === iks);
let every1o =    foreachmapa1.every(a => a === circle);
let every2x =    foreachmapa2.every(a => a === iks);
let every2o =    foreachmapa2.every(a => a === circle);
let every3x =    foreachmapa3.every(a => a === iks);
let every3o =    foreachmapa3.every(a => a === circle);
let every4x =    foreachmapa4.every(a => a === iks);
let every4o =    foreachmapa4.every(a => a === circle);
let every5x =    foreachmapa5.every(a => a === iks);
let every5o =    foreachmapa5.every(a => a === circle);
let every6x =    foreachmapa6.every(a => a === iks);
let every6o =    foreachmapa6.every(a => a === circle);
let every7x =    foreachmapa7.every(a => a === iks);
let every7o =    foreachmapa7.every(a => a === circle);

  for( x=0;x<3;x++){


    //if(0,1,2 === test){

    //}

    let nr0 =  horizontal0[x];
    let nr1 =  horizontal1[x];
    let nr2 =  horizontal2[x];
    let nr3 =  horizontal3[x];
    let nr4 =  horizontal4[x];
    let nr5 =  horizontal5[x];
    let nr6 =  horizontal6[x];
    let nr7 =  horizontal7[x];


if(every0x || every0o){
  boxes[nr0].style.backgroundColor = 'red'
}else if(every1x || every1o){
  boxes[nr1].style.backgroundColor = 'red'
}
else if(every2x || every2o){
  boxes[nr2].style.backgroundColor = 'red'
}
else if(every3x || every3o){
  boxes[nr3].style.backgroundColor = 'red'
}
else if(every4x || every4o){
  boxes[nr4].style.backgroundColor = 'red'
}
else if(every5x || every5o){
  boxes[nr5].style.backgroundColor = 'red'
}
else if(every6x || every6o){
  boxes[nr6].style.backgroundColor = 'red'
}
else if(every7x || every7o){
  boxes[nr7].style.backgroundColor = 'red'
}
}

//}
}


boxes.forEach( e => {
    e.addEventListener('click', boxClick, {once:true})
        
    });

function boxClick(e){
  let myEelement = e; 
  let myTarget = e.target
 let targetId = myTarget.id
   
 if(arrayMark.length === 0){
 
   myTarget.innerText = iks;
   arrayMark.push(myTarget);
}else{
  myTarget.innerText = circle;
   arrayMark.push(myTarget);
   arrayMark = [];
   }
  checkBoxes()
  
};


 