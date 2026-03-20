// Print following statement in console from given JSON objects.
// const a = {"Name" : "Ramesh",
//  "Subects" : ["Maths", "Scence" , "chemistry"],
//  "Grade" : {"Type" : "marks","Total" : [88,90,99,87]},
//  "Range" : {"opt" : "100", "type" : ["secure","subject","class"]},
//  "achive" : [{"Rank" :"rank", "place":[1,2,3]},
// {"Ordinalindicator":"st"},"12"],
//  "joints" : ['outof','got','and']
//  }
// Output: Ramesh got 99 outof 100 marks
//  and secure 1st rank in class
const a = {
    "Name": "Ramesh",               
    "Subects": ["Maths", "Scence", "chemistry"],    
    "Grade": {"Type": "marks", "Total": [88, 90, 99, 87]},  
    "Range": {"opt": "100", "type": ["secure", "subject", "class"]},    

    "achive": [{"Rank": "rank", "place": [1, 2, 3]}, {"Ordinalindicator": "st"}, "12"], 
    "joints": ['outof', 'got', 'and']       
};      
const name = a.Name;
const marks = a.Grade.Total[2];
const outOf = a.Range.opt;
const rank = a.achive[0].place[0];  
const ordinalIndicator = a.achive[1].Ordinalindicator;
const secure = a.Range.type[0];
const subject = a.Range.type[1];
const classType = a.Range.type[2];
console.log(`${name} ${a.joints[1]} ${marks} ${a.joints[0]} ${outOf} ${a.achive[0].Rank} ${secure} ${rank}${ordinalIndicator} ${classType}`);       