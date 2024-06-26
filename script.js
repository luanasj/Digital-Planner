const tabBtns = document.querySelectorAll(".tabBtn")
const tabsmenu = document.querySelector('.tabsMenu')
const daysOfTheWeek_Pt = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sábado']
const daysOfTheWeek_En = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
const currentDate = new Date()
//negative numbers to go foward 
// //and positive numbers to go back in days
let pastOrFowardCounter = 0
const dayofweekstr = (dtMilisec)=>{
    const data = new Date(dtMilisec).toLocaleDateString().split("/")
    return `${data[2]}-${data[1]}-${data[0]}`
}
let contactsCounter = 0

const rootPseudoClass = document.querySelector(':root')

const menubtn = document.querySelector('.menu_btn')
if(menubtn){
    menubtn.addEventListener('click',(evt)=>{
    
        evt.target.classList.toggle('ph-moon')
        evt.target.classList.toggle('ph-sun')
    
        if(evt.target.classList.contains('ph-sun')){
            rootPseudoClass.style.setProperty('--main-light-color','#000')
            rootPseudoClass.style.setProperty('--main-dark-color','#fff')
        } else {
            rootPseudoClass.style.setProperty('--main-light-color','#fff')
            rootPseudoClass.style.setProperty('--main-dark-color','#000')
        } 
    
    })
}







tabBtns.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        tabBtns.forEach((elm)=>{elm.classList.remove("tabselected")})
        evt.target.classList.add("tabselected")
        window.open(`./Tabs/${evt.target.innerText.toLowerCase()}.html`, "tabIframe");
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
    // console.log(lat)
    // console.log(long)
    weatherData(lat,long)
   
}

const err = ()=>{
    const weather = document.querySelector('#weather')
    weather.innerHTML = "Indisponível" 
}


const weatherFill = ()=>{navigator.geolocation.getCurrentPosition(success, err)}
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



const fetchGoalsAndTasksGet = async (pastOrFoward)=> {
    const mondayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * 86400000) + 86400000 - (86400000 * 7 * pastOrFoward)
    const sundayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * 86400000) + (86400000 * 7) - (86400000 * 7 * pastOrFoward)

    const mondayDateString = dayofweekstr(mondayOfTheWeekMilisec)
    const sundayDateString = dayofweekstr(sundayOfTheWeekMilisec)
    // console.log(mondayDateString)
    
    const endpoint = "http://127.0.0.1:3000/getgoalsandtasks"
    const myHeaders = new Headers({"Content-Type": "application/json"})

    return await fetch(endpoint,{method: "POST", headers: myHeaders , body: JSON.stringify({data1:mondayDateString,data2:sundayDateString})})
    .then(res=>res.json())
    .then(dados=>{return dados[0]})  
    
}

const fetchGoalsAndTasksInsert = async (dsc,typenum,dt)=>{ //create new goal or task

const endpoint = "http://127.0.0.1:3000/goalsandtasks"
const myHeaders = new Headers({"Content-Type": "application/json"});
const body = {
    dsc: dsc, 
    typenum: (typenum == 'goal' ? 1 : 2), 
    acc: false, 
    dt: dt 
}

    return fetch(endpoint,{method:"POST", headers: myHeaders, body: JSON.stringify(body)})
    .then(res=>res.json())
    .then(answer=>{return answer})

}

const fetchGoalsAndTasksUpdate = async (id,campo,entrada)=>{

const myHeaders = new Headers({"Content-Type": "application/json"})
const endpoint = `http://127.0.0.1:3000/goalsandtasks;${id}`

const body = {
    campo: campo, //campo must be "description" or "acc" && entrada must be a string
    entrada: entrada 
}

return fetch(endpoint,{method:"PATCH", headers:myHeaders ,body: JSON.stringify(body)})
.then(res=>res.json())
.then(dados=>{return dados})
}

const fetchGoalsAndTasksDelete = async (id)=>{
    const endpoint = `http://127.0.0.1:3000/goalsandtasks;${id}`

    return fetch(endpoint,{method:"DELETE"})
    .then(res=>res.json())
    .then(dados=>(console.log(dados)))

}


    
    
//  console.log(fetchGoalsAndTasksGet())
    
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
                return (el.category==cat && el.date.slice(0,10)==date)
            }
        )
    } else {
        return "wrong cat input"
    }
} 


