
fetch('http://localhost:3000/films')
.then(res => res.json())
.then((data) => {
    
    
       data.forEach( (element) => {
            handleData(element)
        }
        
        );

        renderpage(data[0])
        

        
        
    })
    

function handleData(element){
    const title = element.title
    
    const runtime = element.runtime
    const showtime = element.showtime
    const description = element.description
    const capacity = element.capacity
    const tickets_sold = element.tickets_sold
    const image = element.poster
   
   
        let list = document.querySelector('#films')

        let li = document.createElement('li')

        list.appendChild(li)

        li.classList = 'kanu2'
        li.innerText =`${title}`
        

        li.addEventListener('click', (element) =>{
            let varTitle = document.querySelector('#title')
            let varRunTime = document.querySelector('#runtime')
            let varshowTime = document.querySelector('#showtime')
            let varTicketsAvailable = document.querySelector('#tickets-available')
            let ticketsu = capacity - tickets_sold
            let img = document.querySelector('#img')
            let desc = document.querySelector('#description')

            varTitle.innerText =`${title}`
            varRunTime.innerText = `${runtime}`
            varshowTime.innerText = `${showtime}`
            varTicketsAvailable.innerText = `${ticketsu}`
            console.log(capacity)
            img.src = image

            desc.innerText = `Description: ${description}`
            
            batoni.classList.remove('hidden')

            tickets.classList.remove('bg')

            
          


       })




       let tickets = document.querySelector('#tickets-available')
       batoni.addEventListener('click', decrease)
       batoni.addEventListener('click', () => {
        
       })

       console.log(batoni.addEventListener('click', decrease));


        

  
   



}
let update 
       let tickets = document.querySelector('#tickets-available')
       let batoni = document.querySelector('#batoni')
       
function decrease(){
        let current = tickets.innerText
        update =  current - 1
           
          
        tickets.innerText = `${update}`

        if (update === 0){
            batoni.classList.add('hidden')

            tickets.innerText = `SOLD OUT!`
            tickets.classList.add('bg')

        }

if(update === NaN){
            

    tickets.innerText = `SOLD OUT!`
    tickets.classList.add('bg')
}
}


function renderpage(data){

            let varTitle = document.querySelector('#title')
            let varRunTime = document.querySelector('#runtime')
            let varshowTime = document.querySelector('#showtime')
            let varTicketsAvailable = document.querySelector('#tickets-available')
            let ticketsu1 = data.capacity - data.tickets_sold
            let img = document.querySelector('#img')
            let desc = document.querySelector('#description')
            let image1 = data.poster

            varTitle.innerText =`${data.title}`
            varRunTime.innerText = `${data.runtime}`
            varshowTime.innerText = `${data.showtime}`
            varTicketsAvailable.innerText = `${ticketsu1}`
            
             img.src = image1

            desc.innerText = `Description: ${data.description}`
}
