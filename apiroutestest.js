// GET GOALS AND TASKS VARIABLES AND FETCH OK

// currentDate = new Date()
// //negative numbers to go foward 
// //and positive numbers to go back in days
// let pastOrFoward = 1
// const pastOrFowardRegularizer = (pastOrFoward == 0 ? ()=>{pastOrFoward=-1 ; return -1} : pastOrFoward)
// const mondayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * pastOrFowardRegularizer * 86400000) + 86400000 
// const sundayOfTheWeekMilisec = (Date.now() - (currentDate.getDay() == 0 ? 7 : currentDate.getDay()) * pastOrFowardRegularizer * 86400000) + (86400000 * 7) 
// const mondayDateString = new Date(mondayOfTheWeekMilisec).toJSON().slice(0,10)
// const sundayDateString = new Date(sundayOfTheWeekMilisec).toJSON().slice(0,10)

// const endpoint = "http://127.0.0.1:3000/getgoalsandtasks"
// const myHeaders = new Headers({"Content-Type": "application/json"})
// fetch(endpoint,{method: "POST", headers: myHeaders ,body: JSON.stringify({data1:mondayDateString,data2:sundayDateString})})
// .then(res=>res.json())
// .then(dados=>{console.log(dados)}) 

// GET SCHEDULE OK

// const endpoint = "http://127.0.0.1:3000/schedule"
// fetch(endpoint,{method:"GET"})
// .then(res=>res.json())
// .then(dados=>console.log(dados))

// GET CONTACTS OK

// const endpoint = "http://127.0.0.1:3000/contacts"
// fetch(endpoint,{method:"GET"})
// .then(res=>res.json())
// .then(dados=>console.log(dados))

//GET CONTACTS COUNT
// let i = 1
// const divnum = 20 * i

// const endpoint = "http://127.0.0.1:3000/getContactsCount"
// fetch(endpoint,{methord:'GET'})
// .then(res=>res.text())
// .then(dados=>{
//     console.log(((parseInt(dados) / divnum) > 1 ? true : false))
//     return parseInt(dados)

// })

// POST NEW GOAL OR TASK OK

// const endpoint = "http://127.0.0.1:3000/goalsandtasks"
// const myHeaders = new Headers({"Content-Type": "application/json"});
// const body = {
//     dsc: "teste", //editável
//     typenum: 2, //editável
//     acc: false, //editável
//     dt: "2024-05-26" //editável
// }

// fetch(endpoint,{method:"POST", headers: myHeaders, body: JSON.stringify(body)})
// .then(res=>res.json())
// .then(dados=>(console.log(dados)))

//POST NEW CONTACT OK

// const endpoint = "http://127.0.0.1:3000/contacts"
// const myHeaders = new Headers({"Content-Type": "application/json"});
// const body = {
//     nomectt:"teste",
//     vinculo:"teste",
//     disciplina:"teste",
//     email:"teste",
//     telefone:"teste",
//     sitectt:"teste",
//     instituicao:"teste"
// }

// fetch(endpoint,{method:"POST", headers: myHeaders, body: JSON.stringify(body)})
// .then(res=>res.json())
// .then(dados=>(console.log(dados)))

//PATCH (UPDATE) GOALS AND TASKS OK

// const id = 45
// const myHeaders = new Headers({"Content-Type": "application/json"})
// const endpoint = `http://127.0.0.1:3000/goalsandtasks;${id}`

// const body = {
//     campo:"description", //campo must be "description" or "acc" && entrada must be a string
//     entrada:"novoteste" 
// }

// fetch(endpoint,{method:"PATCH", headers:myHeaders ,body: JSON.stringify(body)})
// .then(res=>res.json())
// .then(dados=>(console.log(dados)))

//PATCH (UPDATE) CONTACT OK

// const id = 20 //editável
// const endpoint = `http://127.0.0.1:3000/contacts;${id}`
// const myHeaders = new Headers({"Content-Type": "application/json"});
// const body = {
//     nomectt:"teste2", //editável
//     vinculo:"teste2", //editável
//     disciplina:"teste", //editável
//     email:"teste", //editável
//     telefone:"teste", //editável
//     sitectt:"teste", //editável
//     instituicao:"teste" //editável
// }

// fetch(endpoint,{method:"PATCH", headers: myHeaders, body: JSON.stringify(body)})
// .then(res=>res.json())
// .then(dados=>(console.log(dados)))

//PATCH (UPDATE) SCHEDULE

// const endpoint = `http://127.0.0.1:3000/schedule`
// const myHeaders = new Headers({"Content-Type": "application/json"})
// const body = {
//     newActivity:"Fazer as unhas", //editável
//     dayweek: 3, //editável
//     scperiod: 5 //editável
// }

// fetch(endpoint,{method:"PATCH", headers: myHeaders, body: JSON.stringify(body)})
// .then(res=>res.json())
// .then(dados=>(console.log(dados)))

//DELETE GOALS AND TASKS OK
// const id = 44
// const endpoint = `http://127.0.0.1:3000/goalsandtasks;${id}`


// fetch(endpoint,{method:"DELETE"})
// .then(res=>res.json())
// .then(dados=>(console.log(dados)))

//DELETE CONTACTS OK
// const id = 19
// const endpoint = `http://127.0.0.1:3000/contacts;${id}`


// fetch(endpoint,{method:"DELETE"})
// .then(res=>res.json())
// .then(dados=>(console.log(dados)))