const goals = async () => {return await filterGoalsAndTasks(fetchGoalsAndTasksGet(pastOrFowardCounter),1)}
const tasks = (dt,pastOrFoward)=>{
    return filterGoalsAndTasks(fetchGoalsAndTasksGet(pastOrFoward),2,dt)}
    
const goalsAndTasksRefresh = async (cat,dt,parsedDt,container,pastOrFoward)=>{
    if(cat == 'goal'){
        const dgoals = await goals()
        goalsAndTasksFill(dgoals,'goal',10,container,dayofweekstr(Date.now()))
    } else if (cat == 'task'){
        const dtasks = await tasks(dt,pastOrFoward)// É AQUI O ERRO PQ TA USANDO TASKS
        goalsAndTasksFill(dtasks,cat,15,container,dt,new Date(parsedDt).getDay(),pastOrFoward)
    }
    
}
    
const goalsAndTasksFill = (catDataObj,catName,cellsQtd,catsContainer,dt,dayWeek,pastOrFoward)=>{
    catsContainer.innerHTML = ''
    const catsAmount = [...catsContainer.children].filter(el=>{
        return el.children[0] && el.children[0].classList.contains(`${catName}Checkbox`)
    })


    const newcat = document.createElement('li')
    newcat.classList.add(`${catName}`,`new${catName}`,`${daysOfTheWeek_En[dayWeek]}`)
    if(catsAmount.length < cellsQtd){
        catsContainer.appendChild(newcat)
        const newcatInput = document.createElement('input')
        newcatInput.setAttribute('type','text')
        newcatInput.setAttribute('placeholder','Novo ...')
        newcatInput.setAttribute('dbdt',`${dt}`)
        newcatInput.addEventListener("keydown", (event) => {
            if(event.key == "Enter" && event.target.value.length > 0){
                
                const postdt = (event.target.getAttribute('dbdt').length > 0 ? event.target.getAttribute('dbdt') : dayofweekstr(Date.now()))
                console.log(postdt)
                const postcat = event.target.parentNode.classList[0]
                const postvalue = event.target.value
                const parsedDate = Date.parse(postdt) + 86400000
                const refreshContainer = event.target.parentNode.parentNode
                
                
                fetchGoalsAndTasksInsert(postvalue,postcat,postdt)
                .then(res => {
                    goalsAndTasksRefresh(postcat,postdt,parsedDate,refreshContainer,pastOrFoward)
                }).catch(res=>console.log(res))

                console.log("new task")

            }
        })  
        newcat.appendChild(newcatInput)
    }


    for (var i = 0; i < (cellsQtd - 1); i++) {
        const catLi = document.createElement('li')
        catLi.classList.add(`${catName}`,`${daysOfTheWeek_En[dayWeek]}`)
        if (catDataObj[i] != undefined){
            const catCheckbox = document.createElement('input')
            catCheckbox.setAttribute('type','checkbox')
            catCheckbox.setAttribute('name',`${catName}${catDataObj[i].id}`)
            catCheckbox.setAttribute('id',`${catName}${catDataObj[i].id}`)
            catCheckbox.classList.add(`${catName}Checkbox`)
            if(catDataObj[i].accomplished == true) {catCheckbox.setAttribute('checked','checked')}
            catCheckbox.addEventListener('input',(evt)=>{
                const updtdsc = `${evt.target.checked}`
                const updtid = evt.target.nextSibling.firstChild.getAttribute('dbid')
                // const rfrcat = evt.target.parentNode.classList[0]
                // const rfrdt = evt.target.nextSibling.firstChild.getAttribute('dbdt').slice(0,10)
                // const rfrparsedDt = Date.parse(rfrdt) + 86400000
                // const rfrcontainer = evt.target.parentNode.parentNode
                // console.log(rfrcat)
                // console.log(rfrdt)
                // console.log(rfrparsedDt)
                // console.log(rfrcontainer)
                // console.log(updtdsc) //boolean, must be converted to string
                // console.log(updtid)
                fetchGoalsAndTasksUpdate(updtid,"acc",updtdsc)
                .then(
                    res=>{
                        console.log(res)
                        // goalsAndTasksRefresh(rfrcat,rfrdt,rfrparsedDt,rfrcontainer)
                    }
                ).catch(
                        res=>console.log(res)
                    )
                
            })
            catLi.appendChild(catCheckbox)
            const catLabel = document.createElement('label')
            catLabel.setAttribute('for',`${catName}${catDataObj[i].id}`)
            catLi.appendChild(catLabel)
            const catText = document.createElement('input')
            catText.setAttribute('type','text')
            catText.setAttribute('value', catDataObj[i].description)
            catText.setAttribute('dbid',`${catDataObj[i].id}`)
            catText.setAttribute('dbcat',`${catDataObj[i].category}`)
            catText.setAttribute('dbdt',`${catDataObj[i].date}`)
            catText.setAttribute('readonly','readonly')
            catText.addEventListener("dblclick", (event) => {
                event.target.removeAttribute("readonly")
                
            })
            catText.addEventListener("keydown", (event) => {
                if(event.key == "Enter"){
                    const dbid = event.target.getAttribute('dbid')
                    const dscvalue = event.target.value
                    const rfrcat = event.target.parentNode.parentNode.classList[0]
                    const rfrdt = event.target.getAttribute('dbdt').slice(0,10)
                    const rfrparsedDt = Date.parse(rfrdt) + 86400000
                    const rfrcontainer = event.target.parentNode.parentNode.parentNode
                    
                    // console.log(rfrcontainer)

                    // console.log(rfrcat)
                    // console.log(rfrdt)
                    // console.log(dbid)
                    // console.log(dscvalue)
                    if(dscvalue.length > 0){
                        event.target.setAttribute("readonly","readonly")
                        fetchGoalsAndTasksUpdate(dbid,"description",dscvalue)
                    .then(
                        res=>{
                            console.log(res)
                            // 
                        }
                    ).catch(
                            res=>console.log(res)
                        )
                    }else {
                        fetchGoalsAndTasksDelete(dbid)
                        .then(res=>{
                            goalsAndTasksRefresh(rfrcat,rfrdt,rfrparsedDt,rfrcontainer,pastOrFoward)

                        }).catch(res=>console.log(res))

                    }

                   
                } else{
                    return
                }
            })
            catLabel.appendChild(catText)
            catsContainer.insertBefore(catLi,newcat)
        } else {
            catsContainer.appendChild(catLi)
        }


    }


}
    
