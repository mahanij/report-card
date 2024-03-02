
let classMeats = [
    mahdiZangane = {
        name:"mahdiZangane",
        age:14,
        average:"+A"
    },
    tahaZangane = {
        name:"tahaZangane",
        age:12,
        average:"+B"
    },
    pouyaFakhri = {
        name:"pouyaFakhri",
        age:14,
        average:"-A"
    },
    amirArdani = {
        name:"amirArdani",
        age:16,
        average:"-C"
    },
    arshiaZahedi = {
        name:"amirArdani",
        age:14,
        average:"+C"
    },
    amirZahedi = {
        name:"amirZahedi",
        age:15,
        average:"-C"
    },
    
]
if(confirm("Do you want to know the age of the students in this class?")){
    for(let key in classMeats){
        console.log(classMeats[key].name + " " + classMeats[key].age + " years old" )
    }
}
if(confirm("Do you want to know the average of the students in this class?")){
    for(let key in classMeats){
        console.log(classMeats[key].name + " = " + classMeats[key].average)
    }
}