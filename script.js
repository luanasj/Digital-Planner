const tabBtns = document.querySelectorAll(".tabBtn")
const daysOfTheWeek_Pt = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado']
const daysOfTheWeek_En = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
const currentDate = new Date()


tabBtns.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        tabBtns.forEach((elm)=>{elm.classList.remove("tabselected")})
        evt.target.classList.add("tabselected")
        window.open(`${evt.target.innerText.toLowerCase()}.html`, "tabIframe");
    })
})



const weatherData = (lat,long)=> {
    const weatherLoc = document.querySelector('#weatherLocation')
    const weatherTemp = document.querySelector('#weatherTemperature')
    const weatherDesc = document.querySelector('#weatherDescription')
    const weatherIcon = document.querySelector('#weatherIcon')
    fetch(`https://api.weatherapi.com/v1/current.json?key=bd63768a168744b0b9914245241904&q=${lat},${long}`)
    .then(res=>res.json())
    .then((dados)=>{
        if (weatherLoc && weatherTemp && weatherDesc && weatherIcon){
            weatherLoc.innerText = `${dados.location.name},${dados.location.region.slice(0,2)}`
        weatherTemp.innerText = `${dados.current.temp_c}º`
        weatherDesc.innerText = `${dados.current.condition.text}`
        const weatherIconImg = document.createElement('img')
        weatherIconImg.setAttribute('src', dados.current.condition.icon)
        weatherIcon.appendChild(weatherIconImg)
        }
        

        
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


const weatherFill = ()=>navigator.geolocation.getCurrentPosition(success, err)
weatherFill()

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
        if (quote){
            quote.innerText = `${dados[0].quote} - ${dados[0].author}`
        }

    })
}

quoteData() 


const goalsAndTasksFill = ()=> {fetch("tasks_goals_data.json")
.then(res=>res.json())
.then(data=>{

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

            
            const dailyTasksFill = ()=> {document.querySelector('#daily_toDo #dayTitle').innerText = daysOfTheWeek_Pt[currentDate.getDay()]
                    goal_task_Fill(insertGoal(1),'goal',10,document.querySelector(`#goalsContainer`))
                    goal_task_Fill(insertGoal(2, currentDate.toISOString().slice(0,10)),'task',15,document.querySelector(`#daily_toDo #tasksContainer`),currentDate.getDay())
                }
                
            if(document.querySelector('#daily_toDo')){
                dailyTasksFill()
            }
            
            const weekTasksFill = ()=>{
                const weekToDoContainers = document.querySelectorAll('.tasksContainer')
                let firstMondayWeek = (Date.now() - currentDate.getDay() * 86400000) + 86400000
            
                weekToDoContainers.forEach(container=>{
            
                    goal_task_Fill(insertGoal(2,new Date(firstMondayWeek).toISOString().slice(0,10)),'task',15,container,new Date(firstMondayWeek).getDay())
            
            
                    firstMondayWeek = firstMondayWeek + 86400000 
                })
            
            }

            if(document.querySelector('.weeklyToDoTop')){
                weekTasksFill() 
            }   

})
}
goalsAndTasksFill()

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


