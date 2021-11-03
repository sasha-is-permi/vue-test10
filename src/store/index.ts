/* 
API key:
ce1b6e87e1a00244469fbe228fec3269

Пермь:
lat=58.0&lon=56.14

Полазна:
lat=58.29&lon=56.42

Москва:
lat=55.75&lon=37.62


import Vue from 'vue'
import Vuex from 'vuex'
import { GetterTree, MutationTree, ActionTree } from "vuex"
import MySubModule from '@/store/submodule'
Vue.use(Vuex)
class State {
    userId: string | null = null;
}
const getters = <GetterTree<State, any>>{
};
const mutations = <MutationTree<State>>{
    setUserId(state, payload) {
        state.userId = payload;
    }
};
const actions = <ActionTree<State, any>>{
    fetchUserId(store) {
    }
};
export default new Vuex.Store({
    state: new State(),
    mutations: mutations,
    actions: actions,
    modules: {
        subModuleName: MySubModule,
        //other submodules
    }
})










*/


import { createStore} from 'vuex'


import axios from 'axios';

let pathFromApi = "https://api.openweathermap.org/data/2.5/onecall?lat=55.75&lon=37.62&units=metric&lang=ru&appid=9b8bdb2ae53f944ff3f79cb14af0ad03&cnt=7"

function dayOfWeak(day:number):string{
  let dayOfWeak:string=""
  switch (day) {
      case 0:
      dayOfWeak="Вс"
      break;
    case 1:
      dayOfWeak="Пн"
      break;
    case 2:
      dayOfWeak="Вт"
      break;   
    case 3:
      dayOfWeak="Ср"
      break;  
    case 4:
      dayOfWeak="Чт"
      break;
    case 5:
      dayOfWeak="Пн"
      break;   
    case 6:
      dayOfWeak="Сб"
      break;       
  }
  return dayOfWeak;
 }     


 
function month(monthNumber:number):string{
  let monthString:string=""
  switch (monthNumber) {
    case 0:
      monthString="Янв"
      break;
    case 1:
      monthString="Фев"
      break;
    case 2:
      monthString="Мар"
      break;   
    case 3:
      monthString="Апр"
      break;  
    case 4:
      monthString="Май"
      break;
    case 5:
      monthString="Июн"
      break;   
    case 6:
      monthString="Июл"
      break;  
    case 7:
      monthString="Авг"
      break;
    case 8:
      monthString="Сен"
      break;
    case 9:
      monthString="Окт"
      break;   
    case 10:
      monthString="Ноя"
      break;  
    case 11:
      monthString="Дек"
      break;     
  }
  return monthString;
 }    

 function wind_deg(wind_deg_number:number):string{
  let wind_deg_string:string=""
   if (wind_deg_number>=0 && wind_deg_number<=30){wind_deg_string="северный"}
   else if (wind_deg_number>30 && wind_deg_number<=60){wind_deg_string="С-В"}
   else if (wind_deg_number>60 && wind_deg_number<=120){wind_deg_string="восточный"}
   else if (wind_deg_number>120 && wind_deg_number<=150){wind_deg_string="Ю-В"}
   else if (wind_deg_number>150 && wind_deg_number<=210){wind_deg_string="южный"}
   else if (wind_deg_number>210 && wind_deg_number<=240){wind_deg_string="Ю/З"}
   else if (wind_deg_number>240 && wind_deg_number<=300){wind_deg_string="западный"}
   else if (wind_deg_number>300 && wind_deg_number<=330){wind_deg_string="С/З"}
   else if (wind_deg_number>330 && wind_deg_number<=360){wind_deg_string="северный"}

  
  return wind_deg_string;
 } 

 // Описание типов
 type Obj0 = { num: number, currentTemp: number,feels_like: number, description:string,humidity:number,wind_speed:number,
  wind_deg:string,clouds:number,img:string}

 type ObjOther = { num:number,date: Date,day:number,dayOfWeak:string,month:string,maxT:number,minT:number,img:string} 
  
  
  
 // Задание объектов. Потом в state из них сформируем первоначальный массив, куда будем данные записывать с помощью commit
 let obj0:Obj0 = {num:0, currentTemp:0, feels_like:0, description:"", humidity:0, wind_speed:0, wind_deg:"", clouds:0, img:""}


let date1:Date= new Date()

 let obj1:ObjOther = {num:1,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
 let obj2:ObjOther = {num:2,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
 let obj3:ObjOther = {num:3,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
 let obj4:ObjOther = {num:4,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
 let obj5:ObjOther = {num:5,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
 let obj6:ObjOther = {num:6,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
 let obj7:ObjOther = {num:7,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}
 let obj8:ObjOther = {num:8,date:date1,day:0,dayOfWeak:"",month:"",maxT:0,minT:0,img:""}

 export default createStore({
  state:{
    weatherToday : obj0,
    weather: [obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8]    
  },
  mutations: {

    
     // записываем в state полученную информацию
     weather(state,data){                 
      state.weatherToday.currentTemp = Math.round(+data.current.temp)
      state.weatherToday.feels_like = Math.round(+data.current.feels_like)
      state.weatherToday.description = data.current.weather[0].description
      state.weatherToday.humidity = data.current.humidity
      state.weatherToday.wind_speed = data.current.wind_speed
      state.weatherToday.wind_deg = wind_deg(+data.current.wind_deg)
      state.weatherToday.clouds = data.current.clouds
      state.weatherToday.img ="https://openweathermap.org/img/wn/"+ data.current.weather[0].icon + ".png"    

      for(let i:number=0; i<8;i++){
        state.weather[i].num = i+1
        state.weather[i].date =    new Date(+data.daily[i].dt *1000 );
        state.weather[i].day =      +state.weather[i].date.getDate() ;
        state.weather[i].dayOfWeak = dayOfWeak(+state.weather[i].date.getDay()) ;
        state.weather[i].month = month(+state.weather[i].date.getMonth()) ;
        state.weather[i].maxT = Math.round(+data.daily[i].temp.max)
        state.weather[i].minT = Math.round(+data.daily[i].temp.min)         
        state.weather[i].img ="https://openweathermap.org/img/wn/"+ data.daily[i].weather[0].icon + ".png"    
  
      }
    
    },
  },
  actions: {
    // Получение всех элементов из базы данных
    getWeather({state,commit}){
            
      axios({
           method: 'get',
           url: `${pathFromApi}`,
           headers: {   
            'Content-Type': 'application/json'                
            }


           })
                     
           .then(function (response) {        
           if (response.status === 200) {  
           console.log("weather",response)         
           commit('weather',response.data) }})
           .catch(function (error) {
            console.log("Ошибка получения данных с сервера!")
       });    
             }           


  },
  getters:{
    weather(state) {
      // Возвращаем погоду по запросу из приложения
      return state.weather
  },    
    weatherToday(state) {
    // Возвращаем погоду по запросу из приложения
    return state.weatherToday
}    
  }
})
