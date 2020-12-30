const boxContainer = document.getElementById('boxContainer');
const boxes = document.querySelectorAll('.boxes');
const iks = 'X';
const circle = 'O';
let arrayMark = [];
let allArrayMark = [];
let arrayBoxes = [...boxes];

let boxesNew = arrayBoxes.filter(e => e.id == 'a')



function containerClick(){
  boxContainer.addEventListener('click', e=>{
	  myTarget = e.target;
   //arrayMark.push(myTarget);


/*
   if(myTarget === ''){
          if(myTarget === ''){
                  e.target.innerText = iks;
      }else{
        myTarget = circle;
      }
   }else{
        
   }
  
*/
      
   
 
 allArrayMark.push(myTarget);
if(arrayMark.length === 0){
 
   myTarget.innerText = iks;
   arrayMark.push(myTarget);
}else{
  myTarget.innerText = circle;
   arrayMark.push(myTarget);
   arrayMark = [];
   }

   
   let checkX = boxesNew.every(e => e.innerText === 'X');
   if(checkX){
    boxesNew.forEach(e=> e.style.backgroundColor = 'red')
   }
  // console.log(boxesNew)
   //console.log(checkX) 
//arrayMark.forEach(e =>  e.removeEventListener("click", containerClick));
/*
boxContainer.removeEventListener("click", containerClick,true);

	if(arrayMark.length === 0){
	arrayMark.push(myTarget);
   myTarget.innerText = iks;

	}else{
     myTarget.innerText = circle;
     arrayMark.push(myTarget);

  	//allBoxesArray.forEach((e) => e.removeEventListener("click", containerClick));
  
  	arrayMark = [];
  	//console.log(allBoxesArray)
	}
 
 */
});
}

containerClick();
//console.log(arrayMark)
/*


boxes.forEach(e => {
	console.log(number++)
	e.addEventListener('click',() =>{
console.log(e.textContent = number++)
	})
})
*/

/*
newImgDiv.forEach((e) => e.removeEventListener("click", clicker));


boxes.forEach( e => {
    e.addEventListener('click', ()=>{
        if(figureArray == iks){
            
            e.innerHTML = iks;
            figureArray = iks;
           // console.log(figureArray)
            //console.log(boxes)
        }else{
            e.innerHTML = circle;
            figureArray = [];
        }
    })
    });


boxes.forEach( e => {
e.addEventListener('click', ()=>{
    console.log(e)
    e.innerHTML = iks;
})
});


function addNr() {
    newImgDiv.forEach((e) => {
      const mixFotos = Math.floor(Math.random() * nrFotos.length);
      e.style.backgroundImage = `url(foto/${nrFotos[mixFotos]}.png)`;
      nrFotos.splice(mixFotos, 1);
    });
  }

  film.addEventListener('change',e =>{
filmValue = +e.target.value;
const saveSelect(e.target.selectedIndex, e.target.value);
addNewTicket()
});
  */
 