const goal_task_Fill = (catDataObj,catName,cellsQtd,catsContainer,dayWeek)=>{
    catsContainer.innerHTML = ''
    const catsAmount = [...catsContainer.children].filter(el=>{
        return el.children[0] && el.children[0].classList.contains('taskCheckbox')
    })
    // or
    // const catsAmount2 = catsContainer.querySelectorAll('.taskCheckbox') 

    
    

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


fetch("schedule.json")
.then(res=>res.json())
.then(dados=>{
    const schedulefilter = (scheduleDay)=>{
        return dados.filter((el)=>{
            return el.dayWeek == scheduleDay
        })
    }
    
    const scheduleFill = (schEl,obj,day,num)=>{
        
    // for(let count = 0; count < num;i++){
        for (let i in obj){

            if (obj[i].activity == null){
                    schEl[i].children[num].children[0].setAttribute('value','')
            } else {
                    schEl[i].children[num].children[0].setAttribute('value',`${obj[i].activity}`)
                    schEl[i].children[num].classList.add(`${daysOfTheWeek_En[day]}`)
                    schEl[i].children[num].children[0].setAttribute('readonly','readonly')
                } 
            
            }
    }
        

    // }
    

    if (document.querySelectorAll(".daily_schedule .scheduleRow").length > 0) {    
        const dailySchedule = document.querySelectorAll(".daily_schedule .scheduleRow")
        scheduleFill(dailySchedule,schedulefilter(currentDate.getDay()),currentDate.getDay(),1)
        
    }

    if(document.querySelectorAll('.week_schedule tbody').length > 0) {
        const weekSchedule = document.querySelectorAll('.week_schedule tbody .scheduleRow')
        const scheduleDays = [1,2,3,4,5,6,0]
       
        scheduleDays.forEach((day)=>{
            scheduleFill(weekSchedule,schedulefilter(day),day,(scheduleDays.indexOf(day)+1))
        })
       console.log(schedulefilter(0))
       
       
       
       
       
        

    }
        
    

    
        
    

    
})

const contactsFill = (data)=>{

    
    


    data.forEach((obj)=>{
    const contactsCardsSection = document.querySelector('#contactsCards')

    const contact = document.createElement('div')
    contact.setAttribute('id', `contact${obj.id}`)
    contact.classList.add('contactCard')
    contactsCardsSection.appendChild(contact)

    const contactContent = document.createElement('div')
    contactContent.setAttribute('id',`contactContent${obj.id}`)
    contactContent.classList.add('contactInfo')
    contact.appendChild(contactContent)

    const cardTools = document.createElement('div')
    cardTools.classList.add('cardTools')
    contact.appendChild(cardTools)

    const toolButton = document.createElement('button')
    toolButton.classList.add('toolButton')
    cardTools.appendChild(toolButton)

    const toolIcon = document.createElement('i')
    toolIcon.classList.add('ph','ph-pencil')
    toolButton.appendChild(toolIcon)

    const toolCheckbox = document.createElement('input')
    toolCheckbox.setAttribute('type','checkbox')
    toolCheckbox.setAttribute('name',`contactCheckbox${obj.id}`)
    toolCheckbox.setAttribute('id',`contactCheckbox${obj.id}`)
    toolCheckbox.classList.add("contactCheckbox")
    cardTools.appendChild(toolCheckbox)

        for (prop in obj) {
            // console.log(prop)`
            if(prop != 'id'){
                const infoLabel = document.createElement('span')
                infoLabel.classList.add(`contact${prop}`,'infoLabel')
                infoLabel.innerText = `${prop}: `

                const infoText = document.createElement('span')
                infoText.classList.add('infoText')
                
                if(prop == 'Link'){
                    const linkA = document.createElement('a')
                    linkA.setAttribute('href',obj[prop])
                    linkA.innerText = obj[prop]
                    infoText.appendChild(linkA)
                } else{
                    infoText.innerText = obj[prop]
                }
                
                infoLabel.appendChild(infoText)
                contactContent.appendChild(infoLabel)


            }
            

        }

    })

//     <div id="contact1" class="contactCard">
//     <div id="contactContent1" class="contactInfo">
//         <span class="contactName infoLabel">Nome:<span class="infoText">Bruno Almeida</span></span>
//         <span class="contactBond infoLabel">Vínculo:<span class="infoText">Professor</span></span>
//         <span class="contactSubject infoLabel">Disciplina:<span class="infoText">MATA01 - Calculo A</span></span>
//         <span class="contactEmail infoLabel">Email:<span class="infoText">bruno123@outlook.com.br</span></span>
//         <span class="contactTel infoLabel">Telefone:<span class="infoText">999999999</span></span>
//         <span class="contactLink infoLabel">Link:<span class="infoText"><a href="www.randomurl.com/lorem/ipsum">www.randomurl.com/lorem/ipsum</a></span></span>
//         <span class="contactInstitution infoLabel">Instituição:<span class="infoText">UFBA - Universidade Federal da Bahia</span></span>
//     </div>
//     <div class="cardTools">
//         <button class="toolButton"><i class="ph ph-pencil"></i></button>
//         <input type="checkbox" name="contactCheckbox1" id="contactCheckbox1" class="contactCheckbox">
//     </div>    
// </div>
}


fetch('contacts.json')
.then(res=>res.json())
.then(dados=>{
 contactsFill(dados)
})









 




