const dailyTasksFill = async ()=> {
    const dgoals = await goals()
    const dtasks = await tasks(dayofweekstr(Date.now()),pastOrFowardCounter)
    document.querySelector('#daily_toDo #dayTitle').innerText = daysOfTheWeek_Pt[currentDate.getDay()]
    goalsAndTasksFill(dgoals,'goal',10,document.querySelector(`#goalsContainer`),dayofweekstr(Date.now()))
    goalsAndTasksFill(dtasks,'task',15,document.querySelector(`#daily_toDo #tasksContainer`),dayofweekstr(Date.now()),currentDate.getDay(),pastOrFowardCounter)
    
}

if(document.querySelector('#daily_toDo')){
    dailyTasksFill()
}
    
const weekTasksFill = async (pastOrFoward)=>{
const mondayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * 86400000) + 86400000 - (86400000 * 7 * pastOrFoward)


const weekToDoContainers = document.querySelectorAll('.tasksContainer')
let dayofweek = mondayOfTheWeekMilisec
const array = await fetchGoalsAndTasksGet(pastOrFoward)
const arrfilter = (array,dt)=>{
    return array.filter(
        (el)=>{
            return (el.category==2 && el.date.slice(0,10)==dt)
        })

}

    weekToDoContainers.forEach((container)=>{
        const day = dayofweek
        const res = arrfilter(array,dayofweekstr(day))
                          
                goalsAndTasksFill(res,'task',15,container,dayofweekstr(day),new Date(day).getDay(),pastOrFoward)
            
        dayofweek = dayofweek + 86400000 
    })
}  

const toDoBackAndFoward = async ()=>{
    document.querySelector('#toDoBack').addEventListener('click',async (evt)=>{
        pastOrFowardCounter++
        await weekTasksFill(pastOrFowardCounter) 
        console.log(pastOrFowardCounter)
    })

    document.querySelector('#toDoFoward').addEventListener('click',async (evt)=>{
        pastOrFowardCounter--
        await weekTasksFill(pastOrFowardCounter) 
        console.log(pastOrFowardCounter)

    })


}
    
