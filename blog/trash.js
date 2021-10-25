// const numberOfChild = 5;
// const nameOfPArtner = "Dua Lipa";
// const geoLocation = "Switzerland";
// const jobTitle = "singer";
// const yourFortune = `you will be a ${jobTitle} in ${geoLocation}, and married to ${nameOfPArtner} with ${numberOfChild} kids`;
// console.log(yourFortune);
// const birthOfYear=1997;
// const futureYear=[2026,2030,2040,2060];
// function randomYear(futureYear) {
//     return futureYear[Math.floor(Math.random() * futureYear.length)];
//   }
// let randomY= randomYear(futureYear);
// console,console.log( randomY-birthOfYear);
//  let minNubmer = 1;
//  let maxNumber = 100;
//  let foundNumber = (maxNumber - minNubmer) <  1;
//  while(!foundNumber){
//          let middle =Math.floor((maxNumber + minNubmer)/2);     let answer = prompt(`is your number greater than ${middle}? Y or N`);
//     if(answer.toLocaleLowerCase() === `y`){
//         minNubmer = middle+1;
//     }else{
//         maxNumber = middle;    }
//      foundNumber = maxNumber - minNubmer < 1;
//  }
//  console.log(`your number is ${maxNumber}.`);
//  const dayOfWeekInEng = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
//  const dayOfWeekInDeu = ["montag","dienstag","mittwoch","donnerstag","freitag","samstag","sonntag"];
//  let userInput = prompt("please enter a day of week:");
//  if(dayOfWeekInEng.includes(userInput)){
//      let find = dayOfWeekInEng.indexOf(userInput);
//  console.log(dayOfWeekInDeu[find]);
// }
// const dayOfWeekInDeu = ["montag","dienstag","mittwoch","donnerstag","freitag","samstag","sonntag"];
//  let userInput = prompt("please enter a day of week:");
//  switch(userInput){
//      case "monday":
//      console.log(dayOfWeekInDeu[0]);
//      break;
//      case "friday":
//      console.log(dayOfWeekInDeu[4]);
//      break;
//  }
// let data = prompt(`enter the number between 0 and 20`);
// if (data %2 == 0) {console.log(`is even\n`)}
// else {console.log(`is odd\n`)}
// for (let number = 0; number <= 20; number++) {
//     if (number % 2 === 0) {
//         document.write(number + `is eve\n`);
//     } else {
//         document.write(number + `is odd\n`);
//     }
// }


// console.log(gcdclaculate(input(),input()));
// function input(){
//     let number1=prompt("enter the a nuhmber:");
//     while(validation(number1) == false){
//     number1 = prompt("please enter a valid number:");
// }
//     return number1;
// }
// function validation(a){
//     if(a<=0 || isNaN(a) ){
//         return false;
//     }
//     return true;   
// }
// function gcdclaculate(x,y){
//     let gcd =0;
//  let reminder=x%y;
//  if(reminder== 0){
//     gcd = y;
//     return gcd;
//   } else{
//     reminder=x%y;
//       while(reminder !=0){
//       x=y;
//       y=reminder;
//       reminder=x % y;
//       }
//       gcd=y;
//        return gcd;
//       } 
// }
// let gcd = math(input() , input());
// console.log(gcd);
// function input(){
// let number =prompt("Insert a Number");
// while (validNumber(number) == false){
//     number=prompt("Insert Positive Number");
// }
//  return number;
// }
// function validNumber(num){
// if (num <= 0){
//     return false;
// }
//     else {
//         return true;
//     }
// }
// function math(a , b){
//     let karma = 0;
//     let remainder = a % b;
//     if(remainder == 0){
//         karma=b;
//         return karma;
//     }
//     else {
//         remainder = a % b;
//         while (remainder != 0){
//         a=b;
//         b=remainder;
//         remainder= a % b;
//     }
//     karma = b;
//     return karma;
//     }
// }
//  var library={
//      verb:prompt("enter a verb"),
//      adjectiv:prompt("enter a adjectiv"),
//      adverb:prompt("enter a adverb"),
//    storymaker:function(){
//        return `One morning I ${this.verb} and I prepare the food for my family ${this.adverb} for my kids but they ate nothing ,I think my kids are so ${this.adjectiv}`;

//     }
//  }
//  let result = library.storymaker();
//  console.log(result);
// function tellfortun(numberOfChildren, partnerName,
// geographicLocation, jobTitle){
//     return  `You will be a ${jobTitle} in ${geographicLocation},
//     and married to ${partnerName} with ${numberOfChildren} kids.`;
// }

// let person1=tellfortun(2,"megan","zurich","informatiker");
// console.log(person1);

//  let topChoices=["blue","trump","Jlo"];
//  for(let i=0 ; i< topChoices.length ; i++){
//  console.log(`My #${i+1} choice is ${topChoices[i]}` );
// 
 let id=1;
 let toDoList=[];

 function addTask(taskDescription){
   const newTask = {
     name:taskDescription,
     checked:false,
     current:(new Date()).toLocaleTimeString() ,
     idItem: id + 1,
   }
   id++;
   toDoList.push(newTask);
 }
