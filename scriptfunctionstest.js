const currentDate = new Date()
//negative numbers to go foward 
// //and positive numbers to go back in days
let pastOrFoward = 0
const mondayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * 86400000) + 86400000 - (86400000 * 7 * pastOrFoward)
const sundayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * 86400000) + (86400000 * 7) - (86400000 * 7 * pastOrFoward)
const dayofweekstr = (dtMilisec)=>{
    const data = new Date(dtMilisec).toLocaleDateString().split("/")
    return `${data[2]}-${data[1]}-${data[0]}`
}

console.log(dayofweekstr(mondayOfTheWeekMilisec))
console.log(new Date(mondayOfTheWeekMilisec).getDay())
console.log(dayofweekstr(sundayOfTheWeekMilisec))
console.log(new Date(sundayOfTheWeekMilisec).getDay())



        
    

    
        
    

