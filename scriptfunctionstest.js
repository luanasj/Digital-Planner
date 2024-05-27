// const tabBtns = document.querySelectorAll(".tabBtn")
const daysOfTheWeek_Pt = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado']
const daysOfTheWeek_En = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
const currentDate = new Date()
// //negative numbers to go foward 
// //and positive numbers to go back in days
let pastOrFoward = 1
const pastOrFowardRegularizer = (pastOrFoward == 0 ? ()=>{pastOrFoward=-1 ; return -1} : pastOrFoward)
const mondayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * pastOrFowardRegularizer * 86400000) + 86400000 
const sundayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * pastOrFowardRegularizer * 86400000) + (86400000 * 7) 
const dayofweekstr = (dtMilisec)=>{return new Date(dtMilisec).toJSON().slice(0,10)}

const fetchGoalsAndTasksGet = async ()=> {

// const mondayDateString = dayofweekstr(mondayOfTheWeekMilisec)
// const sundayDateString = dayofweekstr(sundayOfTheWeekMilisec)

// const endpoint = "http://127.0.0.1:3000/getgoalsandtasks"
// const myHeaders = new Headers({"Content-Type": "application/json"})
// fetch(endpoint,{method: "POST", headers: myHeaders ,body: JSON.stringify({data1:mondayDateString,data2:sundayDateString})})
// .then(res=>res.json())
// .then(dados=>{console.log(dados)}) 


return await fetch("tasks_goals_data.json")
        .then(res=>res.json())
        .then(data=>{
            return data

})}


console.log(fetchGoalsAndTasksGet())

const filterGoalsAndTasks = async (obj,cat,date)=>{
        const data = await obj

        if(cat==1){
            return data.filter(
                (el)=>{
                    return (el.category==cat)
                }
            )
        } else if (cat==2){
            return data.filter(
                (el)=>{
                    return (el.category==cat && el.date==date)
                }
            )
        } else {
            return "wrong cat input"
        }
} 

const goals = filterGoalsAndTasks(fetchGoalsAndTasksGet(),1)
const tasks = async (dt)=>{
    return await filterGoalsAndTasks(fetchGoalsAndTasksGet(),2,dt)}

const goalsAndTasksFill = (catDataObj,catName,cellsQtd,catsContainer,dayWeek)=>{
    catsContainer.innerHTML = ''
    const catsAmount = [...catsContainer.children].filter(el=>{
        return el.children[0] && el.children[0].classList.contains('taskCheckbox')
    })
  

    const newcat = document.createElement('li')
    newcat.classList.add(`${catName}`,`new${catName}`,`${daysOfTheWeek_En[dayWeek]}`)
    if(catsAmount.length < cellsQtd){
        catsContainer.appendChild(newcat)
        const newcatInput = document.createElement('input')
        newcatInput.setAttribute('type','text')
        newcatInput.setAttribute('placeholder','Novo ...')
        newcat.appendChild(newcatInput)
    }


    for (var i = 0; i < (cellsQtd - 1); i++) {
        const catLi = document.createElement('li')
        catLi.classList.add(`${catName}`,`${daysOfTheWeek_En[dayWeek]}`)
        if (catDataObj[i] != undefined){
            const catCheckbox = document.createElement('input')
            catCheckbox.setAttribute('type','checkbox')
            catCheckbox.setAttribute('name',`${catName}${i}`)
            catCheckbox.setAttribute('id',`${catName}${i}`)
            catCheckbox.classList.add(`${catName}Checkbox`)
            if(catDataObj[i].accomplished == true) {catCheckbox.setAttribute('checked','checked')}
            catLi.appendChild(catCheckbox)
            const catLabel = document.createElement('label')
            catLabel.setAttribute('for',`${catName}${i}`)
            catLi.appendChild(catLabel)
            const catText = document.createElement('input')
            catText.setAttribute('type','text')
            catText.setAttribute('value', catDataObj[i].description)
            catText.setAttribute('readonly','readonly')
            catLabel.appendChild(catText)
            catsContainer.insertBefore(catLi,newcat)
        } else {
            catsContainer.appendChild(catLi)
        }

   
    }


}

const dailyTasksFill = async ()=> {
    document.querySelector('#daily_toDo #dayTitle').innerText = daysOfTheWeek_Pt[currentDate.getDay()]
    goalsAndTasksFill(goals,'goal',10,document.querySelector(`#goalsContainer`))
    goalsAndTasksFill(tasks(dayofweekstr(Date.now)),'task',15,document.querySelector(`#daily_toDo #tasksContainer`),currentDate.getDay())
}

if(document.querySelector('#daily_toDo')){
    dailyTasksFill()
}

const weekTasksFill = async ()=>{
    const weekToDoContainers = document.querySelectorAll('.tasksContainer')
    let day = mondayOfTheWeekMilisec

    weekToDoContainers.forEach(container=>{

        goalsAndTasksFill(tasks(dayofweekstr(day)),'task',15,container,new Date(day).getDay())
        day += 86400000 
    })

}

if(document.querySelector('.weeklyToDoTop')){
    weekTasksFill() 
}  


