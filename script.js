const tabBtns = document.querySelectorAll(".tabBtn")
const daysOfTheWeek_Pt = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado']
const daysOfTheWeek_En = ['sunday','monday','tuesday','wednesday','thurdsay','friday','saturday']
const currentDate = new Date()
const dailySchedule = document.querySelectorAll(".daily_schedule .scheduleRow")


tabBtns.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        tabBtns.forEach((elm)=>{elm.classList.remove("tabselected")})
        evt.target.classList.add("tabselected")
        window.open(`${evt.target.innerText.toLowerCase()}.html`, "tabIframe");
    })
})

// const obterDados = ()=>{
//     const endpoint = "https://api.weatherapi.com/v1/current.json?key=bd63768a168744b0b9914245241904&q=Salvador"
//     fetch(endpoint,{method:"get"})
//     .then(res=>res.json()) //1º then vai transformar o retorno em json
//                         //método ".text()" transforma em texto
//     .then(dados=>{ //2º then faz o tratamento dos dados retornados pelo 1º then
//     console.log(dados)
    
// })
// }

// obterDados()

const weatherData = (lat,long)=> {
    const weatherLoc = document.querySelector('#weatherLocation')
    const weatherTemp = document.querySelector('#weatherTemperature')
    const weatherDesc = document.querySelector('#weatherDescription')
    const weatherIcon = document.querySelector('#weatherIcon')
    fetch(`https://api.weatherapi.com/v1/current.json?key=bd63768a168744b0b9914245241904&q=${lat},${long}`)
    .then(res=>res.json())
    .then((dados)=>{
        weatherLoc.innerText = `${dados.location.name},${dados.location.region.slice(0,2)}`
        weatherTemp.innerText = `${dados.current.temp_c}º`
        weatherDesc.innerText = `${dados.current.condition.text}`
        const weatherIconImg = document.createElement('img')
        weatherIconImg.setAttribute('src', dados.current.condition.icon)
        weatherIcon.appendChild(weatherIconImg)
        // weatherIcon.setAttribute('src', dados.current.condition.icon)

        
    })
}

const success = (pos)=>{
    const lat = pos.coords.latitude
    const long = pos.coords.longitude
    weatherData(lat,long)
   
}

const err = ()=>{
    const weather = document.querySelector('#weather')
    weather.innerHTML = "Indisponível" 
}


navigator.geolocation.getCurrentPosition(success, err)

const quoteData = ()=>{
    const endpoint = "https://api.api-ninjas.com/v1/quotes?category=inspirational"
    const header = {
        method: 'GET',
        headers: { 'X-Api-Key': 'uqWyyX8h//8pEhgLds4oBQ==lc4hLlREJjsoEiaF'},
        contentType: 'application/json'
    }
    fetch(endpoint,header)
    .then(res=>res.json())
    .then(dados=>{
        const quote = document.querySelector('#quote')
        quote.innerText = `${dados[0].quote} - ${dados[0].author}`

    })
}

// quoteData() IMPORTANT DO UNDO THE COMMENT DO CALL THE FUNCTION





// const date = new Date("2024-04-24")

// console.log(date.toISOString())
// console.log(date)
// console.log(date.getDay())

fetch("tasks_goals_data.json")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    // const insertGoal = data.filter(
    //         (el)=>{
    //            return el.category==1
    //         }
    //     )    
    //             goalsFill(insertGoal)
    
    document.querySelector('#dayTitle').innerText = daysOfTheWeek_Pt[currentDate.getDay()]
    const insertGoal = (cat,date)=>{
                
            if(!date){
                return data.filter(
                    (el)=>{
                       return (el.category==cat)
                    }
                )
            } else{
                return data.filter(
                    (el)=>{
                       return (el.category==cat) && (el.date==date)
                    }
                )
            }
        
            }

            goal_task_Fill(insertGoal(1),'goal',10)
            goal_task_Fill(insertGoal(2, currentDate.toISOString().slice(0,10)),'task',15,currentDate.getDay())



            
            // console.log(insertGoal(1,new Date().toISOString().slice(0,10)))
    

})