if(document.querySelector('.weeklyToDoTop')){
    weekTasksFill(pastOrFowardCounter) 
    toDoBackAndFoward()
}  


const scheduleFetchGet = async ()=>{
const endpoint = "http://127.0.0.1:3000/schedule"
return fetch(endpoint,{method:"GET"})
    .then(res=>res.json())
    .then(dados=>{
        return dados 
    })
}

const scheduleFetchUpdate = async (activity,day,period)=>{
    const activitytreatment = (activity.length > 0 ? activity : null)
    console.log(activitytreatment)
    const endpoint = `http://127.0.0.1:3000/schedule`
    const myHeaders = new Headers({"Content-Type": "application/json"})
    const body = {
        newActivity: activitytreatment , 
        dayweek: day, 
        scperiod: period 
    }
    
    return await fetch(endpoint,{method:"PATCH", headers: myHeaders, body: JSON.stringify(body)})
    .then(res=>res.json())
    .then(dados=>{return dados})
}


const schedulefilter = async (promise,scheduleDay)=>{
    const dados = await promise
    return dados.filter((el)=>{
        return el.i_dayweek_schedule == scheduleDay
    })
}



const scheduleFill = (schElements,obj,day,num)=>{
    
    
    for (let i in obj){

        if (obj[i].s_activity_schedule == null){
                schElements[i].children[num].children[0].setAttribute('value','')
                schElements[i].children[num].classList.remove(`${daysOfTheWeek_En[day]}`)
        } else {
                schElements[i].children[num].children[0].setAttribute('value',`${obj[i].s_activity_schedule}`)
                schElements[i].children[num].classList.add(`${daysOfTheWeek_En[day]}`)
                schElements[i].children[num].children[0].setAttribute('readonly','readonly')
                schElements[i].children[num].children[0].addEventListener("dblclick", (event) => {
                        event.target.removeAttribute("readonly")
                    })
                
            } 
            schElements[i].children[num].children[0].setAttribute('period',`${obj[i].i_period_schedule}`)
            schElements[i].children[num].children[0].setAttribute('day',`${obj[i].i_dayweek_schedule}`)
            schElements[i].children[num].children[0].addEventListener("keydown", (event) => {
                if(event.key == "Enter"){
                    event.target.setAttribute("readonly","readonly")
                    const period = event.target.getAttribute('period')
                    const day = event.target.getAttribute('day')
                    const activity = event.target.value
                    if (document.querySelectorAll(".daily_schedule .scheduleRow").length > 0) {    
                            
                            scheduleFetchUpdate(activity,day,period)
                            .then((res)=>{
                                scheduleDayFill()
                            })
                        
                    } else if(document.querySelectorAll('.week_schedule tbody').length > 0) {
                        
                            scheduleFetchUpdate(activity,day,period)
                            .then((res)=>{

                                scheduleWeekFill()
    
                            })
                    }
                    
    
                }
                
            })   
    }
}
        
const scheduleDayFill = async ()=>{
    const dailySchedule = document.querySelectorAll(".daily_schedule .scheduleRow")
    const schOfDay = await schedulefilter(scheduleFetchGet(),currentDate.getDay())
    scheduleFill(dailySchedule,schOfDay,currentDate.getDay(),1)
    

}

const scheduleWeekFill = async ()=>{
    
    const weekSchedule = document.querySelectorAll('.week_schedule tbody .scheduleRow')
    const scheduleDays = [1,2,3,4,5,6,0]
    const scharray = await scheduleFetchGet()
    
    scheduleDays.forEach((day)=>{
        
        schedulefilter(scharray,day)
        .then(
            schOfDay=>{
                scheduleFill(weekSchedule,schOfDay,day,(scheduleDays.indexOf(day)+1))    
            }
        )   
    })
}

if (document.querySelectorAll(".daily_schedule .scheduleRow").length > 0) {    
    scheduleDayFill()
}

if(document.querySelectorAll('.week_schedule tbody').length > 0) {
    scheduleWeekFill()
}




