// write a js to store an array of object height and name display highest height
let people = [
     {name:"pqr", height: 180},
     {name:"abc", height: 190},
     {name:"xyz", height: 170}
];
 for(i=0; i<people.length; i++){
     if(people[i].height > people[0].height){
         people[0] = people[i];
     }  
    }   
console.log( people[0].height);