//  addTask("fitness");
//  addTask("wake up");
function removingTask(taskDescription,idTask) {
   for (let i = 0; i < toDoList.length; i++) {
      if(toDoList[i].idItem == idTask){
          toDoList.splice(i, 1); 
      }   }
 }

function completeTask(taskDescription,taskStatus){
  for(let i=0; i<toDoList.length;i++){
    if(toDoList[i].name==taskDescription){
      toDoList[i].checked=taskStatus;
      toDoList[i].current=(new Date()).toLocaleTimeString();

    }
  }
}
function notCompleteYet(taskDescription){
  for(let i=0; i<toDoList.length;i++){
    if(toDoList[i].name==taskDescription){
      toDoList[i].checked=flase;
      
    }
  }
}

function showList(){
  for(let i=0;i<toDoList.length;i++){
    let toDo=toDoList[i];
    console.log(toDo)
    console.log(toDo.name+" "+toDo.checked+" "+toDo.current+" "+toDo.idItem);
  }
}
 
//  let list=document.querySelector("ul");
//  let addButton= document.querySelector("button");
// addButton.addEventListener("click", clickListener);
// function clickListener(event){
// let inputValue =document.querySelector("input[type=text]").value;
// let box=document.getElementsByClassName("delete");
//  addTask(inputValue);
//  renderTodoList(inputValue);
// }
// function renderTodoList(inputValue) {
//  var li = document.createElement("li");
//  var node = document.createTextNode(inputValue);
//  li.appendChild(node);
//  list.appendChild(li);
// list.innerHTML += `<li> <input id="${toDoList.length}" type="checkbox">
// <label for="label3">${inputValue}</label>
// <button class="delete">X</button>
// </li>`
// }

 let list=document.querySelector("ul");
//  let addbutton=document.querySelector("button");
//  addbutton.addEventListener("click",clickListener);
//  function clickListener(event){
//    let inputText=document.querySelector("input").value;
//   //  addTask(inputText);
//    let li=document.createElement("li");
//    let node=document.createTextNode(inputText);
//    li.appendChild(node);
//    list.appendChild(li);
//  }
//  let liDone=document.querySelectorAll("li").addEventListener("onClick",()=>{
//    for(let i=0;i<liDone.length;i++){
//   liDone.style.color="red";
// }
//  });
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.style.color="red";
//   }
// })

   

// function addTask(taskDescription){
//     const newTask = {
//       name:taskDescription,
//       checked:false,
//       current:(new Date()).toLocaleTimeString() ,
//       idItem: id + 1,
//     }
//     id++;
//     toDoList.push(newTask);
//   }
//   // let removebtn= document.getElementsByClassName("delete");
//   // for(let i=0; i<removebtn.length;i++){
//   //   removebtn[i].addEventListener("click",removeclick);
//   //   function removeclick(event){
//   //     let removeItem=document.getElementsByClassName("delete").value;
//   //     removingTask(removeItem,removeItem.idItem);
//   //   }
//   // }
//   function removingTask(taskDescription,idTask) {
//         for (let i = 0; i < toDoList.length; i++) {
//            if(toDoList[i].idItem == idTask){
//               toDoList.splice(i, 1); 
//           }   }
//       }
// const animalFarm = [{
//   name: "sheep",
//   legs: 4
// },
// {
//   name: "rabbit",
//   legs: 4
// },
// {
//   name: "cat",
//   legs: 4
// },
// {
//   name: "dog",
//   legs: 4
// },
// {
//   name: "tiger",
//   legs: 4
// },
// {
//   name: "lion",
//   legs: 4
// },
// {
//   name: "bird",
//   legs: 2
// },
// {
//   name: "monkey",
//   legs: 2
// }
// ]
// /**
// * This is one of the biggest animal farm
// * and client wants from us which animals have two legs and which animals have 4 legs
// * and how many legs total all the animals have
// */
// //Two Legs
// let filterTwoLegs = animalFarm.filter((animals) => animals.legs == 2);
// let twolegsAnimal = filterTwoLegs.map((list) => {
// return list.name
// })
// let multipleLegs = filterTwoLegs.map(x => x.legs * 2)
// console.log(filterTwoLegs)
// console.log(`Those are two legs animal ${twolegsAnimal}`)
// console.log(multipleLegs)
// //Four Legs
// let filterFourLegs = animalFarm.filter((animals) => animals.legs == 4);
// let fourLegsAnimal = filterFourLegs.map((list) => {
// return list.name
// })
// let multiplefourLegs = filterFourLegs.map(x => x.legs * 2)
// console.log(filterFourLegs)
// console.log(`Those are four legs animal ${fourLegsAnimal}`)
// console.log(multiplefourLegs)
// //Total of the legs
// let AllLegs = animalFarm.map(animals=>{
// return animals.legs
// })
// const totalLegs=AllLegs.reduce(myFunc);
// function myFunc(total, num) {
// return total + num;
// }
// console.log(`This is the total legs ${totalLegs}`)





// <script src="main.js"></script>
// <script src="https://maps.googleapis.com/maps/api/js?
// key=AIzaSyD55pYywaQcNhkB0QrpbEdQ2ksAiHvXZEw&callback=initMap" async defer></script>



// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });

//   var marker = new google.maps.Marker({
//     position: { lat: 47.3739089, lng: 8.5328035 },
//     map: map,
//   });