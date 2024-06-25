    // ____________--------->Global-------____________

    const searchButton =document.getElementById('buttonSearch')
    const inbutSearch = document.getElementById('inputSearch')
    const rowData = document.getElementById('rowData')
    // ===========================>
    const date= new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = daysOfWeek[date.getDay()];
    let today =date.getDate();
    let month = monthsOfYear[date.getMonth()];

    date.setDate(date.getDate()+1 );
    let nextDay=daysOfWeek[date.getDay()]

    date.setDate(date.getDate()+1 );
    let twoDays=daysOfWeek[date.getDay()]
    // ==================================>
    let forecast=[]
    let data=[];
    let alertMessage = document.getElementById('myAlert')

    // __________-----------Events--------________


    searchButton.addEventListener('click',function(){
        getWeather(inbutSearch.value);
        
    })
    inbutSearch.addEventListener('input',function(){
        getWeather(inbutSearch.value);
    })
    //! _______-_--------Functions-------___________

    async function getWeather(weather){

        try {                                                                         
            let response= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=11d70536537c45f987c140959242506&q=${weather}&days=3`);
        data = await response.json()
        
        const tetals=data.current
        const nameCity=data.location.name
        const forecast=data.forecast
        displayData(nameCity,tetals)
        alertMessage.classList.add('d-none')    
        } catch (error) {

        alertMessage.classList.remove('d-none') 
    }
        
    }
    getWeather("cairo")

    function displayData(name,name2){
        let cartona =` <div class="col-md-4 sh-1">
        <div class="myText  d-flex align-items-center justify-content-between ">
        <p>${day}</p>
        <p>${today}${month}</p>
    </div>
        <div><h2>${name}</h2>
            <p>${name2.temp_c}C</p>
            <img src="https:${name2.condition.icon}" alt="${name2.condition.text}">
            <h6>${name2.condition.text}</h6>
        
        
        </div>
        <div class="sh3 d-flex  gap-4">
            <span class="d-flex justify-content-center gap-2 " ><i class="fa-solid fa-umbrella"></i> <p>20%</p></span class="d-flex justify-content-center ">
            <span class="d-flex justify-content-center gap-2"><i class="fa-solid fa-wind"></i> <p>18km/h</p></span class="d-flex justify-content-center ">
        <span class="d-flex justify-content-center gap-2"><i class="fa-regular fa-compass"></i> <p>East</p></span>
        </div>

    </div>
    <div class="col-md-4 text-center sh-2">
        <div class="myText "><p>${nextDay}</p>
        </div>
        <div><h2></h2>
            <p>${data.forecast.forecastday[1].day.maxtemp_c}C</p>
            <img src="https:${data.forecast.forecastday[1].day.condition.icon}"  alt="${name2.condition.text}">
            <h6>${data.forecast.forecastday[1].day.condition.text}</h6>
        
        
        </div>
    

    </div>
    <div class="col-md-4 sh-3">
        <div class="myText "><p>${twoDays}</p>
        </div>
        <div><h2></h2>
            <p>${data.forecast.forecastday[2].day.maxtemp_c}C</p>
            <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}">
            <h6>${data.forecast.forecastday[2].day.condition.text}</h6>
        
        
        </div>
    

    </div>  `
        for(let i = 0 ; i < data.length   ; i++){
            cartona =`     <div class="col-md-4 sh-1">
            <div class="myText  d-flex align-items-center justify-content-between ">
            <p>${day}</p>
            <p>${today}/${month}</p>
        </div>
            <div><h2>${name}</h2>
                <p>${name2.temp_c}C</p>
                <img src="https:${name2.condition.icon}" alt="${name2.condition.text}">
                <h6>${name2.condition.text}</h6>
            
            
            </div>
            <div class="sh3 d-flex  gap-4">
                <span class="d-flex justify-content-center gap-2 " ><i class="fa-solid fa-umbrella"></i> <p>20%</p></span class="d-flex justify-content-center ">
                <span class="d-flex justify-content-center gap-2"><i class="fa-solid fa-wind"></i> <p>18km/h</p></span class="d-flex justify-content-center ">
            <span class="d-flex justify-content-center gap-2"><i class="fa-regular fa-compass"></i> <p>East</p></span>
            </div>

        </div>
        <div class="col-md-4 text-center sh-2">
            <div class="myText "><p>${nextDay}</p>
            </div>
            <div><h2></h2>
                <p>${data.forecast.forecastday[1].day.maxtemp_c}C</p>
                <img src="https:${data.forecast.forecastday[1].day.condition.icon}"  alt="${name2.condition.text}">
            <h6>${data.forecast.forecastday[1].day.condition.text}</h6>
            
            
            </div>
        

        </div>
        <div class="col-md-4 sh-3">
            <div class="myText "><p>${twoDays}</p>
            </div>
            <div><h2></h2>
                <p>${data.forecast.forecastday[2].day.maxtemp_c}C</p>
                <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}">
                <h6>${data.forecast.forecastday[2].day.condition.text}</h6>
            
            
            </div>
        

        </div>


            
            
            `

        }
        rowData.innerHTML=cartona
    }