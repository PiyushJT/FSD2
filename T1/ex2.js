//Print following statement in console from given JSON objects.
//Output: Ramesh got 99 outof 100 marksand secure 1st rank.


const a = {"Name" : "Ramesh",
            "Subects" : ["Maths", "Scence" , "chemistry"],
            "Grade" : {"Type" : "marks","Total" : [88,90,99,87]},
            "Range" : {"opt" : "100", "type" : ["secure","subject","class"]},
            "achive" : [{"Rank" :"rank", "place":[1,2,3]}, {"Ordinalindicator":"st"},"12"],
            "joints" : ['outof','got','and']
          }
  console.log(a.Name + " " + a.joints[1] + " " + a.Grade.Type + " " + a.Grade.Total[2] + " " + a.joints[0] + " " + a.Range.opt + " " + a.joints[2] + " " + a.achive[0].place[0] + a.achive[1].Ordinalindicator + " " + a.achive[0].Rank);                  



