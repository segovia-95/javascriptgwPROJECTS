const users = 
[{name:'larry', last:'garry'},
 {name: 'moe', last:'joe'}, 
 {name:'curly', joe},
 {name:'shemp'},
];

users.splice(0, 3);
//took off from the end 
users.pop();

//add to the end 
users.push({name:'v', last: 'f'});

// remove from the beginnings 
users.shift();

//add to the beginnings 
users.unshift({name:'v', last: 'f'});

function addUser(type, text){
    //create element
const ul = document.createElement('ul');
// put it on the page 
document.body.appendChild('ul');
//put it on the page
document.body.appendChild(ul);
//style it 
element.style.border = '1px solid red';

}

users.map((item, index) => {
    return item.name + ' ' + item.last + ' ' + index 
}(function whatToDoWithEachItem(item, index) {
    console.log('index', index);
    addUser('li',users[index].name + ' ' users 
})

addUser('li', users[0].name);
addUser('li', users[2]['name']);


//list of abilities 
//
// document.body.innerHTML= '<ul><li></li></ul>';

//create element 
const ul = document.createElement('ul');

//put it on the page 
document.body.appendChild(ul);
ul.style.border = '1px solid red'

//style it 
ul.style.border = '1px solid red'

// retrieve an element 
const firstUl= document.querySelector('ul');

//style 
firstUl.style.border = '2px solid grey'

for( let i=0; i<= 1000; i++){
    console.log(i)
}

  for)let property in thing){
      console.log(thing[property])
  }

for(let thing of users) {
    console.log(thing[property])
}

let i = 0;

while(i <10) {
    console.log('it is less than 10')
    i++;
}