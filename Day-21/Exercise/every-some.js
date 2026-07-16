const marks = [70, 80, 91, 60];

//Are all students passed?
let passed = marks.every((el)=>(el>=45));
console.log(passed);
//Is anyone above 90?
let _90pluse = marks.some((el)=>(el>90));
console.log(_90pluse);
//Are all marks above 50?
let _50pluse= marks.every((el)=>(el>50));
console.log(_50pluse);
//Is any mark below 45?
let bellow_45 = marks.some((el)=>(el<45));
console.log(bellow_45);