const contactsFill = async (prms)=>{
    const data = await prms
    const contactsCardsSection = document.querySelector('#contactsCards')


    data.forEach((obj)=>{

    const contact = document.createElement('div')
    contact.setAttribute('id', `contact${obj.id}`)
    contact.classList.add('contactCard') 
    if(contactsCardsSection){
        contactsCardsSection.appendChild(contact)
    }


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
    toolIcon.setAttribute('dbid',`${obj.id}`)
    toolIcon.addEventListener('click',(evt)=>{
        showContactsEditor({nomectt:`${obj.Nome}`,vinculo:`${obj.Vínculo}`,disciplina:`${obj.Disciplina}`,email:`${obj.Email}`,telefone:`${obj.Telefone}`,sitectt:`${obj.Site}`,instituicao:`${obj.Instituição}`})
        contactsEditorAddFunctions(contactsFetchUpdate,obj.id) 
    })
    toolButton.appendChild(toolIcon)

        const toolCheckbox = document.createElement('input')
        toolCheckbox.setAttribute('type','checkbox')
        toolCheckbox.setAttribute('name',`contactCheckbox${obj.id}`)
        toolCheckbox.setAttribute('id',`contactCheckbox${obj.id}`)
        toolCheckbox.setAttribute('dbid',`${obj.id}`)
        toolCheckbox.classList.add("contactCheckbox")
        cardTools.appendChild(toolCheckbox)

        for (prop in obj) {
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


}


const contactsFetchGet = async (i)=>{
    const endpoint = `http://127.0.0.1:3000/contacts;${i}`

    return fetch(endpoint,{method:"GET"})
    .then(res=>res.json())
    .then(dados=>{
        return dados[0]
    })
}


const contactsFetchInsert = async (nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao) => {
    const endpoint = "http://127.0.0.1:3000/contacts"
    const myHeaders = new Headers({"Content-Type": "application/json"});
    const body = {
        nomectt: nomectt,
        vinculo: vinculo,
        disciplina: disciplina,
        email: email,
        telefone: telefone,
        sitectt: sitectt,
        instituicao: instituicao
    }

    return fetch(endpoint,{method:"POST", headers: myHeaders, body: JSON.stringify(body)})
    .then(res=>res.json())
    .then(dados=>{return dados})
}

const contactsFetchUpdate = async (nomectt,vinculo,disciplina,email,telefone,sitectt,instituicao,id)=>{

    const endpoint = `http://127.0.0.1:3000/contacts;${id}`
    const myHeaders = new Headers({"Content-Type": "application/json"});
    const body = {
        nomectt: nomectt,
        vinculo: vinculo,
        disciplina: disciplina,
        email: email,
        telefone: telefone,
        sitectt: sitectt,
        instituicao: instituicao
    }

    return fetch(endpoint,{method:"PATCH", headers: myHeaders, body: JSON.stringify(body)})
    .then(res=>res.json())
    .then(dados=>{return dados})
}

const contactsFetchDelete = async (id)=>{
    const endpoint = `http://127.0.0.1:3000/contacts;${id}`

    return fetch(endpoint,{method:"DELETE"})
    .then(res=>res.json())
    .then(dados=>{return dados})
}

const contactsFetchSearch = async (col,searchstr)=>{
    const endpoint = `http://127.0.0.1:3000/contactsSearch`
    myHeaders = new Headers({"Content-Type": "application/json"});
    body = {
        col: col,
        searchstr: searchstr
    }

    return fetch(endpoint,{method:"POST", headers:myHeaders, body: JSON.stringify(body)})
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        return dados[0]})

}

const getContactsCount = async ()=>{
    
    const endpoint = "http://127.0.0.1:3000/getContactsCount"
    return fetch(endpoint,{methord:'GET'})
    .then(res=>res.text())
    .then(dados=>{
        // console.log(((parseInt(dados) / divnum) > 1 ? true : false))
        return parseInt(dados)

    })
}

const showContactsEditor = (data)=>{
    const editPanel = document.querySelector('#editContact')
    editPanel.style.display = 'flex'

    const nome = document.querySelector('#nameEdit')
    const vin = document.querySelector('#bondEdit')
    const dt = document.querySelector('#subjectEdit')
    const mail = document.querySelector('#emailEdit') 
    const tel = document.querySelector('#telEdit') 
    const st = document.querySelector('#linkEdit') 
    const inst = document.querySelector('#institutionEdit')


    if(data){
        nome.value = data.nomectt
        vin.value = data.vinculo
        dt.value = data.disciplina
        mail.value = data.email
        tel.value = data.telefone
        st.value = data.sitectt
        inst.value = data.instituicao
    } else { 
        nome.value = ""
        vin.value = ""
        dt.value = ""
        mail.value = ""
        tel.value = ""
        st.value = ""
        inst.value = ""

    }
    
}

const hideContactsEditor = ()=>{
    const editPanel = document.querySelector('#editContact')
    editPanel.style.display = 'none'


}

const contactsCardsClear = ()=>{
    const contactsCardsSection = document.querySelector('#contactsCards')
    contactsCardsSection.innerHTML = ''
}

     

const contactsEditorAddFunctions = (okBtnMethod,id)=>{
    document.querySelector('#editOkBtn').addEventListener('click',async (evt)=>{
        const nome = document.querySelector('#nameEdit').value
        const vinculo = document.querySelector('#bondEdit').value
        const disciplina = document.querySelector('#subjectEdit').value
        const email = document.querySelector('#emailEdit').value
        const telefone = document.querySelector('#telEdit').value
        const site = document.querySelector('#linkEdit').value
        const instituicao = document.querySelector('#institutionEdit').value
        const res = await okBtnMethod(nome,vinculo,disciplina,email,telefone,site,instituicao,id)
        console.log(id)
        console.log(res)
        hideContactsEditor()
        contactsCardsClear()
        await contactsFill(contactsFetchGet(0))
        
    },{once:true})
    document.querySelector('#editCancelBtn').addEventListener('click',(evt)=>{
        hideContactsEditor()
    },{once:true})
    
}

const contactsHeaderAddFunctions = ()=>{
    document.querySelector('#newContact_btn').addEventListener('click',(evt)=>{
        showContactsEditor()
        contactsEditorAddFunctions(contactsFetchInsert) 
    })
    document.querySelector('#del_btn').addEventListener('click',async (evt)=>{
        const checkedcheckboxes = document.querySelectorAll('.contactCheckbox:checked')
        checkedcheckboxes.forEach((el)=>{
            contactsFetchDelete(el.getAttribute('dbid'))
            console.log(el.getAttribute('dbid'))
            el.parentNode.parentNode.remove()
        })

    })
    document.querySelector('#selectAll_btn').addEventListener('input',(evt)=>{
        if(evt.target.checked == true){
            const uncheckedCheckboxes = document.querySelectorAll('.contactCheckbox:not(.contactCheckbox:checked)')
            uncheckedCheckboxes.forEach((box)=>{
                box.checked = true
            })
        }else{
            const checkedcheckboxes = document.querySelectorAll('.contactCheckbox:checked')
            checkedcheckboxes.forEach((box)=>{
                box.checked = false
            })
        }
    })
    document.querySelector('#search_btn').addEventListener('click',(evt)=>{
        const searchOption = document.querySelector('#searchCategories option:checked').getAttribute('dbcol')
        const txt = document.querySelector('#searchText').value
        document.querySelector('#contactsCards').innerHTML = ''
        

        contactsFill(contactsFetchSearch(searchOption,txt))

    })
}


const moreContacts = async ()=>{
    const cttsqtt = await getContactsCount()
    const contactsCardsSection = document.querySelector('#contactsCards')
    if((cttsqtt / (contactsCounter + 20)) > 1 ){
        const moreElements = document.createElement('div')
        moreElements.innerHTML = 'carregar mais contatos'
        moreElements.style.cursor = 'pointer'
        moreElements.style.textAlign = 'center'
        moreElements.addEventListener('click',(evt)=>{
           contactsCounter += 20
           contactsFill(contactsFetchGet(contactsCounter))
            console.log(contactsCounter)
            evt.target.remove()
            moreContacts()
              
        })
        contactsCardsSection.appendChild(moreElements)
    }


}

const contactsUsualCardsFill = async () =>{
    await contactsFill(contactsFetchGet(0))
    await moreContacts()

}

contactsHeaderAddFunctions()
contactsUsualCardsFill()



console.log("page load")











 




