// const insertGoal = data.filter(
//     (el)=>{
//        return el.category==1
//     }
// )    

// .then(data=>{
//     console.log(data)
//     const insertGoal = (cat,date)=>{
//         return data.filter(
//             (el)=>{
//                return (el.category==cat) and (el.date==date)
//             }
//         )

//     }
//     console.log(insertGoal(1))

// })

const goalsFill = (goalsDataObj)=>{
    const goalsContainer = document.querySelector(`#goalsContainer`)
    goalsContainer.innerHTML = ''
    const goalsAmount = document.querySelectorAll(".goal > input[type='checkbox']")
    

    const newGoal = document.createElement('li')
    newGoal.classList.add('goal','newGoal')
    if(goalsAmount.length < 10){
        goalsContainer.appendChild(newGoal)
        const newGoalInput = document.createElement('input')
        newGoalInput.setAttribute('type','text')
        newGoalInput.setAttribute('placeholder','Nova meta...')
        newGoal.appendChild(newGoalInput)
    }


    for (var i = 0; i < (9); i++) {
        const goalLi = document.createElement('li')
        goalLi.classList.add('goal')
        if (goalsDataObj[i] != undefined){
            const goalCheckbox = document.createElement('input')
            goalCheckbox.setAttribute('type','checkbox')
            goalCheckbox.setAttribute('name',`goal${i}`)
            goalCheckbox.setAttribute('id',`goal${i}`)
            goalCheckbox.classList.add('goalCheckbox')
            if(goalsDataObj[i].accomplished == true) {goalCheckbox.setAttribute('checked','checked')}
            goalLi.appendChild(goalCheckbox)
            const goalLabel = document.createElement('label')
            goalLabel.setAttribute('for',`goal${i}`)
            goalLi.appendChild(goalLabel)
            const goalText = document.createElement('input')
            goalText.setAttribute('type','text')
            goalText.setAttribute('value', goalsDataObj[i].description)
            goalText.setAttribute('readonly','readonly')
            goalLabel.appendChild(goalText)
            goalsContainer.insertBefore(goalLi,newGoal)
        } else {
            goalsContainer.appendChild(goalLi)
        }

   
    }

}



//   <li class="goal">
//   <input type="checkbox" name="goal1" id="goal1" class="goalCheckbox">
//   <label for="goal1"><input type="text" value="Meta 1" readonly></label>    
//   </li>


const goal_task_Fill = (catDataObj,catName,cellsQtd,dayWeek)=>{
    const catsContainer = document.querySelector(`#${catName}sContainer`)
    catsContainer.innerHTML = ''
    const catsAmount = document.querySelectorAll(`.${catName} > input[type='checkbox']`)
    

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



console.log(dailySchedule)
// console.log(dailySchedule[0].children[1])

fetch("schedule.json")
.then(res=>res.json())
.then(dados=>{
    const schedulefilter = (scheduleDay)=>{
        return dados.filter((el)=>{
            return el.dayWeek == scheduleDay
        })
    }
    
    

    const dailyScheduleFill = (obj)=>{
        for (let i in obj){
        console.log(dailySchedule[i].children[1].children[0])

        if (obj[i].activity == null){
            dailySchedule[i].children[1].children[0].setAttribute('value','')
        } else {
            dailySchedule[i].children[1].children[0].setAttribute('value',`${obj[i].activity}`)
            dailySchedule[i].children[1].classList.add(`${daysOfTheWeek_En[currentDate.getDay()]}`)
            dailySchedule[i].children[1].children[0].setAttribute('readonly','readonly')
        }



    }
    }

    dailyScheduleFill(schedulefilter(currentDate.getDay()))
    
    
    // for (let i of schedulefilter(currentDate.getDay())){
    //     console.log(i)
    // }
})






















